import { Avatar, Button, Form, Input, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { getInventory } from "../../Api";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
    });
    setLoading(false);
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "thumbnail",
      render: (link) => {
        return <Avatar src={link} />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (value) => <span>${value}</span>,
    },
    {
      title: "Discount",
      dataIndex: "discountPercentage",
    },
    {
      title: "Rate",
      dataIndex: "rating",
      render: (rating) => {
        return <Rate value={rating} allowHalf />;
      },
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
  ];

  return <Table loading={loading} columns={columns} dataSource={dataSource} pagination={{ pageSize: 8 }}></Table>;
};

const FormProduct = () => {
  return (
    <Form>
      <Form.Item name={"teacher"} label={"Teacher Name"}>
        <Input placeholder="Teacher name" />
      </Form.Item>
      <Form.Item name={"class"} label={"Class Name"}>
        <Input placeholder="Class name" />
      </Form.Item>
      <Form.List name={"student"}>
        {(fields, { add, remove }) => {
          <>
            {fields.map((field, index) => {
              return (
                <Form.Item name={[field.name, "first"]} label={`${index + 1}-Student`}>
                  <Input placeholder="First Name" />
                </Form.Item>
              );
            })}
            <Form.Item>
              <Button icon={<PlusOutlined />} type="dashed" block onClick={() => {}}>
                Add a Student
              </Button>
            </Form.Item>
          </>;
        }}
      </Form.List>
    </Form>
  );
};

function Product() {
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Product</Typography.Title>
      <FormProduct />
      <ProductList />
    </Space>
  );
}

export default Product;
