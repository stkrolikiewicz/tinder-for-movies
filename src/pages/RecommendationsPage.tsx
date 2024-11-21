import { type FC } from "react";
import { useRecommentations } from "@/context/RecommendationsContext";
// import { recommendations } from "@/mock/recommendations";
import { MovieCard, EmptyState } from "@/components/recommendations";
import { AnimatePresence } from "motion/react";
import { MyContainer, MyLoader, MyError } from "@/components";

const RecommendationsPage: FC = () => {
  const {
    currentRecommendation,
    acceptRecommendation,
    rejectRecommendation,
    fetchRecommendations,
    moveToNextRecommendation,
    isLoading,
    error,
  } = useRecommentations();

  if (isLoading) {
    return <MyLoader size={100} />;
  }

  if (error) {
    return (
      <MyError
        message={error.message}
        onRetry={() => void fetchRecommendations}
      />
    );
  }

  if (!currentRecommendation) {
    return <EmptyState />;
  }

  const onAccept = () => {
    void acceptRecommendation(currentRecommendation.id);
    moveToNextRecommendation();
  };

  const onReject = () => {
    void rejectRecommendation(currentRecommendation.id);
    moveToNextRecommendation();
  };
  return (
    <MyContainer>
      <AnimatePresence mode="wait">
        <MovieCard
          key={currentRecommendation.id}
          item={currentRecommendation}
          onAccept={onAccept}
          onReject={onReject}
        />
      </AnimatePresence>
    </MyContainer>
  );
};

export default RecommendationsPage;
