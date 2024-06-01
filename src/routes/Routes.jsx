import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import AllRoute from "./AllRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminRoute from "./AdminRoute";
import AddProduct from "../pages/AdminDashboardPages/AddProduct/AddProduct";
import ViewProducts from "../pages/AdminDashboardPages/ViewProducts/ViewProducts";
import AddService from "../pages/AdminDashboardPages/AddService";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ServiceBooking from "../pages/ServiceBooking";
import MyCart from "../pages/MyCart";
import ProPayment from "../pages/Checkout/ProPayment";
import BrandBasedProducts from "../pages/BrandBasedProducts";
import ViewCustomers from "../pages/AdminDashboardPages/ViewCustomers/ViewCustomers";
import AllCars from "../pages/AllCars";
import UpdateProduct from "../pages/AdminDashboardPages/UpdateProduct/UpdateProduct";
import axiosPublic from "../api/axiosPublic";

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
        path: "/branded-car/:name",
        element: <BrandBasedProducts></BrandBasedProducts>,
      },
      {
        path: "/all-cars",
        element: <AllCars></AllCars>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },

      {
        path: "/service-details/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/service-booking/:id",
        element: (
          <PrivateRoute>
            <ServiceBooking></ServiceBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: <ProPayment></ProPayment>,
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
        path: "update/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UpdateProduct></UpdateProduct>
            </AdminRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) => axiosPublic.get(`/all-cars/${params.id}`),
      },

      {
        path: "add-service",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddService></AddService>
            </AdminRoute>
          </PrivateRoute>
        ),
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
