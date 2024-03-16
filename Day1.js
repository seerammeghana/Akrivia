//DAY-1 Assignment : TypeScript Fundamentals
//Objective: The objective of this assignment is to reinforce your
// understanding of TypeScript fundamentals including basic types,
// functions, interfaces, and classes.
//Basic Types
var n = 18;
console.log(n);
var s = "Meghana";
console.log(s);
var b = true;
console.log(b);
var arrofnum = [24, 9, 22];
console.log(arrofnum);
var tupleofele = ["Divya", 15];
console.log(tupleofele);
var daysofaweek;
(function (daysofaweek) {
    daysofaweek[daysofaweek["Sunday"] = 0] = "Sunday";
    daysofaweek[daysofaweek["Monday"] = 1] = "Monday";
    daysofaweek[daysofaweek["Tuesday"] = 2] = "Tuesday";
    daysofaweek[daysofaweek["Wednesday"] = 3] = "Wednesday";
    daysofaweek[daysofaweek["Thursday"] = 4] = "Thursday";
    daysofaweek[daysofaweek["Friday"] = 5] = "Friday";
    daysofaweek[daysofaweek["Saturday"] = 6] = "Saturday";
})(daysofaweek || (daysofaweek = {}));
console.log(daysofaweek.Sunday);
//Functions
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(15, 35));
function capitalize(lo) {
    return lo.charAt(0).toUpperCase() + lo.slice(1);
}
console.log(capitalize("Hello Meghana"));
var user = {
    Name: "Meghana",
    Age: 21,
    Email: "seerammeghana90@gmail.com"
};
console.log(user);
//Classes
var Car = /** @class */ (function () {
    function Car(Make, Model, Year) {
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
    }
    Car.prototype.DisplayInfo = function () {
        return "CAR INFORMATION: " + this.Make + " " + this.Model + " " + this.Year;
    };
    return Car;
}());
var c = new Car("AUDI", "Q7", 2023);
console.log(c.DisplayInfo());
//Generics
function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray(["Meghana", "Divya", 18, 15]));
