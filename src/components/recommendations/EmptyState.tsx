import type { FC } from "react";
import { MyContainer } from "@/components";
import { Typography } from "@mui/material";

export const EmptyState: FC = () => {
  return (
    <MyContainer>
      <Typography variant="h3">No recommendations found</Typography>
    </MyContainer>
  );
};
