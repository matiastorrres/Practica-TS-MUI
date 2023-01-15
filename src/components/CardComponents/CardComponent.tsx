import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
  Divider,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/Cart.slice";
import { useEffect, useState } from "react";
import { setItem } from "../../utilities/localStorage";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
};

export function CardComponent({ image, name, status, species, id }: CardProps) {
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);

  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.cartReducer);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, image, info: status }));
  };
  useEffect(() => {
    setDisabledBtn(characters.some((el) => el.id === id));
    setItem("cart", characters);
  }, [id, characters]);
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
      <Box display="flex" justifyContent="space-around" mb={5}>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`character/${id}`)}
        >
          Learn More
        </Button>
        <Button
          variant="contained"
          onClick={handleAddToCart}
          disabled={disabledBtn}
        >
          add Cart
        </Button>
      </Box>
    </Card>
  );
}
