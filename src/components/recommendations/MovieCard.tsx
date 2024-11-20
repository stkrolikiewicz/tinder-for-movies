import { Recommendation } from "@/types/recommendations";
import { useState, type FC } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

interface MovieCardProps {
  item: Recommendation;
}

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  background: theme.palette.background.subtle,
  maxWidth: theme.breakpoints.values.sm,
  borderRadius: 10,
  boxShadow: "0 0 15px 0px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  gap: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  background: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
}));

export const MovieCard: FC<MovieCardProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <StyledCard
      sx={{
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "rotate(-0.5deg) translateX(-15px) rotateZ(-1deg)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="400"
        image={imageError ? "/movie-placeholder.jpg" : item.imageURL}
        onError={handleImageError}
        alt={item.title}
        sx={{ objectFit: "cover", flex: 1 }}
      />
      <StyledCardContent>
        <Typography gutterBottom variant="h4">
          {item.title}
        </Typography>
        <Typography variant="p" color="text.secondary">
          {item.summary}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Rating: {item.rating} / 10
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};
