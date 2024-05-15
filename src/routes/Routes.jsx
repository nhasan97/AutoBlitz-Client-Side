import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrandBasedProducts from "../pages/BrandBasedProducts";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import AllRoute from "./AllRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminRoute from "./AdminRoute";
import AddProduct from "../pages/AdminDashboardPages/AddProduct";
import AddProductDetails from "../pages/AdminDashboardPages/AddProductDetails";
import ViewCustomers from "../pages/AdminDashboardPages/ViewCustomers";
import UpdateProduct from "../pages/AdminDashboardPages/UpdateProduct";
import UpdateProductDetails from "../pages/AdminDashboardPages/UpdateProductDetails";
import ViewProducts from "../pages/AdminDashboardPages/ViewProducts/ViewProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
      },
      // {
      //   path: "/update/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdateProduct></UpdateProduct>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/update-product-details/:id",
      //   element: <UpdateProductDetails></UpdateProductDetails>,
      // },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <AllRoute>
          <DashboardLayout></DashboardLayout>
        </AllRoute>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ViewProducts></ViewProducts>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddProduct></AddProduct>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "add-product-details/:name",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddProductDetails></AddProductDetails>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UpdateProduct></UpdateProduct>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-product-details/:id",
        element: <UpdateProductDetails></UpdateProductDetails>,
      },
      {
        path: "customers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ViewCustomers></ViewCustomers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
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
]);

export default router;
