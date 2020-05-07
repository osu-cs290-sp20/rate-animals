

//some pseudocode for the moment because the animal database isn't actually implemented yet.
//if winner - 1, then animal one wins, else animal 2 wins.

var minimumRank = 100;
var maximumRank = 1600;
module.exports = function(firstID,firstScore,secondID,secondScore,winner){
    console.log("changeScoreTwoAnimals");
    
    var k = 30; //constant that affects how much the score changes by
    var probabilitySecond = (1.0/(1.0+Math.pow(10,(firstScore-secondScore)/400))); //probability of winning of player 2
    var probabilityFirst = (1.0/(1.0+Math.pow(10,(secondScore-firstScore)/400))); //probablility of winning of player 1
    if(winner===1){
        firstScore = (firstScore + k*(1-probabilityFirst)).toFixed(1);
        secondScore = (secondScore + k*(0-probabilitySecond)).toFixed(1);
    }else{
        firstScore = (firstScore + k*(0-probabilityFirst)).toFixed(1);
        secondScore = (secondScore + k*(1-probabilitySecond)).toFixed(1);
    }
    if (firstScore < minimumRank){
        firstScore = minimumRank;
    }
    if(firstScore > maximumRank){
        firstScore = maximumRank;
    }
    if(secondScore < minimumRank){
        secondScore = minimumRank;
    }
    if(secondScore > maximumRank){
        secondScore = maximumRank;
    }
};