import "antd/dist/antd";
import "./App.css";
import { Button, Input, Typography, Select, Form, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { PoweroffOutlined, SearchOutlined } from "@ant-design/icons";

function App() {
  // const [dataSource, setDataSource] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDataSource(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  const data = [
    {
      key: "1",
      id: 1,
      name: "Student 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student 2",
      grade: "B+",
    },
    {
      key: "3",
      id: 3,
      name: "Student 3",
      grade: "A+",
    },
    {
      key: "4",
      id: 4,
      name: "Student 4",
      grade: "B+",
    },
    {
      key: "5",
      id: 5,
      name: "Student 5",
      grade: "A",
    },
    {
      key: "6",
      id: 6,
      name: "Student 6",
      grade: "B",
    },
    {
      key: "7",
      id: 7,
      name: "Student 7",
      grade: "C",
    },
    {
      key: "8",
      id: 8,
      name: "Student 8",
      grade: "C",
    },
    {
      key: "9",
      id: 9,
      name: "Student 9",
      grade: "A+",
    },
    {
      key: "10",
      id: 10,
      name: "Student 10",
      grade: "A",
    },
  ];

  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "green"
          : tag.includes("B")
          ? "blue"
          : "red";

        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table
          dataSource={data}
          columns={columns}
          rowSelection={true}
          pagination={{ pageSize: 5 }}
        ></Table>
      </header>
    </div>
  );
}

export default App;
