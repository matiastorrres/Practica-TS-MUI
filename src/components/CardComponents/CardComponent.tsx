import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
};
export function CardComponent({ image, name, status, species, id }: CardProps) {
  let navigate = useNavigate();
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: "1rem" }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: "1rem" }}>Especie: {species}</Typography>
        <Typography sx={{ mt: "1rem" }}>Estado:{status} </Typography>
      </CardContent>
      <Button
        variant="contained"
        size="small"
        fullWidth
        onClick={() => navigate(`character/${id}`)}
      >
        Learn More
      </Button>
    </Card>
  );
}
