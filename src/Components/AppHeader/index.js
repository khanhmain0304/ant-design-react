import { Badge, Image, Space, Typography } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";

function AppHeader() {
  return (
    <div className="AppHeader">
      <Image width={45} src="https://img.freepik.com/premium-vector/abstract-colorful-bird_621127-276.jpg"></Image>
      <Typography.Title>Admin Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}
export default AppHeader;
