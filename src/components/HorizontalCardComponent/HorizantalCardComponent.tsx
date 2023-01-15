import {
  Card,
  CardMedia,
  Grid,
  CardContent,
  Typography,
  Divider,
  CardActions,
  IconButton,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAppDispatch } from "../../redux/hooks";
import { removeToCart } from "../../redux/slices/Cart.slice";

type typeHorizontalCardComponent = {
  image: string;
  name: string;
  info: string;
  id: string | number;
};
export function HorizantalCardComponent({
  image,
  name,
  info,
  id,
}: typeHorizontalCardComponent) {
  const dispatch = useAppDispatch();

  const handleRemoveToCart = () => {
    console.log("hola");
    dispatch(removeToCart({ id }));
  };
  return (
    <Card sx={{ display: "flex", my: 5, flexDirection: "column" }}>
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image={image}
        alt="Rick and Morty"
      />
      <Grid container sx={{ mx: 1 }}>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h5">{name}</Typography>
            <Divider />
            <Typography variant="h6">{info}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions onClick={handleRemoveToCart}>
            <IconButton>
              <CloseRoundedIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
