import React from "react";
import { Card, Modal } from "antd";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";

export default function ParentMasterData() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div style={{ padding: 24 }}>
      <h1>Meine Daten</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 24,
        }}
      >
        <Button onClick={() => setShowModal(true)}>Edit</Button>
      </div>
      <p>Name: Max Mustermann</p>
      <p>Adresse: Musterstraße 1, 12345 Musterstadt</p>
      <p>Telefon: 0123456789</p>
      <p>E-Mail: mmsterdhk@web.de </p>
      <Modal
        title="Stammdatei bearbeiten"
        visible={showModal}
        onOk={() => {}}
        onCancel={() => {
          setShowModal(false);
        }}
      >
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input />
          </Form.Item>
          <Form.Item label="Adresse">
            <Input />
          </Form.Item>
          <Form.Item label="Telefon">
            <Input />
          </Form.Item>
          <Form.Item label="E-Mail">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <h2>Meine Kinder</h2>
      <div style={{ display: "flex" }}>
        <Card title="Max Mustermann" style={{ width: 300, margin: 24 }}>
          <p>1. Klasse</p>
          <p>01.01.2010</p>
          <p>Musterstraße 1, 12345 Musterstadt</p>
        </Card>
        <Card title="Erika Mustermann" style={{ width: 300, margin: 24 }}>
          <p>1. Klasse</p>
          <p>01.01.2010</p>
          <p>Musterstraße 1, 12345 Musterstadt</p>
        </Card>
      </div>
    </div>
  );
}
