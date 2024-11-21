import { type FC } from "react";
import { Typography, Container } from "@mui/material";
import { useRecommentations } from "@/context/RecommendationsContext";
// import { recommendations } from "@/mock/recommendations";
import { MovieCard } from "@/components/recommendations";
import theme from "@/theme";
import { AnimatePresence } from "motion/react";

const RecommendationsPage: FC = () => {
  const {
    currentRecommendation,
    // acceptRecommendation,
    // rejectRecommendation,
    moveToNextRecommendation,
    isLoading,
    error,
  } = useRecommentations();

  if (isLoading) {
    return <Typography variant="h3">Loading...</Typography>; // TODO: add skeleton loader or spinner
  }

  if (error) {
    return <Typography variant="h3">{error.message}</Typography>; // TODO: add error component
  }

  if (!currentRecommendation) {
    return <Typography variant="h3">No more recommendationns</Typography>; // TODO: add empty state
  }

  const onAccept = () => {
    // void acceptRecommendation(currentRecommendation.id);
    moveToNextRecommendation();
  };

  const onReject = () => {
    // void rejectRecommendation(currentRecommendation.id);
    moveToNextRecommendation();
  };
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: 2,
        position: "relative",
        [theme.breakpoints.up("sm")]: {
          maxHeight: "calc(100vh - 64px - 48px)",
        },
        [theme.breakpoints.down("sm")]: {
          maxHeight: "calc(100vh - 56px - 48px)",
        },
      }}
    >
      <AnimatePresence mode="wait">
        <MovieCard
          key={currentRecommendation.id}
          item={currentRecommendation}
          onAccept={onAccept}
          onReject={onReject}
        />
      </AnimatePresence>
    </Container>
  );
};

export default RecommendationsPage;
