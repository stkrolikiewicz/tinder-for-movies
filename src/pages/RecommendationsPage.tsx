import type { FC } from "react";
import { Typography } from "@mui/material";
import { useRecommentations } from "@/context/RecommendationsContext";

const RecommendationsPage: FC = () => {
  const { recommendations, isLoading, error } = useRecommentations();

  if (isLoading) {
    return <Typography variant="h3">Loading...</Typography>; // TODO: add skeleton loader or spinner
  }

  if (error) {
    return <Typography variant="h3">{error.message}</Typography>; // TODO: add error component
  }

  if (!recommendations.length) {
    return <Typography variant="h3">No recommendations found</Typography>; // TODO: add empty state
  }

  return (
    <div>
      {/* TODO: Add container component */}
      <Typography variant="h3">Recommendations</Typography>
      {/* TODO: movies carousel carousel */}
      <div>
        {recommendations.map((recommendation) => (
          /* TODO: Add movie card component */
          <div key={recommendation.id}>
            <Typography variant="h2">{recommendation.title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPage;
