const ctx = document.getElementById('chart');
const xLabels = []
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xLabels,
      datasets: [{
        label: 'Global Average Temperature',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

async function getData() {
    response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text()
    const table = data.split('\n').slice(1)

    table.forEach(row => {
        const columns = row.split(',')
        const year = columns[0]
        const temperature = columns[1]
        console.log(year, temperature)
    })
}

getData()