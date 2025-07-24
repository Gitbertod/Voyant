import React from "react";
import { TableComponent } from "../../components/tableComponent/TableComponent";
import styles from "./Dashboard.module.css";
import { SidebarComponent } from "../../components/sidebarComponent/SidebarComponent";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <SidebarComponent></SidebarComponent>
      <div className={styles.container}>
        <TableComponent></TableComponent>
      </div>
    </div>
  );
};

export default Dashboard;
