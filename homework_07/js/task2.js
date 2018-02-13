(function(){
    
var prize = 0;
var min, max, i, possible, maxposssible, again, contie, user, checkpoint;
checkpoint = true;
totop = true;
min = 0;
var nRandom = Math.floor(Math.random() * (max - min)) + min;
user = confirm("Do you want to play a game?");
if (user == false) {
    console.log("You did not become a millionaire");
} else {
    while (totop) {
        possible = 10;
        maxposssible = 10;
        max = 5;
        checkpoint = true;
        nRandom = Math.floor(Math.random() * (max - min)) + min;
        //console.log(nRandom);
        for (i = 1; i <= 3; i++) {
            var userN = prompt("Enter a number from " + min + " to " + max + "\n" + "Attempts left : " + (4 - i) + "\n" + "Total prize : " + Math.floor(prize) + "$ \n" + "Possible prize on current attempt: " + Math.floor(possible) + "$");
            if (userN == nRandom && !isNaN(parseFloat(userN)) && isFinite(userN)) {
                prize += Math.floor(possible);
                contie = confirm("Do you want to continue a game?");
                if (contie == true) {
                    max *= 2;
                    nRandom = Math.floor(Math.random() * (max - min)) + min;
                    //console.log(nRandom);
                    possible = maxposssible;
                    possible *= 3;
                    maxposssible *= 3;
                    possible = Math.floor(possible);
                    i = 0;
                } else {
                    possible = 10;
                    console.log("Thank you for a game. Your prize is: " + Math.floor(prize) + "$");
                    again = confirm("Do you want to play a game again?");
                    if (again == true) {
                        prize = 0;
                        i = 0;
                        max = 5;
                    } else {
                        checkpoint = false;
                        totop = false;
                        break;
                    }
                }
            } else {
                possible = possible / 2;
                continue;
            }
        }
        while (checkpoint) {
            console.log("Thank you for a game. Your prize is: " + Math.floor(prize) + "$");
            again = confirm("Do you want to play a game again?");
            if (again == true) {
                checkpoint = false;
                prize = 0;
                i = 0;
                possible = 10;
            } else {
                checkpoint = false;
                totop = false;
            }
        }
    }
}
})();