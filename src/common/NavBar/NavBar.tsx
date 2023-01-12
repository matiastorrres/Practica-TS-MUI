import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Grid,
  Button,
  Typography,
  Stack,
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

export const NavBar: React.FunctionComponent<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
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
                <Stack spacing={2} direction="row">
                  <Button variant="outlined">Login</Button>
                  <Button variant="contained">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
