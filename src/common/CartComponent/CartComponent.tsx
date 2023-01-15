import {
  Drawer,
  Box,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { HorizantalCardComponent } from "../../components/HorizontalCardComponent/HorizantalCardComponent";
import { useAppSelector } from "../../redux/hooks";

interface CartComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

export default function CartComponent({
  open,
  handleStateViewDrawer,
}: CartComponentProps) {
  const CharacterCart = useAppSelector((state) => state.cartReducer);
  return (
    <Drawer anchor={"right"} open={open}>
      <Box sx={{ width: "25rem", p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Cart</Typography>
          <IconButton color="primary" onClick={handleStateViewDrawer}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1 }} />
        {CharacterCart &&
          CharacterCart.map((el) => (
            <HorizantalCardComponent
              image={el.image}
              name={el.name}
              info={el.info}
              key={el.id}
              id={el.id}
            />
          ))}
      </Box>
    </Drawer>
  );
}
