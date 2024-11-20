/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import {
  Recommendation,
  RecommendationsContextType,
} from "@/types/recommendations";

import { recommendationsApi } from "@/services/recommendationsApi";

const RecommendationsContext = createContext<RecommendationsContextType | null>(
  null
);

// eslint-disable-next-line react-refresh/only-export-components
export const useRecommentations = () => {
  const context = useContext(RecommendationsContext);
  if (!context) {
    throw new Error(
      "useRecommentations must be used within a RecommendationsProvider"
    );
  }
  return context;
};

interface RecommendationsProviderProps {
  children: ReactNode;
}

export const RecommendationsProvider = ({
  children,
}: RecommendationsProviderProps) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const currentRecommendation = useMemo(
    () => recommendations[currentIndex] ?? null,
    [recommendations, currentIndex]
  );

  const fetchRecommendations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await recommendationsApi.fetch();
      setRecommendations(data);
      setCurrentIndex(0);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error("An unknown error occurred")
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const moveToNextRecommendation = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= recommendations.length - 1) {
        fetchRecommendations();
        return 0;
      }
      return prevIndex + 1;
    });
  }, [recommendations.length, fetchRecommendations]);

  const acceptRecommendation = useCallback(
    async (id: string) => {
      try {
        await recommendationsApi.accept(id);
        moveToNextRecommendation();
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("An unknown error occurred")
        );
      }
    },
    [moveToNextRecommendation]
  );

  const rejectRecommendation = useCallback(
    async (id: string) => {
      try {
        await recommendationsApi.reject(id);
        moveToNextRecommendation();
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("An unknown error occurred")
        );
      }
    },
    [moveToNextRecommendation]
  );

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  const value = useMemo(
    () => ({
      recommendations,
      currentRecommendation,
      isLoading,
      error,
      fetchRecommendations,
      acceptRecommendation,
      rejectRecommendation,
      moveToNextRecommendation,
    }),
    [
      recommendations,
      currentRecommendation,
      isLoading,
      error,
      fetchRecommendations,
      acceptRecommendation,
      rejectRecommendation,
      moveToNextRecommendation,
    ]
  );

  return (
    <RecommendationsContext.Provider value={value}>
      {children}
    </RecommendationsContext.Provider>
  );
};
