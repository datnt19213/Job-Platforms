/* eslint-disable no-throw-literal */
// services/apiHandler.ts
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

/**
 * A class that handles API requests using Axios with built-in interceptors and error handling.
 *
 * @example
 * ```typescript
 * // Initialize the handler
 * const api = new ApiHandler('https://api.example.com');
 *
 * // Make GET request
 * try {
 *   const response = await api.get<UserData>('/users/1');
 *   console.log(response.data);
 * } catch (error) {
 *   console.error(error.message);
 * }
 *
 * // Make POST request with data
 * try {
 *   const newUser = { name: 'John Doe', email: 'john@example.com' };
 *   const response = await api.post<UserData>('/users', newUser);
 *   console.log(response.data);
 * } catch (error) {
 *   console.error(error.message);
 * }
 * ```
 *
 * @property {string} baseURL - The base URL for all API requests
 * @throws {ApiResponse} Throws standardized error responses for different types of request failures
 *   - When server responds with error: Contains server's response data and status
 *   - When no response received: { data: null, message: "No response from server", status: 0 }
 *   - When request setup fails: { data: null, message: error.message, status: -1 }
 *
 * @remarks
 * - Automatically handles authentication by adding Bearer token from localStorage
 * - Provides standardized error handling across all requests
 * - Supports GET, POST, PUT, and DELETE methods
 * - Includes type safety with generic response types
 */
class ApiHandler {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    axios.interceptors.request.use(
      (config) => {
        config.baseURL = this.baseURL;
        // Add auth token if exists
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  async request<T>(
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      let response: AxiosResponse;

      switch (method) {
        case "get":
          response = await axios.get(url, config);
          break;
        case "post":
          response = await axios.post(url, data, config);
          break;
        case "put":
          response = await axios.put(url, data, config);
          break;
        case "delete":
          response = await axios.delete(url, config);
          break;
        default:
          throw new Error("Invalid method");
      }

      return {
        data: response.data,
        message: "Success",
        status: response.status,
      };
    } catch (error: any) {
      // Centralized error handling
      if (error.response) {
        // The request was made and the server responded with a status code
        throw {
          data: error.response.data,
          message: error.response.data.message || "An error occurred",
          status: error.response.status,
        };
      } else if (error.request) {
        // The request was made but no response was received
        throw {
          data: null,
          message: "No response from server",
          status: 0,
        };
      } else {
        // Something happened in setting up the request
        throw {
          data: null,
          message: error.message,
          status: -1,
        };
      }
    }
  }

  // Convenience methods
  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>("get", url, undefined, config);
  }

  post<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return this.request<T>("post", url, data, config);
  }

  put<T>(url: string, data: any, config?: AxiosRequestConfig) {
    return this.request<T>("put", url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.request<T>("delete", url, undefined, config);
  }
}

// Create instance
export const apiHandler = new ApiHandler(
  process.env.NEXT_PUBLIC_API_URL || "/api"
);
