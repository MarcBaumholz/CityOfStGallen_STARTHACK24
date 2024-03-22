import { Form, Input, Select, Button, message } from "antd";
import Link from "antd/es/typography/Link";
import React, { useState } from "react";

export default function Login({ setUser }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true);
    // Simuliere eine API-Anfrage (Mock-Funktionalität)
    try {
      // Hier könnte die tatsächliche API-Anfrage erfolgen
      // await API.login(values.username, values.password, values.role);
      // Für den Mock verwenden wir setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Erfolgreicher Login
      setUser(values.role);
    } catch (error) {
      message.error(
        "Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldeinformationen."
      );
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="role"
          label="Role"
          rules={[
            { required: true, message: "Bitte wählen Sie eine Rolle aus." },
          ]}
        >
          <Select placeholder="Wählen Sie eine Rolle">
            <Select.Option value="parent">Elternteil</Select.Option>
            <Select.Option value="teacher">Lehrer</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="username"
          label="Benutzername"
          rules={[
            {
              required: true,
              message: "Bitte geben Sie Ihren Benutzernamen ein.",
            },
          ]}
        >
          <Input placeholder="Benutzername" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Passwort"
          rules={[
            { required: true, message: "Bitte geben Sie Ihr Passwort ein." },
          ]}
        >
          <Input.Password placeholder="Passwort" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Link to="/">
            <Button type="primary" htmlType="submit" loading={loading}>
              Anmelden
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
