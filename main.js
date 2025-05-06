function calculateAverage() {
    var filipino = document.getElementById('filipino').value;
    var english = document.getElementById('english').value;
    var science = document.getElementById('science').value;

    var average = (filipino * 1 + english * 1 + science * 1) / 3;

    var rating = "";

    if (average >= 94) {
        rating = "Excellent";
    } else if (average >= 87) {
        rating = "Above Satisfactory";
    } else if (average >= 80) {
        rating = "Satisfactory";
    } else if (average >= 75) {
        rating = "Needs Improvement";
    } else {
        rating = "Poor";
    }

    alert("Average: " + average.toFixed(2) +  " Rating: " + rating);
}
