import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import FormTask from "../tasks/FormTask";
import ListTask from "../tasks/ListTasks";

const Projects = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="principal-section">
        <Header />
        <main>
          <FormTask />

          <div className="task-container">
            <ListTask />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
