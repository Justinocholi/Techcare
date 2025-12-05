import { useEffect } from 'react'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import './App.css'

function App() {
  useEffect(() => {
    Chart.register(CategoryScale)
    const chartCanvas = document.getElementById('bpChart') as HTMLCanvasElement | null
    if (!chartCanvas) return
    const ctx = chartCanvas.getContext('2d')
    if (!ctx) return
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['8am', '10am', '12pm', '2pm', '4pm', '6pm'],
        datasets: [
          {
            label: 'Systolic',
            data: [130, 135, 140, 138, 132, 128],
            borderColor: '#ff647c',
            backgroundColor: 'rgba(255, 100, 124, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Diastolic',
            data: [85, 87, 90, 88, 86, 84],
            borderColor: '#8a63ff',
            backgroundColor: 'rgba(138, 99, 255, 0.1)',
            tension: 0.4,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'end'
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 60,
            max: 160
          }
        }
      }
    })
    return () => chart.destroy()
  }, [])
  return (
    <div className="app">
      {/* Top Navigation Bar */}
      <div className="topbar">
        <div className="brand">
          <img src="/assets/TestLogo.png" alt="Tech.Care Logo" />
        </div>
        <div className="top-nav">
          <a href="#" className="active">
            <img src="/assets/icons/home.svg" alt="Dashboard" />
            Dashboard
          </a>
          <a href="#">
            <img src="/assets/icons/group.svg" alt="Patients" />
            Patients
          </a>
          <a href="#">
            <img src="/assets/icons/calendar.svg" alt="Calendar" />
            Calendar
          </a>
          <a href="#">
            <img src="/assets/icons/chat_bubble.svg" alt="Messages" />
            Messages
          </a>
          <a href="#">
            <img src="/assets/icons/settings.svg" alt="Settings" />
            Settings
          </a>
        </div>
        <div className="profile">
          <div className="user">
            <img src="/assets/dr.png" alt="Dr. Sarah Chen" />
            <div className="user-info">
              <h3>Dr. Sarah Chen</h3>
              <p>Cardiologist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="section-title">
            <h2>Patients</h2>
            <div className="search">
              <img src="/assets/icons/search.svg" alt="Search" />
              <input type="text" placeholder="Search patients..." />
            </div>
          </div>
          <div className="patient-list">
            <div className="patient active">
              <img src="/assets/Layer 1.png" alt="Patient" />
              <div className="patient-info">
                <h3>Michael Davis</h3>
                <p>Last visit: Today</p>
              </div>
              <div className="status critical"></div>
            </div>
            <div className="patient">
              <img src="/assets/Layer 2.png" alt="Patient" />
              <div className="patient-info">
                <h3>Emma Wilson</h3>
                <p>Last visit: Yesterday</p>
              </div>
              <div className="status stable"></div>
            </div>
            <div className="patient">
              <img src="/assets/Layer 3.png" alt="Patient" />
              <div className="patient-info">
                <h3>James Taylor</h3>
                <p>Last visit: 3 days ago</p>
              </div>
              <div className="status warning"></div>
            </div>
            <div className="patient">
              <img src="/assets/Layer 4.png" alt="Patient" />
              <div className="patient-info">
                <h3>Sophia Martinez</h3>
                <p>Last visit: 1 week ago</p>
              </div>
              <div className="status stable"></div>
            </div>
            <div className="patient">
              <img src="/assets/Layer 5.png" alt="Patient" />
              <div className="patient-info">
                <h3>Robert Johnson</h3>
                <p>Last visit: 2 weeks ago</p>
              </div>
              <div className="status stable"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          <div className="section-title">
            <h2>Patient Overview</h2>
            <div className="date-selector">
              <button className="active">Day</button>
              <button>Week</button>
              <button>Month</button>
            </div>
          </div>

          {/* Blood Pressure Chart */}
          <div className="card chart">
            <div className="card-header">
              <h3>Blood Pressure</h3>
              <div className="card-actions">
                <button className="btn-icon">
                  <img src="/assets/icons/download.svg" alt="Download" />
                </button>
                <button className="btn-icon">
                  <img src="/assets/icons/more_horiz.svg" alt="More" />
                </button>
              </div>
            </div>
            <div className="chart-container">
              <canvas id="bpChart"></canvas>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="card stat">
              <div className="stat-icon respiratory">
                <img src="/assets/icons/respiratory_rate.svg" alt="Respiratory Rate" />
              </div>
              <div className="stat-info">
                <h3>Respiratory Rate</h3>
                <div className="stat-value">
                  <p>18 <span>bpm</span></p>
                  <div className="trend up">
                    <img src="/assets/icons/ArrowUp.svg" alt="Trend Up" />
                    <span>2.3%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card stat">
              <div className="stat-icon temperature">
                <img src="/assets/icons/temperature.svg" alt="Temperature" />
              </div>
              <div className="stat-info">
                <h3>Temperature</h3>
                <div className="stat-value">
                  <p>37.5 <span>°C</span></p>
                  <div className="trend up">
                    <img src="/assets/icons/ArrowUp.svg" alt="Trend Up" />
                    <span>0.8%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card stat">
              <div className="stat-icon heart-rate">
                <img src="/assets/icons/HeartBPM.svg" alt="Heart Rate" />
              </div>
              <div className="stat-info">
                <h3>Heart Rate</h3>
                <div className="stat-value">
                  <p>82 <span>bpm</span></p>
                  <div className="trend down">
                    <img src="/assets/icons/ArrowDown.svg" alt="Trend Down" />
                    <span>1.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnostics */}
          <div className="card diagnostics">
            <div className="card-header">
              <h3>Diagnostics</h3>
              <div className="card-actions">
                <button className="btn-icon">
                  <img src="/assets/icons/more_horiz.svg" alt="More" />
                </button>
              </div>
            </div>
            <div className="diagnostics-list">
              <div className="diagnostic-item">
                <div className="diagnostic-icon critical">
                  <img src="/assets/icons/HeartBPM.svg" alt="Heart Condition" />
                </div>
                <div className="diagnostic-info">
                  <h4>Hypertension Stage 1</h4>
                  <p>Diagnosed on May 15, 2023</p>
                </div>
                <button className="btn-text">View Details</button>
              </div>
              <div className="diagnostic-item">
                <div className="diagnostic-icon warning">
                  <img src="/assets/icons/temperature.svg" alt="Diabetes" />
                </div>
                <div className="diagnostic-info">
                  <h4>Type 2 Diabetes</h4>
                  <p>Diagnosed on January 8, 2022</p>
                </div>
                <button className="btn-text">View Details</button>
              </div>
              <div className="diagnostic-item">
                <div className="diagnostic-icon stable">
                  <img src="/assets/icons/respiratory_rate.svg" alt="Cholesterol" />
                </div>
                <div className="diagnostic-info">
                  <h4>High Cholesterol</h4>
                  <p>Diagnosed on March 22, 2021</p>
                </div>
                <button className="btn-text">View Details</button>
              </div>
            </div>
          </div>

          {/* Lab Results */}
          <div className="card lab-results">
            <div className="card-header">
              <h3>Lab Results</h3>
              <div className="card-actions">
                <button className="btn-primary">
                  <img src="/assets/icons/more_hor.svg" alt="Add" />
                  Add New
                </button>
              </div>
            </div>
            <table className="results-table">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Result</th>
                  <th>Range</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Blood Glucose</td>
                  <td>142 mg/dL</td>
                  <td>70-99 mg/dL</td>
                  <td><span className="status-pill warning">High</span></td>
                  <td>Jun 12, 2023</td>
                </tr>
                <tr>
                  <td>Cholesterol (Total)</td>
                  <td>210 mg/dL</td>
                  <td>&lt;200 mg/dL</td>
                  <td><span className="status-pill warning">High</span></td>
                  <td>Jun 12, 2023</td>
                </tr>
                <tr>
                  <td>HDL Cholesterol</td>
                  <td>48 mg/dL</td>
                  <td>&gt;40 mg/dL</td>
                  <td><span className="status-pill normal">Normal</span></td>
                  <td>Jun 12, 2023</td>
                </tr>
                <tr>
                  <td>LDL Cholesterol</td>
                  <td>142 mg/dL</td>
                  <td>&lt;100 mg/dL</td>
                  <td><span className="status-pill critical">High</span></td>
                  <td>Jun 12, 2023</td>
                </tr>
                <tr>
                  <td>Triglycerides</td>
                  <td>180 mg/dL</td>
                  <td>&lt;150 mg/dL</td>
                  <td><span className="status-pill warning">High</span></td>
                  <td>Jun 12, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel - Patient Details */}
        <div className="right-panel">
          <div className="patient-detail">
            <div className="patient-profile">
              <img src="/assets/Layer 1.png" alt="Michael Davis" className="patient-avatar" />
              <h2>Michael Davis</h2>
              <p className="patient-id">Patient ID: #MD-5678</p>
              <div className="patient-stats">
                <div className="stat-item">
                  <p className="label">Age</p>
                  <p className="value">42</p>
                </div>
                <div className="stat-item">
                  <p className="label">Weight</p>
                  <p className="value">78 kg</p>
                </div>
                <div className="stat-item">
                  <p className="label">Height</p>
                  <p className="value">175 cm</p>
                </div>
                <div className="stat-item">
                  <p className="label">Blood</p>
                  <p className="value">A+</p>
                </div>
              </div>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item">
                <img src="/assets/icons/PhoneIcon.svg" alt="Phone" />
                <p>(555) 123-4567</p>
              </div>
              <div className="info-item">
                <img src="/assets/icons/chat_bubble.svg" alt="Email" />
                <p>michael.davis@example.com</p>
              </div>
              <div className="info-item">
                <img src="/assets/icons/home.svg" alt="Address" />
                <p>123 Main Street, Apt 4B<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-primary">
                <img src="/assets/icons/calendar.svg" alt="Schedule" />
                Schedule Appointment
              </button>
              <button className="btn-secondary">
                <img src="/assets/icons/chat_bubble.svg" alt="Message" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
