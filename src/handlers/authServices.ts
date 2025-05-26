// services/authService.ts
import axios from "axios";
import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

interface AuthState {
  user: any;
  token: string | null;
  login: (credentials: {email: string; password: string}) => Promise<void>;
  logout: () => void;
  register: (userData: any) => Promise<void>;
  refreshToken: () => Promise<void>;
}

/**
 * Auth store using Zustand for managing authentication state and operations.
 *
 * @interface AuthState
 * @property {User | null} user - The current authenticated user or null
 * @property {string | null} token - The authentication token or null
 * @property {(credentials: LoginCredentials) => Promise<void>} login - Authenticates user with credentials
 * @property {() => void} logout - Clears the authentication state
 * @property {(userData: RegisterData) => Promise<void>} register - Creates new user account and authenticates
 * @property {() => Promise<void>} refreshToken - Refreshes the authentication token
 *
 * @throws {Error} When login fails with message "Login failed"
 * @throws {Error} When registration fails with message "Registration failed"
 *
 * @example
 * ```typescript
 * const { user, token, login, logout, register, refreshToken } = useAuthStore();
 *
 * // Login
 * await login({ email: 'user@example.com', password: '123456' });
 *
 * // Register
 * await register({
 *   email: 'newuser@example.com',
 *   password: '123456',
 *   name: 'John Doe'
 * });
 *
 * // Logout
 * logout();
 *
 * // Refresh token
 * await refreshToken();
 * ```
 *
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,

      login: async (credentials) => {
        try {
          const response = await axios.post("/api/login", credentials);
          set({
            user: response.data.user,
            token: response.data.token,
          });
        } catch (error) {
          throw new Error("Login failed");
        }
      },

      logout: () => {
        set({user: null, token: null});
      },

      register: async (userData) => {
        try {
          const response = await axios.post("/api/register", userData);
          set({
            user: response.data.user,
            token: response.data.token,
          });
        } catch (error) {
          throw new Error("Registration failed");
        }
      },

      refreshToken: async () => {
        try {
          const response = await axios.post("/api/refresh-token", {
            token: get().token,
          });
          set({token: response.data.token});
        } catch (error) {
          get().logout();
        }
      },
    }),
    {
      name: "auth-storage",

      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Interceptor for all requests
export const setupAxiosInterceptors = (store: any) => {
  axios.interceptors.request.use(
    (config) => {
      const token = store.getState().token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If token expired, try to refresh
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          await store.getState().refreshToken();
          return axios(originalRequest);
        } catch {
          store.getState().logout();
          window.location.href = "/login";
        }
      }

      return Promise.reject(error);
    }
  );
};
