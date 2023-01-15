import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./AppRouter";
import { NotificationProvider } from "./context/NotificationContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Suspense } from "react";

function App() {
  return (
    <NotificationProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<>OTRO LOADING.......</>}>
            <AppRouter />
          </Suspense>
        </BrowserRouter>
      </Provider>
    </NotificationProvider>
  );
}

export default App;
