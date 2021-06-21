// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// console.log(data);

// data.forEach(function(ufoSightings) {
//     console.log(ufoSightings);
// });

data.forEach(ufoSightings => {
    var row = tbody.append("tr")
    Object.entries(ufoSightings).forEach(([key, value]) =>{
        row.append("td").text(value);
    })
})