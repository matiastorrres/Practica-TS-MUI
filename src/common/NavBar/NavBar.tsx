import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Grid,
  Button,
  Typography,
  Stack,
  Badge,
  Card,
} from "@mui/material";

// export function NavBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Container maxWidth="xl">
//             <Grid
//               container
//               direction="row"
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <Grid item>
//                 <Typography>Practica</Typography>
//               </Grid>
//               <Grid item>
//                 <Stack spacing={2} direction="row">
//                   <Button variant="outlined">Login</Button>
//                   <Button variant="contained">Register</Button>
//                 </Stack>
//               </Grid>
//             </Grid>
//           </Container>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartComponent from "../CartComponent/CartComponent";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

export const NavBar: React.FunctionComponent<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };
  const chatactersCart = useAppSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Practica</Typography>
              </Grid>

              <Grid item>
                <Stack spacing={3} direction="row">
                  <Button color="primary" onClick={handleStateViewDrawer}>
                    <Badge
                      color="secondary"
                      badgeContent={chatactersCart.length}
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </Button>
                  <Button variant="outlined" onClick={() => navigate("login")}>
                    Login
                  </Button>
                  <Button variant="contained">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  );
};
