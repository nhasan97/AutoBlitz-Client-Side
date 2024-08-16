import SIdebarMenuItem from "./SIdebarMenuItem";
import "./Sidebar.css";
import { FaCar } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const AdminMenu = () => {
  return (
    <div className="sb flex flex-col justify-center items-start mx-auto">
      <SIdebarMenuItem
        icon={<i className="fa-solid fa-money-bill"></i>}
        menuText="Orders"
        route="/dashboard/orders"
      ></SIdebarMenuItem>

      <SIdebarMenuItem
        icon={<i className="fa-solid fa-money-bill"></i>}
        menuText="Service Bookings"
        route="/dashboard/view-bookings"
      ></SIdebarMenuItem>

      <SIdebarMenuItem
        icon={<FaCar />}
        menuText="Cars"
        route="/dashboard/all-products"
      ></SIdebarMenuItem>

      <SIdebarMenuItem
        icon={<i className="fa-solid fa-plus"></i>}
        menuText="Add car"
        route="/dashboard/add-product"
      ></SIdebarMenuItem>

      <SIdebarMenuItem
        icon={<MdOutlineMiscellaneousServices className="text-2xl" />}
        menuText="Services"
        route="/dashboard/all-services"
      ></SIdebarMenuItem>

      <SIdebarMenuItem
        icon={<i className="fa-solid fa-plus"></i>}
        menuText="Add service"
        route="/dashboard/add-service"
      ></SIdebarMenuItem>

      <SIdebarMenuItem
        icon={<i className="fa-solid fa-users"></i>}
        menuText="Customers"
        route="/dashboard/customers"
      ></SIdebarMenuItem>

      <SIdebarMenuItem
        icon={<i className="fa-solid fa-arrow-left"></i>}
        menuText="Back to Site"
        route="/"
      ></SIdebarMenuItem>
    </div>
  );
};

export default AdminMenu;
