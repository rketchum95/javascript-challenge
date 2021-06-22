// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var button = d3.select("button");
var button1 = d3.select("button1")

var form = d3.select("form");


button.on("click", runEnter);
// form.on("submit", runEnter);


data.forEach(ufoSightings => {
    var row = tbody.append("tr")
    Object.entries(ufoSightings).forEach(([key, value]) =>{
        row.append("td").text(value);
    })
})

button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();
    tbody.html("");

    var inputDate = d3.select("#datetime").property("value");
    // var inputValue = inputElement.property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");


    
    // console.log(inputDate);
    // console.log(tableData);

    if (inputDate) {
        tableData = tableData.filter(sighting => sighting.datetime === inputDate);   
    }
    
    if (inputCity) {
        tableData = tableData.filter(sighting => sighting.city === inputCity);
    }

    if (inputState) {
        tableData = tableData.filter(sighting => sighting.state === inputState);
    }
    
    if (inputCountry) {
        tableData = tableData.filter(sighting => sighting.country === inputCountry);
    }
    
    if (inputShape) {
        tableData = tableData.filter(sighting => sighting.shape === inputShape);
    }

    tableData.forEach(filteredSighting => {
        var filteredrow = tbody.append("tr")
        Object.entries(filteredSighting).forEach(([key, value]) =>{
            filteredrow.append("td").text(value);
        })
    })

}

button1.on("click", runRefresh);

function runRefresh() {
    window.location.reload();
    // return false;
};