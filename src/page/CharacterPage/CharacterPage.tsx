import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/character";
import { TypeCharacter } from "../../interfaces/character";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function CharacterPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<TypeCharacter | null>(null);
  useEffect(() => {
    characters
      .getById(id)
      .then((res) => {
        setCharacter(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (loading) return <>Cargando</>;
  return (
    <Box sx={{ width: "100vw" }}>
      <Container maxWidth="xl">
        <Grid container columnSpacing={1} sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Typography variant="h3"> {character?.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <img src={character?.image} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
