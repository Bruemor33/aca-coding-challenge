(function() {

    // Create request listener
    var reqListener = function () {
        // parse json class reports
        var data = JSON.parse(this.responseText);
        // set defaults
        var grades = [];

        if (data['ClassA']) {
            for (var i = 0; i < data['ClassA'].length; i++) {
                grades.push(data['ClassA'][i].Grade);
            }
            var aAverage = average(grades);
            console.log('Class A: ' + aAverage);
        }
        if (data['ClassB']) {
            for (var i = 0; i < data['ClassB'].length; i++) {
                grades.push(data['ClassB'][i].Grade);
            }
            var bAverage = average(grades);
            console.log('Class B: ' + bAverage);
        }
        if (data['ClassC']) {
            for (var i = 0; i < data['ClassC'].length; i++) {
                grades.push(data['ClassC'][i].Grade);
            }
            var cAverage = average(grades);
            console.log('Class C: ' + cAverage);
        }
    }

    // Create average function
    var average = function (grades) {
        var total = 0;
        for (var i = 0; i < grades.length; i++) {
            total += grades[i];
        }
        var avg = total / grades.length;
        return avg;
    }

    var oReq = new XMLHttpRequest();

    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "report.json");
    oReq.send();

})();




