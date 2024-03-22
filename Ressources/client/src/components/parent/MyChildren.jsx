import React from "react";
import { Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function MyChildren() {
  const studentsData = [
    {
      key: 1,
      name: "Max Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 2,
      name: "Erika Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Klasse",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Geburtstag",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Adresse",
      dataIndex: "address",
      key: "address",
    },
  ];
  const { classId: classIdFromURL } = useParams();
  const [classId, setClassId] = React.useState(classIdFromURL);
  const navigate = useNavigate();
  useEffect(() => {
    setClassId(classIdFromURL);
  }, [classIdFromURL]);
  return (
    <div style={{ padding: 24 }}>
      <h1>Meine Kinder</h1>
      <h2>Leistungen</h2>

      <Table
        dataSource={studentsData}
        columns={columns}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/students/${record.key}`);
            },
          };
        }}
      />
    </div>
  );
}
