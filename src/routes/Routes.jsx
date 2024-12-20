import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminRoute from "./AdminRoute";
import AddProduct from "../pages/AdminDashboardPages/AddProduct/AddProduct";
import ViewProducts from "../pages/AdminDashboardPages/ViewProducts/ViewProducts";
import AddService from "../pages/AdminDashboardPages/AddService";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import ServiceBooking from "../pages/CustomerPages/ServiceBooking";
import BrandBasedProducts from "../pages/BrandBasedProducts";
import ViewCustomers from "../pages/AdminDashboardPages/ViewCustomers/ViewCustomers";
import AllCars from "../pages/AllCars";
import UpdateProduct from "../pages/AdminDashboardPages/UpdateProduct/UpdateProduct";
import axiosPublic from "../api/axiosPublic";
import ViewServices from "../pages/AdminDashboardPages/ViewServices/ViewServices";
import UpdateService from "../pages/AdminDashboardPages/UpdateService";
import AllServices from "../pages/AllServices";
import MyCart from "../pages/CustomerPages/MyCart/MyCart";
import Payment from "../pages/CustomerPages/Checkout/Payment";
import ViewOrders from "../pages/AdminDashboardPages/ViewOrders/ViewOrders";
import MyOrders from "../pages/CustomerPages/MyOrders/MyOrders";
import MyServiceList from "../pages/CustomerPages/MyServiceList/MyServiceList";
import MyServiceBookings from "../pages/CustomerPages/MyServiceBookings/MyServiceBookings";
import ViewServiceBookings from "../pages/AdminDashboardPages/ViewServiceBookings/ViewServiceBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/branded-car/:name",
        element: <BrandBasedProducts />,
      },
      {
        path: "/all-cars",
        element: <AllCars />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/all-servicing",
        element: <AllServices />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout",
        element: <Payment />,
      },
      {
        path: "/my-service-list",
        element: (
          <PrivateRoute>
            <MyServiceList />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-booking",
        element: (
          <PrivateRoute>
            <ServiceBooking />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-service-bookings",
        element: (
          <PrivateRoute>
            <MyServiceBookings />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <DashboardLayout />
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
              <ViewProducts />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UpdateProduct />
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
              <ViewServices />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-service",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddService />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-service/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UpdateService />
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
              <ViewCustomers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ViewOrders />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "view-bookings",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ViewServiceBookings />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

export default router;
