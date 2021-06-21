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

    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(tableData);

    var filteredDate = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredDate);

    filteredDate.forEach(filteredSighting => {
        var filteredrow = tbody.append("tr")
        Object.entries(filteredSighting).forEach(([key, value]) =>{
            filteredrow.append("td").text(value);
        })
    })

}