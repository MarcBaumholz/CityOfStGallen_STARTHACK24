import React from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

// Demodaten für Grundschulklassen mit zusätzlichen Attributen
const classesData = [
  { key: 1, grade: "1. Klasse", numberOfStudents: 20 },
  { key: 2, grade: "2. Klasse", numberOfStudents: 22 },
  { key: 3, grade: "3. Klasse", numberOfStudents: 18 },
  { key: 4, grade: "4. Klasse", numberOfStudents: 24 },
];

export default function Classes() {
  // Spaltenkonfiguration für die Tabelle mit zusätzlichen Attributen
  const columns = [
    {
      title: "Klasse",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Anzahl der Schüler",
      dataIndex: "numberOfStudents",
      key: "numberOfStudents",
    },
  ];

  const navigate = useNavigate();

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 24 }}>Grundschulklassen</h1>
      <Table
        dataSource={classesData}
        columns={columns}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/classes/${record.key}`);
            },
          };
        }}
      />
    </div>
  );
}
