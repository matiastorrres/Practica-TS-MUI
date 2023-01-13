import {
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { NotificationContex } from "../../context/NotificationContext";
import { loginValidate } from "../../utilities/vaidateForm";
// Paper nos permite darle un color con un contraste que nos permite identificar la caja,
//por ej si tenemos un fondo de color oscuro, el background del paper va a tener un color similar, pero va a resaltar.

type LoginType = {
  username: string;
  password: string;
};

export default function Login() {
  const context = useContext(NotificationContex);
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });
  const dataLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
    loginValidate
      .validate(loginData)
      .then(() => {
        context?.getSucces(JSON.stringify(loginData));
      })
      .catch((error) => {
        context?.getError(JSON.stringify(error.message));
      });

    setLoginData({
      username: "",
      password: "",
    });
  };
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ p: "1.2rem", borderRadius: "0.5rem" }}>
            <Typography variant="h5">Iniciar sesion</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="email"
                sx={{ mt: 2, mb: 1.5 }}
                // required
                name="username"
                onChange={dataLogin}
                value={loginData.username}
              />
              <TextField
                fullWidth
                label="password"
                sx={{ mt: 2, mb: 1.5 }}
                // required
                type="password"
                name="password"
                onChange={dataLogin}
                value={loginData.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1.5 }}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
