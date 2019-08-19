(function() {

    // Create request listener
    var reqListener = function () {
        // parse json class reports
        var data = JSON.parse(this.responseText);

        if (data['ClassA']) {
            // set className for argument
            var className = 'Class A';

            sortGrades(data['ClassA'], className);
        }
        if (data['ClassB']) {
            // set className for argument
            var className = 'Class b';

            sortGrades(data['ClassB'], className);
        }
        if (data['ClassC']) {
            // set className for argument
            var className = 'Class C';

            sortGrades(data['ClassC'], className);
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

    // Create function used for sorting the grades in each class
    var sortGrades = function (classData, className) {
        
        // Set defaults
        var grades = [];
        var zeroStudents = [];
        var name = 'Student Name';

        // loop through class data to form grades array
        for (var i = 0; i < classData.length; i++) {
            var grade = Math.round(classData[i].Grade);
            grades.push(grade);

            // check for any zero grades, remove from array of grades, and populate zeroStudents if condition is true
            if (grade === 0) {
                grades.pop(grade);
                zeroStudents.push(classData[i][name]);
            }
        }

        // get total students after above conditions met
        var totalStudents = grades.length;

        // get average of grades array and round if needed
        var rawAverage = average(grades);
        var roundedAvg = Math.round(rawAverage);

        console.log(className + ' had an average grade of: ' + roundedAvg);
        console.log(className + ' has ' + totalStudents + ' students used in average!');

        // output conditional for zeroStudents array
        if (zeroStudents.length > 0) {
            for (var i = 0; i < zeroStudents.length; i++) {
                console.log(zeroStudents[i]);
            }
        }
        else {
            console.log('No students got a 0!');
        }
    }

    // invoke new http request
    var oReq = new XMLHttpRequest();

    // call request listener function
    oReq.addEventListener("load", reqListener);

    // state call type and pass project data
    oReq.open("GET", "report.json");

    // send request
    oReq.send();

})();




