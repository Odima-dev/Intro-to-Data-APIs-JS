const xLabels = []
const yTemps = []

async function chartIt() {
    await getData()
    const ctx = document.getElementById('chart');
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: xLabels,
        datasets: [{
            label: 'Global Average Temperature',
            data: yTemps,
            borderWidth: 1
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: false
            }
        }
        }
    });
}

chartIt()

async function getData() {
    response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text()
    const table = data.split('\n').slice(1)

    table.forEach(row => {
        const columns = row.split(',')
        const year = columns[0]
        xLabels.push(year)
        const temperature = columns[1]
        yTemps.push(parseFloat(temperature) + 14)
        console.log(year, temperature)
    })
}

getData()