import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "product/:id", Component: ProductPage },
    ],
  },
]);
