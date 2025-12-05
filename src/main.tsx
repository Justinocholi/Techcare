import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Chart from 'chart.js/auto'
import { CategoryScale } from 'chart.js'

Chart.register(CategoryScale)

// Initialize blood pressure chart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const chartCanvas = document.getElementById('bpChart') as HTMLCanvasElement
    if (chartCanvas) {
      const ctx = chartCanvas.getContext('2d')
      if (ctx) {
        new Chart(ctx, {
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
      }
    }
  }, 500)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
