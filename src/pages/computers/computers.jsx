import { Button, Image, Popconfirm, Space, Table } from "antd";
import React from "react";
import { useGetComputers } from "./service/useGetComputers";

export const User = () => {
  const { data } = useGetComputers();
  console.log(data);
  const dataSource = data?.map((item) => {
    return {
      id: item.id,
      key: item.id,
      name: item.title,
      img: item.img,
    };
  });

  const confirm = (id) => {

  };

  const columns = [
    {
      title: "Image",
      key: "img",
      render: (data) => {
        console.log(data);
        return <Image width={"100px"} height={"100px"} src={data.img} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <Space>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              okText="Yes"
              cancelText="No"
            >
              <Button onClick={() => confirm(data.id)} danger>
                delete
              </Button>
            </Popconfirm>{" "}
            <Button>edit</Button>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
