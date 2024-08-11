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
import BrandBasedProducts from "../pages/BrandBasedProducts";
import ViewCustomers from "../pages/AdminDashboardPages/ViewCustomers/ViewCustomers";
import AllCars from "../pages/AllCars";
import UpdateProduct from "../pages/AdminDashboardPages/UpdateProduct/UpdateProduct";
import axiosPublic from "../api/axiosPublic";
import ViewServices from "../pages/AdminDashboardPages/ViewServices/ViewServices";
import UpdateService from "../pages/AdminDashboardPages/UpdateService";
import AllServices from "../pages/AllServices";
import MyCart from "../pages/CustomerPages/MyCart";
import Payment from "../pages/CustomerPages/Checkout/Payment";
import ViewOrders from "../pages/AdminDashboardPages/ViewOrders/ViewOrders";
import MyOrders from "../pages/CustomerPages/MyOrders/MyOrders";

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
        path: "/all-servicing",
        element: <AllServices></AllServices>,
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
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
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
        element: <Payment></Payment>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <DashboardLayout></DashboardLayout>
        </AdminRoute>
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
        path: "all-services",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ViewServices></ViewServices>
            </AdminRoute>
          </PrivateRoute>
        ),
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
        path: "update-service/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UpdateService></UpdateService>
            </AdminRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) => axiosPublic.get(`/services/${params.id}`),
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
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ViewOrders></ViewOrders>
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
