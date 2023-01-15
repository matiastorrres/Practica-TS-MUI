import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { NotificationProvider } from "./context/NotificationContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <NotificationProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </NotificationProvider>
  );
}

export default App;
