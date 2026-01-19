import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';

// =============================================================================
// API Service - Base HTTP Wrapper with Mock Capability
// =============================================================================
// Teaching Point: A centralized API service provides:
// 1. Single place to configure HTTP settings (headers, base URL)
// 2. Easy toggle between mock and real data for development
// 3. Consistent error handling across all API calls

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  /**
   * Toggle this to switch between mock data and real API calls.
   * In a real app, this could be driven by environment configuration.
   */
  private readonly useMockData = true;

  /**
   * Simulated network delay in milliseconds.
   * Helps test loading states during development.
   */
  private readonly mockDelay = 500;

  /**
   * Base URL for API calls (used when useMockData is false)
   */
  private readonly baseUrl = '/api';

  /**
   * GET request with mock data fallback
   *
   * @param endpoint - API endpoint (e.g., '/projects')
   * @param mockData - Data to return when in mock mode
   * @returns Observable of the response data
   *
   * @example
   * // Using mock data
   * this.apiService.get<Project[]>('/projects', mockProjects)
   */
  get<T>(endpoint: string, mockData: T): Observable<T> {
    if (this.useMockData) {
      // Return mock data with simulated delay
      return of(mockData).pipe(delay(this.mockDelay));
    }
    return this.http.get<T>(`${this.baseUrl}${endpoint}`);
  }

  /**
   * POST request with mock data fallback
   *
   * @param endpoint - API endpoint
   * @param body - Request body
   * @param mockResponse - Response to return when in mock mode
   * @returns Observable of the response data
   *
   * @example
   * // Submitting a form
   * this.apiService.post('/contact', formData, { success: true })
   */
  post<T, R>(endpoint: string, body: T, mockResponse: R): Observable<R> {
    if (this.useMockData) {
      // Log the request for debugging during development
      console.log(`[Mock API] POST ${endpoint}`, body);
      return of(mockResponse).pipe(delay(this.mockDelay));
    }
    return this.http.post<R>(`${this.baseUrl}${endpoint}`, body);
  }
}
