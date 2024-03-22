import React from "react";
import { useState } from "react";
import Login from "./components/general/Login";
import ParentDasboard from "./components/parent/ParentDasboard";
import TeacherDashboard from "./components/teacher/TeacherDashboard";
import QuickMenu from "./components/teacher/QuickMenu";

function App() {
  const [user, setUser] = useState(null);
  if (user === null) {
    return <Login setUser={setUser} />;
  }
  if (user === "parent") {
    return <ParentDasboard setUser={setUser} />;
  }
  if (user === "teacher") {
    return (
      <div>
        <TeacherDashboard setUser={setUser} />
      </div>
    );
  }
}

export default App;
