import "./Dashboard.css";

import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import MemberDashboard from "./MemberDashboard";

function Dashboard() {
  // Temporary role for frontend testing
  const userRole = "admin";

  return (
    <div className="dashboard-container">
      {userRole === "admin" && <AdminDashboard />}

      {userRole === "manager" && <ManagerDashboard />}

      {userRole === "member" && <MemberDashboard />}
    </div>
  );
}

export default Dashboard;