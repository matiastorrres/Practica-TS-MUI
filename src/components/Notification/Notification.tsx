import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handleClose?: () => void;
};
export function Notification({
  open,
  msg,
  severity,
  handleClose,
}: NotificationProps) {
  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      open={open}
      onClose={handleClose}
    >
      <Alert severity={severity} onClose={handleClose}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
}
/*nota: tanto el alert como el snackbar tiene que tener el onclose, porque sino no 
funciona el el autoHideDuration
*/
