// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var button = d3.select("button");

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

    var inputElement = d3.select("#datetime");
    var inputCity = d3.select("city");
    var inputState = d3.select("state");
    var inputCountry = d3.select("country");
    var inputShape = d3.select("shape");

    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(tableData);

    var filteredDate = tableData.filter(sighting => sighting.datetime === inputValue);
    var filteredCity = tableData.filter(sighting => sighting.city === inputValue);
    var filterState = tableData.filter(sighting => sighting.state === inputValue);
    var filterCountry = tableData.filter(sighting => sighting.country === inputValue);
    var filterShape = tableData.filter(sighting => sighting.shape === inputValue);


    console.log(filteredDate);

    filteredDate.forEach(filteredSighting => {
        var filteredrow = tbody.append("tr")
        Object.entries(filteredSighting).forEach(([key, value]) =>{
            filteredrow.append("td").text(value);
        })
    })

}