/**
 * A custom React hook for managing WebSocket connections with automatic reconnection capabilities.
 *
 * @param url - The WebSocket server URL to connect to
 * @param options - Configuration options for the WebSocket connection
 * @param options.onOpen - Callback function executed when the connection opens
 * @param options.onClose - Callback function executed when the connection closes
 * @param options.onError - Callback function executed when an error occurs
 * @param options.reconnect - Whether to automatically reconnect on disconnection (default: true)
 * @param options.reconnectInterval - Time in milliseconds between reconnection attempts (default: 3000)
 *
 * @returns An object containing:
 * - socket: The WebSocket instance or null if disconnected
 * - messages: Array of received messages (automatically parsed if JSON)
 * - connectionStatus: Current connection status ("connecting" | "connected" | "disconnected")
 * - sendMessage: Function to send messages through the WebSocket
 * - connect: Function to manually initiate a connection
 * - disconnect: Function to manually close the connection
 *
 * @example
 * ```typescript
 * const {
 *   socket,
 *   messages,
 *   connectionStatus,
 *   sendMessage,
 *   disconnect
 * } = useWebSocket('wss://api.example.com', {
 *   onOpen: () => console.log('Connected!'),
 *   onClose: () => console.log('Disconnected!'),
 *   reconnect: true,
 *   reconnectInterval: 5000
 * });
 *
 * // Send a message
 * sendMessage({ type: 'message', content: 'Hello!' });
 *
 * // Listen to incoming messages
 * useEffect(() => {
 *   console.log('Latest message:', messages[messages.length - 1]);
 * }, [messages]);
 *
 * // Cleanup connection
 * useEffect(() => {
 *   return () => disconnect();
 * }, []);
 * ```
 */
import {useState, useCallback, useEffect, useRef} from "react";

interface WebSocketOptions {
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
  reconnect?: boolean;
  reconnectInterval?: number;
}

export function useWebSocket(url: string, options: WebSocketOptions = {}) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("connecting");

  const {
    onOpen,
    onClose,
    onError,
    reconnect = true,
    reconnectInterval = 3000,
  } = options;

  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const connect = useCallback(() => {
    const ws = new WebSocket(url);

    ws.onopen = (event) => {
      setSocket(ws);
      setConnectionStatus("connected");
      onOpen?.(event);
    };

    ws.onmessage = (event) => {
      try {
        const parsedMessage = JSON.parse(event.data);
        setMessages((prev) => [...prev, parsedMessage]);
      } catch {
        setMessages((prev) => [...prev, event.data]);
      }
    };

    ws.onclose = (event) => {
      setSocket(null);
      setConnectionStatus("disconnected");
      onClose?.(event);

      if (reconnect) {
        reconnectTimeoutRef.current = setTimeout(connect, reconnectInterval);
      }
    };

    ws.onerror = (event) => {
      onError?.(event);
    };

    return ws;
  }, [url, onOpen, onClose, onError, reconnect, reconnectInterval]);

  const sendMessage = useCallback(
    (message: any) => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(
          typeof message === "string" ? message : JSON.stringify(message)
        );
      }
    },
    [socket]
  );

  const disconnect = useCallback(() => {
    if (socket) {
      socket.close();
    }
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }
  }, [socket]);

  useEffect(() => {
    const ws = connect();

    return () => {
      ws.close();
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connect]);

  return {
    socket,
    messages,
    connectionStatus,
    sendMessage,
    connect,
    disconnect,
  };
}
