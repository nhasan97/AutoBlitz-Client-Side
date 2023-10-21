import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrandBasedProducts from "../pages/BrandBasedProducts";
import UpdateProduct from "../pages/UpdateProduct";
import ProductDetails from "../pages/ProductDetails";
import AddProductDetails from "../pages/AddProductDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProductDetails from "../pages/UpdateProductDetails";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
        errorElement: <Error></Error>,
      },
      {
        path: "/add-product-details/:name",
        element: <AddProductDetails></AddProductDetails>,
        errorElement: <Error></Error>,
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        errorElement: <Error></Error>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/branded-car/:name",
        element: <BrandBasedProducts></BrandBasedProducts>,
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.name}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-cars/${params.id}`),
      },
      {
        path: "/update-product-details/:name",
        element: <UpdateProductDetails></UpdateProductDetails>,
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/car-specs/${params.name}`),
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-cars/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <Error></Error>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        errorElement: <Error></Error>,
      },
    ],
  },
]);

export default router;
