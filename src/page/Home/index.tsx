import { Container, Button } from "@mui/material";
import { useContext, MouseEvent } from "react";
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

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === "error") context?.getError("error");
    if (e.currentTarget.name === "alert") context?.getSucces("alert");
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Button variant="contained" onClick={handleClick} name="error">
        error
      </Button>
      <Button variant="contained" onClick={handleClick} name="alert">
        alert
      </Button>
    </Container>
  );
}
