// from data.js

var tbody = d3.select("tbody");
var inputField = d3.select("#datetime");
var filterTableButton = d3.select("#filter-btn");

// YOUR CODE HERE!
// for each sightingReport in 'data', which is the data from data.js
data.forEach((sightingReport) => {
  // tbody.append("tr") tells the computer to add a <tr> row element to 'tbody', our selection d3.select("tbody")
  var row = tbody.append("tr");
  // for each key value pair in the attributes of the Object 'sightingReport'
  Object.entries(sightingReport).forEach(([key, value]) => {
    // row.append("td") defines <td> cell element addition to 'row', our selection d3.select("tbody")
    var cell = row.append("td");
    // cell.text(value) executes the cell addition with text 'value'
    cell.text(value);
  })
})

// Get the input field
var input = document.getElementById("datetime");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keydown", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("filter-btn").click();
  }
});

// inputField.on("change", function() {
filterTableButton.on("click", function() {
   // here d3.event.target is the d3 object that represents this click event
   // .value is the value attribute of the event, which is the value that was entereted into the field
   // we save it to the value newText
    var tbody = d3.select("tbody").html("");
    // var filterDate = d3.event.target.value;
    var filterDate = inputField.node().value;
    console.log('filter date:', filterDate);

    function selectDate(sighting) {
      console.log("sighting.datetime", sighting.datetime )
      return sighting.datetime === filterDate;
    }

    var filteredReport = data.filter(selectDate);

    console.log('filtered report:', filteredReport);
    filteredReport.forEach((sightingReport) => {
  // tbody.append("tr") tells the computer to add a <tr> row element to 'tbody', our selection d3.select("tbody")
        console.log('sightingReport', sightingReport);
        var row = tbody.append("tr");
  // for each key value pair in the attributes of the Object 'sightingReport'
        Object.entries(sightingReport).forEach(([key, value]) => {
    // row.append("td") defines <td> cell element addition to 'row', our selection d3.select("tbody")
            var cell = row.append("td");
    // cell.text(value) executes the cell addition with text 'value'
            cell.text(value);
        })
    })

});
