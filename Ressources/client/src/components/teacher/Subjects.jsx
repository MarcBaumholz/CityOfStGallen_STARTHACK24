import React from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { Progress } from "antd";

export default function Subjects() {
  const columns = [
    {
      title: "Fach",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Klasse",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Stand im Bildungsplan",
      dataIndex: "stateInCurriculum",
      key: "stateInCurriculum",
      render: (stateInCurriculum) => {
        return (
          <div>
            <Progress percent={stateInCurriculum} />
          </div>
        );
      },
    },
  ];
  const navigate = useNavigate();
  const subjectsData = [
    {
      key: 1,
      name: "Deutsch",
      grade: "1. Klasse",
      stateInCurriculum: 10,
    },
    {
      key: 2,
      name: "Mathe",
      grade: "1. Klasse",
      stateInCurriculum: 22,
    },
    {
      key: 3,
      name: "Sachkunde",
      grade: "1. Klasse",
      stateInCurriculum: 18,
    },
    {
      key: 4,
      name: "Sport",
      grade: "1. Klasse",
      stateInCurriculum: 24,
    },
  ];
  return (
    <div
      style={{
        padding: 24,
      }}
    >
      <h1>Fächer</h1>
      <Table
        dataSource={subjectsData}
        columns={columns}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/subjects/${record.key}`);
            },
          };
        }}
      />
    </div>
  );
}
