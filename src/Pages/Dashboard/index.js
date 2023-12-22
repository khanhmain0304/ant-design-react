import { Card, Space, Statistic, Table, Typography } from "antd";
import { ShoppingCartOutlined, DollarCircleOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getRecentProducts } from "../../Api";

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space>
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={123}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0, 255, 255, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Products"}
          value={120}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={12345}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0, 0, 255, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={10000}
        />
      </Space>
      <Space>
        <RecentProducts />
      </Space>
    </Space>
  );
}

function DashboardCard({ icon, style, title, value }) {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentProducts() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRecentProducts().then((res) => {
      setDataSource(res.data.products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Products</Typography.Text>
      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
          },
          {
            title: "Description",
            dataIndex: "description",
          },
          {
            title: "Price",
            dataIndex: "price",
          },
          {
            title: "Quantity",
            dataIndex: "inventory_quantity",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{ pageSize: 4 }}
      ></Table>
    </>
  );
}

export default Dashboard;
