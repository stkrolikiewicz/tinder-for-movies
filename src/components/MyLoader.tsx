import { FC } from "react";
import { MyContainer } from "@/components";
import { CircularProgress } from "@mui/material";

interface MyLoaderProps {
  size: number;
}

export const MyLoader: FC<MyLoaderProps> = ({ size }) => {
  return (
    <MyContainer>
      <CircularProgress size={size} />
    </MyContainer>
  );
};
