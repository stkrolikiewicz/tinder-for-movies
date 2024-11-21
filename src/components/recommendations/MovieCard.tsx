import { Recommendation } from "@/types/recommendations";
import { useState, type FC } from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  styled,
  Button,
  Container,
} from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { motion } from "motion/react";

interface MovieCardProps {
  item: Recommendation;
  onAccept: () => void;
  onReject: () => void;
}

const StyledMotion = styled(motion.div)(({ theme }) => ({
  boxShadow: "0 0 15px 0px rgba(0, 0, 0, 0.2)",
  width: "100%",
  height: "100%",
  maxWidth: theme.breakpoints.values.sm,
  background: theme.palette.background.subtle,
  borderRadius: 10,
  position: "relative",
  overflow: "hidden",
}));

const StyledCard = styled(motion.div)({
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  boxShadow: "none",
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  gap: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  background: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
}));

export const MovieCard: FC<MovieCardProps> = ({ item, onAccept, onReject }) => {
  const [imageError, setImageError] = useState(false);
  const [rightExit, setRightExit] = useState(true);
  const [showThumb, setShowThumb] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const exit = rightExit
    ? { opacity: 0, scale: 0.8, rotate: 30, x: "100vw" }
    : { opacity: 0, scale: 0.8, rotate: -30, x: "-100vw" };

  const handleAccept = () => {
    setRightExit(false);
    setShowThumb(true);
    onAccept();
  };

  const handleReject = () => {
    setRightExit(true);
    setShowThumb(true);
    onReject();
  };

  return (
    <>
      {showThumb && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translate(-50%, -50%)",
          }}
        >
          {rightExit ? (
            <ThumbDown
              sx={{ fontSize: 100, color: "error.main", opacity: 0.8 }}
            />
          ) : (
            <ThumbUp
              sx={{ fontSize: 100, color: "success.main", opacity: 0.8 }}
            />
          )}
        </motion.div>
      )}
      <StyledMotion
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={exit}
        transition={{ duration: 0.5 }}
      >
        <StyledCard>
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
      </StyledMotion>
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
    </>
  );
};
