import React from "react";
import { Table } from "antd";
import { Progress } from "antd";

export default function Competence() {
  const columns = [
    {
      title: "Vorname",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Nachname",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Level in der Komptenz",
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
  const studentData = [
    {
      key: 1,
      name: "Max",
      grade: "Mustermann",
      stateInCurriculum: 10,
    },
    {
      key: 2,
      name: "Erika",
      grade: "Mustermann",
      stateInCurriculum: 22,
    },
    {
      key: 3,
      name: "Hans",
      grade: "Mustermann",
      stateInCurriculum: 18,
    },
    {
      key: 4,
      name: "Lisa",
      grade: "Mustermann",
      stateInCurriculum: 24,
    },
  ];

  return (
    <div>
      <div style={{ padding: 24 }}>
        <h1>Lesen</h1>
        <h2>Leseverständnis verbessern</h2>
        <Table dataSource={studentData} columns={columns} />

        <h2>Rechtschreibung üben</h2>
        <Table dataSource={studentData} columns={columns} />
      </div>
    </div>
  );
}
