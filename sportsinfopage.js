var playerImages = ["http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg"];

var player1 = document.getElementById("item1");
var player2 = document.getElementById("item2");
var player3 = document.getElementById("item3");

var prev = document.getElementById("prev");
var next = document.getElementById("next");

currentPlayer = 3;

prev.addEventListener("click", function () {
    if (currentPlayer == 0) currentPlayer = 6;
    else currentPlayer -= 3;
    player1.setAttribute("src", playerImages[currentPlayer]);
    player2.setAttribute("src", playerImages[currentPlayer + 1]);
    player3.setAttribute("src", playerImages[currentPlayer + 2]);
});

next.addEventListener("click", function () {
    currentPlayer += 3;
    if (currentPlayer == 9) currentPlayer = 0;
    player1.setAttribute("src", playerImages[currentPlayer]);
    player2.setAttribute("src", playerImages[currentPlayer + 1]);
    player3.setAttribute("src", playerImages[currentPlayer + 2]);
});