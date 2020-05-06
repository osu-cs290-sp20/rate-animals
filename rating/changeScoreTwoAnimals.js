

//some pseudocode for the moment because the animal database isn't actually implemented yet.
//if winner - 1, then animal one wins, else animal 2 wins.
module.exports = function(firstID,firstScore,secondID,secondScore,winner){
    console.log("changeScoreTwoAnimals");
    
    var k = 30; //constant that affects how much the score changes by
    var probabilitySecond = (1.0/(1.0+Math.pow(10,(firstScore-secondScore)/400))); //probability of winning of player 2
    var probabilityFirst = (1.0/(1.0+Math.pow(10,(secondScore-firstScore)/400))); //probablility of winning of player 1
    if(winner===1){
        firstScore = (firstScore + k*(1-probabilityFirst)).fixed(1);
        secondScore = (secondScore + k*(0-probabilitySecond)).fixed(1);
    }else{
        firstScore = (firstScore + k*(0-probabilityFirst)).fixed(1);
        secondScore = (secondScore + k*(1-probabilitySecond)).fixed(1);
    }
    console.log("New score 1:"+firstScore);
    console.log("New score 2:"+secondScore);

};