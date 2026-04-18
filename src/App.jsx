import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/Not Found/NotFound";
import ProductDetailsCard from "./components/Cards/ProductsDetailsCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop",
          element: <Shop />,
          children: [
            {
              index: true,
              element: <h1 style={{ color: "teal" }}>Laptop category Products</h1>,
            },
            { path: "laptop", element: <h1 style={{ color: "teal" }}>Laptop category Products</h1> },
            { path: "phone", element: <h1 style={{ color: "teal" }}>Phone category Products</h1> },
            { path: "screen", element: <h1 style={{ color: "teal" }}>Screen category Products</h1> },
            { path: "tv", element: <h1 style={{ color: "teal" }}>TV category Products</h1> },
          ],
        }, 
        { path: "login", element: <Login /> },
        { path: "cart", element: <Cart /> },
        { path: "productDetails/:id", element: <ProductDetailsCard /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
