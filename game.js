var player1 = 100;
var player2 = 100;
var player1Name = "Isaac";
var player2Name = "Hussein";
var currentHP = 100;
var currentDamage = 0;
var miss = false;

function punch()
{
    currentDamage = Math.floor(Math.random()*6+1);
    window.alert("You attacked with punch and did "+currentDamage+" damage");
}

function kick()
{
 if (Math.floor(Math.random()*100+1)<=33)
 {
     miss = true
     return
 }
 else
 {
    currentDamage = Math.floor(Math.random()*11+5);
    window.alert("You attacked with kick and did "+currentDamage+" damage");  
 }

}

function switchTurn(player)
{
    if (player == player1Name)
    {
    currentHP = player2;
    return player2Name;
    }
    else
    {
        currentHP = player1;

        return player1Name;
    }
}

var gameIsRunning = true;



