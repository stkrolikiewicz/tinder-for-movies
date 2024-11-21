import theme from "@/theme";
import { FC, ReactNode } from "react";
import { Container } from "@mui/material";

interface MyContainerProps {
  children: ReactNode;
}

export const MyContainer: FC<MyContainerProps> = ({ children }) => {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
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
      {children}
    </Container>
  );
};
