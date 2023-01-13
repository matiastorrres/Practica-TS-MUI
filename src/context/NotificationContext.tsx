import { AlertColor } from "@mui/material";
import { createContext, useState, useContext } from "react";
import { Notification } from "../components";

/*tipeo las propiedades que recibe context*/
type ContexProps = {
  getError: (msg: string) => void;
  getSucces: (msg: string) => void;
};

//creo el Context
// Retorna un objeto: { Provider, Consumer }
//Por convención, solemos nombrar a este objeto como Nombre + Context, donde Nombre está relacionado con la intención del dato.
//El Provider se usa en el componente que tiene la pieza de estado que queremos compartir,
// mientras que el Consumer debemos utilizarlo en el componente que necesita el dato.
export const NotificationContex = createContext<ContexProps | null>(null);

interface PropsProvider {
  children: JSX.Element;
}
//creo el provider
//Utilizar el Provider para pasar el dato
//El componente Provider nos pide una propiedad llamada value que corresponde al dato que queremos distribuir.
export function NotificationProvider({ children }: PropsProvider) {
  /*definimos los estados*/
  const [msg, setMesg] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const HandleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string) => {
    setSeverity("error");
    setOpen(true);
    setMesg(msg);
  };

  const getSucces = (msg: string) => {
    setSeverity("success");
    setOpen(true);
    setMesg(msg);
  };

  const value = { getError, getSucces };
  return (
    <NotificationContex.Provider value={value}>
      <Notification
        handleClose={HandleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContex.Provider>
  );
}

// export const useNotification = () => {
//   const context = useContext(NotificationContex);
//   console.log("aca", context);
//   if (!context) throw new Error("No existe contexto");
//   return context;
// };
