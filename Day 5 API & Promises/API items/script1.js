function fetchAPI () {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=XLWWFJLF6SJ7542HQXTK7GYNT'
    fetch(url).then(res => res.json())
    .then(console.log)
    .then(renderUI);
}

fetchAPI();

function renderUI(data) {
    const days = data.days;
    console.log(days);

    const row = document.createElement("tr");
    let cell1 = document.createElement("th");
    row.appendChild(cell1);
    cell1.innerText = 'Date';
}