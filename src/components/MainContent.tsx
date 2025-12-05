import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const MainContent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        const bpChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Systolic',
                data: [120, 130, 125, 135, 145, 160],
                borderColor: '#ff6384',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.4,
                fill: true
              },
              {
                label: 'Diastolic',
                data: [80, 85, 82, 78, 75, 78],
                borderColor: '#8a63ff',
                backgroundColor: 'rgba(138, 99, 255, 0.1)',
                tension: 0.4,
                fill: true
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: false,
                min: 60,
                max: 180
              }
            }
          }
        });

        return () => {
          bpChart.destroy();
        };
      }
    }
  }, []);

  return (
    <section className="content">
      <div className="content-card">
        <h2 className="section-title">Diagnosis History</h2>
        <div className="history-grid">
          <div className="chart-card">
            <div className="chart-header">
              <div>Blood Pressure</div>
              <div className="period">
                Last 6 months
                <img src="/assets/icons/expand_more.svg" alt="Expand" className="icon-down" />
              </div>
            </div>
            <canvas ref={chartRef} id="bpChart"></canvas>
          </div>
          <div className="bp-summary">
            <div className="legend">
              <div className="legend-row"><span className="dot pink"></span>Systolic</div>
              <div className="big-number">160</div>
              <div className="muted">
                <img src="/assets/icons/ArrowUp.svg" alt="Up Arrow" className="icon-inline" />
                Higher than Average
              </div>
            </div>
            <div className="legend">
              <div className="legend-row"><span className="dot purple"></span>Diastolic</div>
              <div className="big-number">78</div>
              <div className="muted">
                <img src="/assets/icons/ArrowDown.svg" alt="Down Arrow" className="icon-inline" />
                Lower than Average
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card light-blue">
          <div className="stat-icon">
            <img src="/assets/icons/respiratory_rate.svg" alt="Respiratory Icon" />
          </div>
          <div className="stat-body">
            <div className="stat-title">Respiratory Rate</div>
            <div className="stat-value">20 bpm</div>
            <div className="muted">Normal</div>
          </div>
        </div>
        <div className="stat-card light-pink">
          <div className="stat-icon">
            <img src="/assets/icons/temperature.svg" alt="Temperature Icon" />
          </div>
          <div className="stat-body">
            <div className="stat-title">Temperature</div>
            <div className="stat-value">98.6°F</div>
            <div className="muted">Normal</div>
          </div>
        </div>
        <div className="stat-card light-rose">
          <div className="stat-icon">
            <img src="/assets/icons/HeartBPM.svg" alt="Heart Rate Icon" />
          </div>
          <div className="stat-body">
            <div className="stat-title">Heart Rate</div>
            <div className="stat-value">78 bpm</div>
            <div className="muted">
              <img src="/assets/icons/ArrowDown.svg" alt="Down Arrow" className="icon-inline" />
              Lower than Average
            </div>
          </div>
        </div>
      </div>

      <div className="content-row">
        <div className="content-card diagnostic-list">
          <h3>Diagnostic List</h3>
          <div className="table-wrapper">
            <table className="diagnostic-table">
              <thead>
                <tr>
                  <th>Problem/Diagnosis</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hypertension</td>
                  <td>Chronic high blood pressure</td>
                  <td>Under Observation</td>
                </tr>
                <tr>
                  <td>Type 2 Diabetes</td>
                  <td>Insulin resistance and elevated blood sugar</td>
                  <td>Cured</td>
                </tr>
                <tr>
                  <td>Asthma</td>
                  <td>Recurrent episodes of bronchial constriction</td>
                  <td>Inactive</td>
                </tr>
                <tr>
                  <td>Osteoarthritis</td>
                  <td>Degenerative joint disease</td>
                  <td>Managed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-card lab-results">
          <h3>Lab Results</h3>
          <ul className="lab-list">
            <li>
              <span>Blood Tests</span>
              <img src="/assets/icons/download.svg" alt="Download" className="download-icon" />
            </li>
            <li className="active">
              <span>CT Scans</span>
              <img src="/assets/icons/download.svg" alt="Download" className="download-icon" />
            </li>
            <li>
              <span>Radiology Reports</span>
              <img src="/assets/icons/download.svg" alt="Download" className="download-icon" />
            </li>
            <li>
              <span>X-Rays</span>
              <img src="/assets/icons/download.svg" alt="Download" className="download-icon" />
            </li>
            <li>
              <span>Urine Test</span>
              <img src="/assets/icons/download.svg" alt="Download" className="download-icon" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainContent;