// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var button = d3.select("button");

button.on("click", runEnter);


data.forEach(ufoSightings => {
    var row = tbody.append("tr")
    Object.entries(ufoSightings).forEach(([key, value]) =>{
        row.append("td").text(value);
    })
})

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(tableData);

    var filterDate = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filterDate);

}