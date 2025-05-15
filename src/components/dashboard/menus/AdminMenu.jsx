import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <Sidebar width="280" backgroundColor="#2e343f">
      <Menu>
        <MenuItem> Overview </MenuItem>
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
          <MenuItem component={<NavLink to={"/dashboard/add-flats"} />}>
            Add Flat
          </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default AdminMenu;
