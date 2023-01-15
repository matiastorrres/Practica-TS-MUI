import { Container, Button, Box, Grid, Pagination } from "@mui/material";
import { useContext, MouseEvent, useEffect, useState } from "react";
import { characters } from "../../api/character";
import { HeaderComponent } from "../../components";
import { CardComponent } from "../../components/CardComponents/CardComponent";
import { NotificationContex } from "../../context/NotificationContext";
import { TypeCharacter } from "./interface/character.interface";

// import { useNotification } from "../../context/NotificationContext";

// export default function Home() {
//   const { getError, getAlert } = useNotification();

//   const handleClick1 = () => {
//     getError("soy el errror");
//   };
//   const handleClick2 = () => {
//     getAlert("soy el alert");
//   };

//   return (
//     <Container maxWidth="xl" sx={{ mt: 5 }}>
//       <Button variant="contained" onClick={handleClick1}>
//         error
//       </Button>
//       <Button variant="contained" onClick={handleClick2}>
//         alert
//       </Button>
//     </Container>
//   );
// }

export function Home() {
  const context = useContext(NotificationContex);
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [count, setcount] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    try {
      characters
        .getAll(page)
        .then((res) => {
          setAllCharacters(res.data.results);
          setcount(res.data.info.pages);
        })
        .then(() => setLoading(false));
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  }, [page]);

  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   console.log(e.currentTarget.name);
  //   if (e.currentTarget.name === "error") context?.getError("error");
  //   if (e.currentTarget.name === "alert") context?.getSucces("alert");
  // };

  if (loading) return <>Cargando</>;
  return (
    <Container maxWidth="xl">
      {/* <Button variant="contained" onClick={handleClick} name="error">
        error
      </Button>
      <Button variant="contained" onClick={handleClick} name="alert">
        alert
      </Button> */}
      <HeaderComponent
        title="Hola Mundo"
        description="Hola mundo bienvenidos a mis practicas"
        element={
          <Button variant="contained" fullWidth>
            Soy un elemento que se paso por props
          </Button>
        }
      />
      <>
        {allCharacters?.length !== 0 ? (
          <Box>
            <Grid container spacing={2}>
              {allCharacters?.map((el) => (
                <Grid item key={el.id} xs={3}>
                  <CardComponent
                    id={el.id}
                    image={el.image}
                    species={el.species}
                    name={el.name}
                    status={el.status}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Box>No hay datos</Box>
        )}
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            mb: "2rem",
          }}
        >
          <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            variant="outlined"
            color="primary"
          />
        </Box>
      </>
    </Container>
  );
}
