import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./Store/store";
import routes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <RouterProvider router={routes} />
      <Toaster position="top-right" reverseOrder={false} />
    </LocalizationProvider>
  </Provider>
);
