async function getData() {
    response = await fetch("ZonAnn.Ts+dSST.csv")
    const data = await response.text()
    const table = data.split('\n').slice(1)

    table.forEach(row => {
        columns = row.split(',')
    })
}

getData()