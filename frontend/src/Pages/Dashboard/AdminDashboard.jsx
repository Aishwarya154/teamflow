
function AdminDashboard() {
  // Sample figures for the initial dashboard layout.
  // These will be replaced with API data once the backend is ready.
  const stats = [
    {
      title: "Total Users",
      value: 48,
      description: "Registered users",
    },
    {
      title: "Total Projects",
      value: 12,
      description: "Projects created",
    },
    {
      title: "Total Tasks",
      value: 156,
      description: "Tasks across projects",
    },
    {
      title: "Completed Tasks",
      value: 98,
      description: "Tasks completed",
    },
  ];

  // A quick breakdown of project and task activity.
  const projectOverview = [
    { title: "Active Projects", value: 8 },
    { title: "Completed Projects", value: 4 },
    { title: "Pending Tasks", value: 23 },
    { title: "In Progress Tasks", value: 35 },
  ];
  // Calculate the overall task completion percentage.
  const completionPercentage = Math.round(
    (98 / 156) * 100
  );
  return (
    <div className="admin-dashboard">
      <div className="dashboard-heading">
        <h2>Admin Dashboard</h2>
        <p>Overview of your organization's activities.</p>
      </div>

      {/* Main statistics */}
      <div className="dashboard-stats">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <h6>{stat.title}</h6>
            <h3>{stat.value}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Project and task breakdown */}
      <section className="overview-section">
        <h3>Project Overview</h3>

        <div className="overview-grid">
          {projectOverview.map((item) => (
            <div className="overview-card" key={item.title}>
              <h6>{item.title}</h6>
              <h3>{item.value}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Overall task completion */}
      <section className="progress-section">
        <h3>Overall Task Completion</h3>

        <div className="completion-content">
          {/* The SVG ring displays the percentage of completed tasks. */}
          <div
            className="completion-ring"
            style={{ "--progress": `${completionPercentage}%` }}
          >
            <svg viewBox="0 0 160 160" className="completion-chart">
              <defs>
                <linearGradient
                  id="completionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>

              {/* Background circle shows the remaining percentage. */}
              <circle
                className="completion-ring-bg"
                cx="80"
                cy="80"
                r="68"
              />

              {/* Foreground circle shows completed tasks. */}
              <circle
                className="completion-ring-fill"
                cx="80"
                cy="80"
                r="68"
                stroke="url(#completionGradient)"
                strokeDasharray={`${2 * Math.PI * 68}`}
                strokeDashoffset={`${
                  2 * Math.PI * 68 * (1 - completionPercentage / 100)
                }`}
              />
            </svg>

            <div className="completion-ring-text">
              <strong>{completionPercentage}%</strong>
              <span>COMPLETED</span>
            </div>
          </div>

          <p>98 out of 156 tasks completed</p>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
