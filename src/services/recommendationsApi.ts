import axios, { AxiosInstance, AxiosError } from "axios";
import { Recommendation } from "@/types/recommendations";

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

export class RecommendationsApi {
  private api: AxiosInstance;

  constructor(
    baseURL: string = (import.meta.env.VITE_API_BASE_URL as string) ||
      "http://localhost:3000"
  ) {
    this.api = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.api.interceptors.request.use(
      (config) => config,
      (error: Error) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          throw new ApiError(
            error.response.status,
            (error.response.data as { message?: string })?.message ??
              error.message
          );
        }
        if (error.request) {
          throw new ApiError(500, "No response received from server");
        }
        throw new ApiError(500, error.message);
      }
    );
  }

  async fetch(): Promise<Recommendation[]> {
    try {
      const { data } = await this.api.get<Recommendation[]>("/recommendations");
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async accept(id: string): Promise<void> {
    try {
      await this.api.put(`/recommendations/${id}/accept`);
    } catch (error) {
      this.handleError(error);
    }
  }

  async reject(id: string): Promise<void> {
    try {
      await this.api.put(`/recommendations/${id}/reject`);
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown): never {
    if (error instanceof ApiError) {
      throw error;
    }
    if (axios.isAxiosError(error)) {
      throw new ApiError(
        error.response?.status ?? 500,
        (error.response?.data as { message?: string })?.message ?? error.message
      );
    }
    throw new ApiError(500, "An unexpected error occurred");
  }
}

export const recommendationsApi = new RecommendationsApi();
