// Very simple function

// playCards
// cookDinner
// finishmathHomework

function callFriend(friendsName = "Bakyt") {
    console.log(friendsName);
    console.log('Pick up the phone');
    console.log('Type in the number' + friendsName);
    console.log('Press call');
    console.log('Wait for the answer');
}

// callFriend("Bakyt");
// callFriend("Akjol");
// callFriend("Seitek");
// callFriend("");

function calculateRectArea(a, b) {
    console.log(a * b);
}

// calsulateRectArea(5, 10);
// calsulateRectArea(10, 11);
// calsulateRectArea(1, 0);

function calculateCylinderVolume(r, h) {
    return 3.14 * r * r * h;
}

var smallGlassVol = calculateCylinderVolume(3, 4);
var bottleVol = calculateCylinderVolume(3, 10);

// console.log(smallGlassVol);
// console.log(bottleVol);

// alert();
// confirm();
// prompt();

// document.write ("Hello");
// document.write("World!");
// document.write("<h1>Bye world!</h1>");
// document.write("<p>Goodbye world!</p>");

// function countdown(number) {
//     for (let i = number; i > 0; i--) {
//         document.write(i + " ")
//     }
//     document.write("<br>");
// }
// countdown(5);
// countdown(15);
// countdown(prompt("Enter the number!", 100));

// var number = Math.random();
// document.write(number * 100);

function randomColor(text) {
    var red = Math.random() * 255;
    var blue = Math.random() * 255;
    var green = Math.random() * 255;

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}
function colorfulText(text, color) {
    document.write('<h1 style="color: ' + color + ';">' + text + '</h1>');
}

var color = randomColor(); //red
colorfulText("Hello world!", color);
colorfulText("Bye world!", color);
colorfulText("Hi world!", color);
