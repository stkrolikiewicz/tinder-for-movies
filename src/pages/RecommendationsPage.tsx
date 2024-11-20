import type { FC } from "react";
import { Typography } from "@mui/material";

/*
TODO:
- fetch recommendations from the server (GET /recommendations)
- create context for recommendations to decouple the data fetching from the components
- create movie card component
- display recommendations as swipeable cards carousel (like Tinder)
- add accept/reject buttons (PUT /recommendations/:id/accept, PUT /recommendations/:id/reject)
- add swipe left/right functionality (PUT /recommendations/:id/reject)
- add loading sceleton
- add error handling
- add empty state
- write tests for data fetching
*/

const RecommendationsPage: FC = () => {
  return <Typography variant="h1">Recommendations Page</Typography>;
};

export default RecommendationsPage;
