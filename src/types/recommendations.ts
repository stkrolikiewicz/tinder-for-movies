export interface Recommendation {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
}

export interface RecommendationsContextType {
  recommendations: Recommendation[];
  currentRecommendation: Recommendation | null;
  isLoading: boolean;
  error: Error | null;
  fetchRecommendations: () => Promise<void>;
  acceptRecommendation: (id: string) => Promise<void>;
  rejectRecommendation: (id: string) => Promise<void>;
  moveToNextRecommendation: () => void;
}
