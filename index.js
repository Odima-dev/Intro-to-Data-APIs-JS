async function chartIt() {
    const data = await getData()
    const ctx = document.getElementById('chart'); 
    new Chart(ctx, {
        type: 'line',
        data: {
        labels: data.xs,
        datasets: [{
            label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in oC',
            data: data.ys,
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
    const xs = []
    const ys = []

    response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text()
    const table = data.split('\n').slice(1)

    table.forEach(row => {
        const columns = row.split(',')
        const year = columns[0]
        xs.push(year)
        const temperature = columns[1]
        ys.push(parseFloat(temperature) + 14)
        console.log(year, temperature)
    })
    return{xs, ys}
}

getData()