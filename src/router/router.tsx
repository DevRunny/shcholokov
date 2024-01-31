import App from "../App";
import { DetailsPost } from "../components/DetailsPost/DetailsPost";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";

export enum Routes {
  MAIN = "/shcholokov/",
  DETAILS_POST = "/shcholokov/details-post/:alias",
}

export const router = createBrowserRouter([
  {
    path: Routes.MAIN,
    element: (
      <>
        <App />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: Routes.DETAILS_POST,
        element: <DetailsPost />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
