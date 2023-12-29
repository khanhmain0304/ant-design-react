import { Button, Card, Form, Popconfirm, Space, Statistic, Table, Typography } from "antd";
import { ShoppingCartOutlined, DollarCircleOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { getCustomer, getInventory, getOrders, getRecentProducts, getRevenue, updateProduct } from "../../Api";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [customer, setCustomer] = useState(0);
  const [product, setProduct] = useState(0);
  const [order, setOrder] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrder(res.total);
      setRevenue(res.discountedTotal);
    });

    getInventory().then((res) => {
      setProduct(res.total);
    });

    getCustomer().then((res) => {
      setCustomer(res.total);
    });
  }, []);

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
          value={customer}
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
          value={product}
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
          value={order}
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
          value={revenue}
        />
      </Space>
      <Space>
        <RecentProducts />
        {/* <DashboardChart /> */}
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
  const [editRowId, setEditRowId] = useState("");
  const [form] = Form.useForm();
  const [keyForForceRender, setKeyForForceRender] = useState(0);

  useEffect(() => {
    setLoading(true);
    getRecentProducts().then((res) => {
      setDataSource(res.data.products);
      setLoading(false);
    });
  }, []);

  const modifiledData = dataSource?.map((item) => ({
    ...item,
    key: item._id,
  }));

  const handleDelete = (value) => {
    console.log(value._id);
  };

  const isEditting = (record) => {
    return record._id === editRowId;
  };

  const cancel = () => {};

  const save = (_id) => {
    const url = "https://server-manage-bill-52d0ee56a9b3.herokuapp.com/api/v1/product/" + _id;
  };

  const edit = (record) => {
    // console.log(123);
    // const url = "https://server-manage-bill-52d0ee56a9b3.herokuapp.com/api/v1/product/" + record._id;

    // const dataBody = {
    //   inventory_quantity: 30,
    // };

    // updateProduct(url, dataBody).then((data) => {
    //   console.log(data.data);
    //   const updateDataSource = dataSource.map((item) => {
    //     if (item.name === data?.data?.name) return data?.data;
    //     return item;
    //   });

    //   setDataSource(updateDataSource);
    //   setKeyForForceRender((prevKey) => prevKey + 1);
    // });
    // form.setFieldValue({
    //   name: "",
    //   description: "",
    //   price: "",
    //   inventory_quantity: "",
    //   ...record,
    // });

    setEditRowId(String(record._id));
  };

  return (
    <>
      <Typography.Text>Recent Products</Typography.Text>
      <Form form={form} component={false}>
        <Table
          key={keyForForceRender}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              editTable: true,
            },
            {
              title: "Description",
              dataIndex: "description",
              editTable: true,
            },
            {
              title: "Price",
              dataIndex: "price",
              editTable: true,
            },
            {
              title: "Quantity",
              dataIndex: "inventory_quantity",
              editTable: true,
            },
            {
              render: (record) => {
                const editTable = isEditting(record);
                console.log(editTable);
                return modifiledData.length >= 1 ? (
                  <Space>
                    <Popconfirm title="Are you sure want to delete?" onConfirm={() => handleDelete(record)}>
                      <Button danger type="primary">
                        Delete
                      </Button>
                    </Popconfirm>
                    {editTable ? (
                      <span>
                        <Space size={"middle"}>
                          <Button onClick={() => save(record._id)} type="primary" style={{ marginRight: 8 }}>
                            Save
                          </Button>
                          <Popconfirm title={"Are you sure to cancel?"} onConfirm={cancel}>
                            <Button>Cancle</Button>
                          </Popconfirm>
                        </Space>
                      </span>
                    ) : (
                      <Button type="primary" onClick={() => edit(record)}>
                        Edit
                      </Button>
                    )}
                  </Space>
                ) : null;
              },
            },
          ]}
          loading={loading}
          dataSource={modifiledData}
          pagination={{ pageSize: 4 }}
        ></Table>
      </Form>
    </>
  );
}

// function DashboardChart() {
//   const [revenueData, setRevenueData] = useState({
//     labels: [],
//     datasets: [],
//   });
//   useEffect(() => {
//     getRevenue().then((res) => {
//       const labels = res.carts.map((cart) => {
//         return `User-${cart.userId}`;
//       });

//       const total = res.carts.map((cart) => {
//         return cart.total;
//       });

//       const discount = res.carts.map((cart) => {
//         return cart.discountedTotal;
//       });

//       const dataSource = {
//         labels,
//         datasets: [
//           {
//             label: "Revenue",
//             data: total,
//             backgroundColor: "rgba(255, 0, 0, 1)",
//           },
//           {
//             label: "Discounted",
//             data: discount,
//             backgroundColor: "rgba(53, 162, 235, 0.5)",
//           },
//         ],
//       };

//       setRevenueData(dataSource);
//     });
//   }, []);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "bottom",
//       },
//       title: {
//         display: true,
//         text: "Orders Revenue",
//       },
//     },
//   };

//   return (
//     <Card style={{ width: 500, height: 350 }}>
//       <Bar options={options} data={revenueData} />
//     </Card>
//   );
// }

export default Dashboard;
