import { Menu } from "antd";
import { AppstoreAddOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, TagOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
      onClick={(item) => {
        navigate(item.key);
      }}
        items={[
          {
            label: "Dashboard",
            icon:<AppstoreAddOutlined />,
            key: "/"
          },
          {
            label: "Customers",
            icon:<UserOutlined />,
            key: "/user"
          },
          { 
            label: "Products",
            icon:<ShopOutlined />,
            key: "/product"
          },
          {
            label: "Category",
            icon:<TagOutlined />,
            key: "/category"
          },
          {
            label: "Orders",
            icon:<ShoppingCartOutlined />,
            key: "/bill"
          },
        ]}
      ></Menu>
    </div>
  );
}
export default SideMenu;
