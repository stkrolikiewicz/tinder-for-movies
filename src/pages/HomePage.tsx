import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
});

const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/recommendations", {
      viewTransition: true,
      state: { fromHomePage: true },
    });
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Tinder for Movies
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleRedirect}
      >
        Go to Recommendations
      </Button>
    </Container>
  );
};

export default HomePage;
