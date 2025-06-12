var cards = document.getElementsByClassName("card");
let flippedCards = [];
for (var i = 0; i < cards.length; i++) {
    //Flip a card when it clicked
    cards[i].addEventListener("click", function () {
        this.classList.add("flipped");
        flippedCards.push(this);
        //Allow only 2 cards to be flipped
        if (flippedCards.length === 2) {
            let text1 = flippedCards[0].querySelector(".card-back").textContent;
            let text2 = flippedCards[1].querySelector(".card-back").textContent;
            //Check if the 2 cards match
            //If not matched, flip it back
            if (text1 !== text2) {
                setTimeout(function () {
                    flippedCards[0].classList.remove("flipped");
                    flippedCards[1].classList.remove("flipped");
                    flippedCards = [];
                }, 800);
            }
            //If matched, keep it
            else {
                flippedCards = [];

                //Show a "game clear" message
                if (document.querySelectorAll(".card.flipped").length === cards.length) {
                    setTimeout(function () {
                        alert("GAME CLEAR!");
                    }, 500);
                }
            }
        }})
};

