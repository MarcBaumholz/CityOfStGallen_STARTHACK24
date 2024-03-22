import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Table, Checkbox } from "antd";
import { Progress } from "antd";
import { useNavigate } from "react-router-dom";

export default function Student() {
  const [showAvg, setShowAvg] = React.useState(false);
  const navigate = useNavigate();

  const studentsData = [];
  const data = [
    { subject: "Deutsch", A: 10, B: 35 },
    { subject: "Mathe", A: 22, B: 25 },
    { subject: "Sachkunde", A: 18, B: 10 },
    { subject: "Sport", A: 24, B: 5 },
  ];

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
      title: "Aktueller Stand",
      dataIndex: "stateInCurriculum",
      key: "stateInCurriculum",
      render: (stateInCurriculum) => <Progress percent={stateInCurriculum} />,
    },
  ];
  const columns2 = [
    {
      title: "Auffälligkeit",
      dataIndex: "stateInCurriculum",
      key: "stateInCurriculum",
      render: (stateInCurriculum) => <Progress percent={stateInCurriculum} />,
    },
    {
      title: "Fach",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Datum",
      dataIndex: "grade",
      key: "grade",
    },
  ];

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
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <h1>Max Mustermann</h1>
        <h2>1. Klasse</h2>
        <h3>01.01.2010</h3>
        <h3>Musterstraße 1, 12345 Musterstadt</h3>

        <div style={{ width: "fit-content" }}>
          <RadarChart
            cx={100}
            cy={100}
            outerRadius={50}
            width={300}
            height={200}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="subject"
              fontSize={14} // Vergrößern Sie die Schriftgröße
              stroke="#555" // Ändern Sie die Farbe der Achsenbeschriftungen
              axisLine={false} // Deaktivieren Sie die Achsenlinien für eine bessere Lesbarkeit
              tickLine={false} // Deaktivieren Sie die Achsenticklinien für eine bessere Lesbarkeit
            />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            {showAvg && (
              <Radar
                name="Lily"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            )}
          </RadarChart>
        </div>
      </div>

      <div>
        <Checkbox onChange={(e) => setShowAvg(e.target.checked)}>
          Durchschnitt anzeigen
        </Checkbox>
        <h1>Fächer</h1>
        <Table
          columns={columns}
          dataSource={subjectsData}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                navigate(`/classes/1/5/${record.key}`);
              },
            };
          }}
        />
      </div>
      <h1>Auffälligkeiten</h1>
      <Table
        columns={columns2}
        dataSource={studentsData}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(`/classes/1/5/${record.key}`);
            },
          };
        }}
      />
    </div>
  );
}
