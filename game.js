var player1health = 100;
var player2health = 100;
var player1Name = "Isaac";
var player2Name = "Hussein";
var currentHP = 100;
var currentDamage = 0;
var progressbar1 = document.getElementById("p1");
var progressbar2 = document.getElementById("p2");
var gameIsRunning = false;
var currentplayer = player1Name;

document.getElementById("l1").innerHTML = player1Name+" health bar :";
document.getElementById("l2").innerHTML = player2Name+" health bar :";

function punch()
{
    currentDamage = Math.floor(Math.random()*6+1);
    window.alert("You attacked with punch and did "+currentDamage+" damage");
    switchTurn(currentplayer);
}

function kick()
{
 if (Math.floor(Math.random()*100+1)<=33)
 {
     switchTurn(currentplayer);
 }
 else
 {
    currentDamage = Math.floor(Math.random()*11+5);
    window.alert("You attacked with kick and did "+currentDamage+" damage");
    switchTurn(currentplayer);
 }

}

function headbutt()
{
    if (Math.floor(Math.random()*100+1)<=66)
 {
     switchTurn(currentplayer);
 }
 else
 {
    currentDamage = Math.floor(Math.random()*11+10);
    window.alert("You attacked with headbutt and did "+currentDamage+" damage!, aize avarwan");
    switchTurn(currentplayer);
 }
}

function switchTurn(player)
{
    if (player == player1Name)
    {
    currentHP = player2health;
    currentplayer = player2Name;
    currentHP = currentHP - currentDamage;
    player2health = player2health - currentDamage;
    }
    else
    {
        currentHP = player1health;
        currentplayer = player1Name;
        currentHP = currentHP - currentDamage;
        player1health = player1health - currentDamage;
    }
    document.getElementById("turn").innerHTML="Its "+currentplayer+" turn";
    progressbar1.value = player1health;
    progressbar2.value = player2health;
    if (player1health <= 0 )
    {
    window.alert(player2Name+" has won the match!");
    window.location.href = "https://www.youtube.com/watch?v=JAEDQwMtf4o";
    }
    if (player2health <= 0 )
    {
    window.alert(player1Name+" has won the match!");
    window.location.href = "https://www.youtube.com/watch?v=JAEDQwMtf4o";
    }
    
    
}






