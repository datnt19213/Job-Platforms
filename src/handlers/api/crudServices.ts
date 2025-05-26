// services/crudService.ts

import {apiHandler} from "./apiHandlers";

/**
 * Generic CRUD service class for handling RESTful API operations
 * @template T - The type of data this service handles
 *
 * @example
 * ```typescript
 * interface User {
 *   id: string;
 *   name: string;
 *   email: string;
 * }
 *
 * const userService = new CrudService<User>('/users');
 *
 * // Get all users
 * const users = await userService.getAll();
 *
 * // Create a new user
 * const newUser = await userService.create({
 *   name: 'John Doe',
 *   email: 'john@example.com'
 * });
 *
 * // Update a user
 * await userService.update('user123', { name: 'Jane Doe' });
 *
 * // Delete a user
 * await userService.delete('user123');
 *
 * // Search users
 * const searchResults = await userService.search('john', { role: 'admin' });
 *
 * // Paginate users
 * const paginatedUsers = await userService.paginate(1, 10);
 * ```
 */
export class CrudService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(): Promise<T[]> {
    const response = await apiHandler.get<T[]>(this.endpoint);
    return response.data;
  }

  async getById(id: string): Promise<T> {
    const response = await apiHandler.get<T>(`${this.endpoint}/${id}`);
    return response.data;
  }

  async create(data: Partial<T>): Promise<T> {
    const response = await apiHandler.post<T>(this.endpoint, data);
    return response.data;
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    const response = await apiHandler.put<T>(`${this.endpoint}/${id}`, data);
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await apiHandler.delete(`${this.endpoint}/${id}`);
  }

  // Advanced query methods
  async search(query: string, params?: Record<string, any>): Promise<T[]> {
    const response = await apiHandler.get<T[]>(`${this.endpoint}/search`, {
      params: {q: query, ...params},
    });
    return response.data;
  }

  async paginate(
    page: number,
    limit: number
  ): Promise<{
    data: T[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    const response = await apiHandler.get<any>(`${this.endpoint}/paginate`, {
      params: {page, limit},
    });
    return response.data;
  }
}

// // Usage example
// interface Product {
//   id: string;
//   name: string;
//   price: number;
// }

// const productService = new CrudService<Product>("/products");

// async function exampleUsage() {
//   // Get all products
//   const products = await productService.getAll();

//   // Create a new product
//   const newProduct = await productService.create({
//     name: "New Product",
//     price: 100,
//   });

//   // Update a product
//   const updatedProduct = await productService.update("123", {
//     price: 150,
//   });
// }
