import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <Sidebar width="280" backgroundColor="#2e343f">
      <Menu>
        <MenuItem component={<NavLink to={"/dashboard"} />}>Overview</MenuItem>
        <SubMenu label="Apartment">
          <MenuItem component={<NavLink to={"/dashboard/apartment-list"} />}>
            Apartments List
          </MenuItem>
          <MenuItem component={<NavLink to={"/dashboard/add-apartment"} />}>
            Add Apartment
          </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <SubMenu label="Flat">
          <MenuItem component={<NavLink to={"/dashboard/flat-list"} />}>
            Flat List
          </MenuItem>
          <MenuItem component={<NavLink to={"/dashboard/add-flat"} />}>
            Add Flat
          </MenuItem>
        </SubMenu>
        <SubMenu label="Coupons">
          <MenuItem component={<NavLink to={"/dashboard/coupons"} />}>
            Coupons
          </MenuItem>
          <MenuItem component={<NavLink to={"/dashboard/add-coupon"} />}>
            Add Coupon
          </MenuItem>
        </SubMenu>
        <SubMenu label="Users">
          <MenuItem component={<NavLink to={"/dashboard/users"} />}>
            Users
          </MenuItem>
          <MenuItem component={<NavLink to={"/dashboard/add-coupon"} />}>
            User pending request
          </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AdminMenu;
