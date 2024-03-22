import React from "react";
import { Button, Card, Divider, Form, Input, Modal, Select } from "antd";
import { useNavigate } from "react-router-dom";

export default function QuickMenu({ setUser }) {
  const [showOverview, setShowOverview] = React.useState(false);
  const [showNote, setShowNote] = React.useState(false);
  const { Option } = Select;
  const { TextArea } = Input;
  const navigate = useNavigate();
  return (
    <div style={{ padding: 24 }}>
      <h1>Quick Start</h1>
      <Divider>Schnelle Aktionen</Divider>
      <div
        style={{
          display: "flex",
        }}
      >
        <Card
          onClick={() => setShowNote(true)}
          style={{ width: 300, margin: 24 }}
          title="Auffälligkeit notieren"
        >
          <p> Klicken Sie hier um eine Auffälligkeit zu notieren</p>
        </Card>
        <Card
          style={{ width: 300, margin: 24 }}
          title="Schülerübersicht exportieren"
          onClick={() => setShowOverview(true)}
        >
          <p> Klicken Sie hier um eine Schülerübersicht zu exportieren</p>
        </Card>
      </div>
      <Divider>Daten hinzufügen</Divider>
      <div
        style={{
          display: "flex",
        }}
      >
        <Card style={{ width: 300, margin: 24 }} title="Neue Klasse erstellen">
          <p> Klicken Sie hier um eine neue Klasse zu erstellen</p>
        </Card>
        <Card style={{ width: 300, margin: 24 }} title="Schüler hinzufügen">
          <p>Click here to add a student to a class</p>
        </Card>
        <Card style={{ width: 300, margin: 24 }} title="Fach hinzufügen">
          <p>Click here to add a subject to a class</p>
        </Card>
      </div>
      <Modal
        title="Auffälligkeit notieren"
        visible={showNote}
        onOk={() => {
          setShowNote(false);
        }}
        onCancel={() => setShowNote(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Schüler">
            <Select>
              <Option value="1">Max Mustermann</Option>
              <Option value="2">Erika Mustermann</Option>
              <Option value="3">Hans Peter</Option>
              <Option value="4">Gretchen Schmitt</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Fach">
            <Select>
              <Option value="1">Deutsch</Option>
              <Option value="2">Mathe</Option>
              <Option value="3">Sachkunde</Option>
              <Option value="4">Sport</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Datum">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Auffälligkeit">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        onOk={() => {
          navigate("/easy-view");
        }}
        onCancel={() => setShowOverview(false)}
        title="Übersicht exportieren"
        visible={showOverview}
      >
        <p>Übersicht exportieren</p>
        <Form layout="vertical">
          <Form.Item label="Schüler">
            <Select>
              <Option value="1">Max Mustermann (1b)</Option>
              <Option value="2">Erika Mustermann(1b)</Option>
              <Option value="3">Hans Peter(1b)</Option>
              <Option value="4">Gretchen Schmitt(2b)</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Fach">
            <Select>
              <Option value="1">Deutsch</Option>
              <Option value="2">Mathe</Option>
              <Option value="3">Sachkunde</Option>
              <Option value="4">Sport</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Kompetenz">
            <Select>
              <Option value="1">Lesen</Option>
              <Option value="2">Schreiben</Option>
              <Option value="3">Rechnen</Option>
              <Option value="4">Bewegung</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
