import type { FC } from "react";
import { Typography, Button, Container } from "@mui/material";
import { useRecommentations } from "@/context/RecommendationsContext";
// import { recommendations } from "@/mock/recommendations";
import { MovieCard } from "@/components/recommendations";
import theme from "@/theme";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

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

  const handleAccept = () => {
    // await acceptRecommendation(currentRecommendation.id);
    moveToNextRecommendation();
  };

  const handleReject = () => {
    // await rejectRecommendation(currentRecommendation.id);
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
        [theme.breakpoints.up("sm")]: {
          maxHeight: "calc(100vh - 64px - 48px)",
        },
        [theme.breakpoints.down("sm")]: {
          maxHeight: "calc(100vh - 56px - 48px)",
        },
      }}
    >
      <MovieCard key={currentRecommendation.id} item={currentRecommendation} />
      <Container
        maxWidth="sm"
        disableGutters
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={handleAccept}
          variant="outlined"
          color="success"
          startIcon={<ThumbUp />}
          size="large"
        >
          Accept
        </Button>
        <Button
          onClick={handleReject}
          variant="outlined"
          color="error"
          endIcon={<ThumbDown />}
          size="large"
        >
          Reject
        </Button>
      </Container>
    </Container>
  );
};

export default RecommendationsPage;
