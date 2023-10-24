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
        loader: () =>
          fetch(
            "https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/brands"
          ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/brands"
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
        loader: () =>
          fetch(
            "https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/cart"
          ),
      },
      {
        path: "/branded-car/:name",
        element: <BrandBasedProducts></BrandBasedProducts>,
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(
            `https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/cars/${params.name}`
          ),
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
          fetch(
            `https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/all-cars/${params.id}`
          ),
      },
      {
        path: "/update-product-details/:name",
        element: <UpdateProductDetails></UpdateProductDetails>,
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(
            `https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/car-specs/${params.name}`
          ),
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
          fetch(
            `https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/all-cars/${params.id}`
          ),
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
