import { Container, Button } from "@mui/material";
import { useContext, MouseEvent, useEffect } from "react";
import { character } from "../../api/character";
import { HeaderComponent } from "../../components";
import { NotificationContex } from "../../context/NotificationContext";

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

export default function Home() {
  const context = useContext(NotificationContex);

  useEffect(() => {
    try {
      character.getAll(2).then((res) => console.log(res.data.results));
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   console.log(e.currentTarget.name);
  //   if (e.currentTarget.name === "error") context?.getError("error");
  //   if (e.currentTarget.name === "alert") context?.getSucces("alert");
  // };

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
    </Container>
  );
}
