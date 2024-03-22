import React from "react";
import { Table } from "antd";
import { Progress } from "antd";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Subject() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Kompetenz",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Klasse",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Datum",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Geprüfte Kompentenzen",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <div>1 von 2 geprüft</div>;
      },
    },
  ];
  const { subjectId: subjectIdFromURL } = useParams();

  const [subjectId, setSubjectId] = React.useState(subjectIdFromURL);
  useEffect(() => {
    setSubjectId(subjectIdFromURL);
  }, [subjectIdFromURL]);

  const expandedRowRender = (record) => {
    const subColumns = [
      {
        title: "Lernziel",
        dataIndex: "learningObjective",
        key: "learningObjective",
      },
      {
        title: "Bewertung",
        dataIndex: "assessment",
        key: "assessment",
      },
    ];

    const subData = record.learningObjectives.map((objective, index) => ({
      key: index,
      learningObjective: objective,
      assessment: record.assessments[index],
    }));

    return (
      <div
        style={{
          padding: 24,
          ///light grey background
          backgroundColor: "#f0f0f0",
        }}
      >
        <Table columns={subColumns} dataSource={subData} pagination={false} />
      </div>
    );
  };

  const subjectsData = [
    {
      key: 1,
      name: "Lesen",
      grade: "1a",
      date: "01.01.2021",
      status: "nicht durchgeführt",
      learningObjectives: [
        "Leseverständnis verbessern",
        "Rechtschreibung üben",
      ],
      assessments: ["noch nicht bewertet", "noch nicht bewertet"],
    },
    {
      key: 2,
      name: "Schreiben",
      grade: "1b",
      date: "01.01.2021",
      status: "nicht bewertet",
      learningObjectives: [
        "Addition und Subtraktion",
        "Multiplikation und Division",
      ],
      assessments: ["noch nicht bewertet", "noch nicht bewertet"],
    },
    {
      key: 3,
      name: "Hören und Sprechen",
      grade: "1. Klasse",
      date: "01.01.2021",
      status: "bewertet",
      learningObjectives: ["Pflanzen kennenlernen", "Tiere erkunden"],
      assessments: ["sehr gut", "gut"],
    },
    {
      key: 4,
      name: "Kreativität",
      grade: "1. Klasse",
      date: "01.01.2021",
      status: "bewertet",
      learningObjectives: ["Laufen", "Springen"],
      assessments: ["sehr gut", "sehr gut"],
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1>Subject: Deutsch</h1>
      <Divider>Leistungensprüfungen</Divider>
      <Table
        dataSource={subjectsData}
        columns={columns}
        expandable={{ expandedRowRender }}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(`/subjects/${subjectId}/${record.key}`);
            },
          };
        }}
      />
    </div>
  );
}
