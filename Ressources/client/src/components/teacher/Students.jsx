import React from "react";
import { Table } from "antd";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Students() {
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
    {
      key: 3,
      name: "Max Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 4,
      name: "Erika Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 5,
      name: "Max Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 6,
      name: "Erika Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 7,
      name: "Max Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 8,
      name: "Erika Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 9,
      name: "Max Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 10,
      name: "Erika Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 11,
      name: "Max Mustermann",
      grade: "1. Klasse",
      birthday: "01.01.2010",
      address: "Musterstraße 1, 12345 Musterstadt",
    },
    {
      key: 12,
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
      <h1>Students</h1>

      <Table
        dataSource={studentsData}
        columns={columns}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/classes/${classIdFromURL}/${record.key}`);
            },
          };
        }}
      />
    </div>
  );
}
