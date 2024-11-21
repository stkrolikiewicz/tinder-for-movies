import { FC } from "react";
import { MyContainer } from "@/components";
import { Button, Typography } from "@mui/material";

interface MyErrorProps {
  message: string;
  onRetry: () => void;
  retryText?: string;
}

export const MyError: FC<MyErrorProps> = ({
  message,
  onRetry,
  retryText = "Retry",
}) => {
  return (
    <MyContainer>
      <Typography variant="h3">{message}</Typography>
      <Button variant="outlined" color="warning" size="large" onClick={onRetry}>
        {retryText}
      </Button>
    </MyContainer>
  );
};
