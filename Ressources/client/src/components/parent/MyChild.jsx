import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Table } from "antd";

export default function MyChild() {
  const columns = [
    {
      title: "Fach",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Note",
      dataIndex: "A",
      key: "A",
    },
    {
      title: "Note",
      dataIndex: "B",
      key: "B",
    },
  ];
  const studentsData = [];
  const data = [
    { subject: "Math", A: 120, B: 110, fullMark: 150 },
    { subject: "English", A: 98, B: 130, fullMark: 150 },
    { subject: "Science", A: 86, B: 130, fullMark: 150 },
    { subject: "History", A: 99, B: 100, fullMark: 150 },
    { subject: "Geography", A: 85, B: 90, fullMark: 150 },
    { subject: "Art", A: 65, B: 85, fullMark: 150 },
  ];
  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          marginBottom: 24,
          display: "flex",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <h1>Max Mustermann</h1>
          <h2>1. Klasse</h2>
          <h3>01.01.2010</h3>
          <h3>Musterstraße 1, 12345 Musterstadt</h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <RadarChart
              cx={150} // Anpassung der x-Koordinate, um den Radar-Chart innerhalb des Headers zu positionieren
              cy={100} // Anpassung der y-Koordinate, um den Radar-Chart innerhalb des Headers zu positionieren
              outerRadius={100} // Anpassung des äußeren Radius, um die Größe des Radar-Chart zu reduzieren
              width={300} // Anpassung der Breite, um die Größe des Radar-Chart zu reduzieren
              height={200} // Anpassung der Höhe, um die Größe des Radar-Chart zu reduzieren
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="Lily"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </div>
        </div>
      </div>
      <div>
        <Table dataSource={studentsData} columns={columns} />
      </div>
    </div>
  );
}
