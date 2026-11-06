
function MemberDashboard() {
  // Temporary figures until the dashboard is connected to the backend.
  const stats = [
    {
      title: "My Tasks",
      value: 8,
      description: "Total assigned tasks",
    },
    {
      title: "Completed",
      value: 3,
      description: "Tasks completed",
    },
    {
      title: "In Progress",
      value: 4,
      description: "Tasks being worked on",
    },
    {
      title: "Overdue",
      value: 1,
      description: "Tasks past their deadline",
    },
  ];

  // Sample tasks assigned to the team member.
  const myTasks = [
    {
      name: "Design Login Page",
      project: "Website Redesign",
      priority: "High",
      dueDate: "Nov 08, 2026",
      status: "In Progress",
    },
    {
      name: "Create API Documentation",
      project: "CRM Integration",
      priority: "Medium",
      dueDate: "Nov 04, 2026",
      status: "Overdue",
    },
    {
      name: "Fix Dashboard Layout",
      project: "Website Redesign",
      priority: "High",
      dueDate: "Nov 06, 2026",
      status: "In Progress",
    },
    {
      name: "Update User Profile",
      project: "Mobile App Development",
      priority: "Low",
      dueDate: "Nov 12, 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="member-dashboard">
      <div className="dashboard-heading">
        <h2>Team Member Dashboard</h2>
        <p>Track your assigned tasks and progress.</p>
      </div>

      {/* Summary of the member's assigned tasks */}
      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <h6>{stat.title}</h6>
            <h3>{stat.value}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Displays the tasks assigned to the current member */}
      <section className="overview-section">
        <h3>Recent Tasks</h3>

        <div className="member-task-table">
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Project</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {myTasks.map((task) => (
                <tr key={task.name}>
                  <td>{task.name}</td>
                  <td>{task.project}</td>
                  <td>
                    <span className={`priority-badge ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                  </td>

                  <td>{task.dueDate}</td>

                  <td>
                    <span className={`status-badge ${task.status.toLowerCase().replace(" ", "-")}`}>
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default MemberDashboard;
