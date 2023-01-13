import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
