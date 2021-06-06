var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100 ;
var playerAttack = 10;
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyAttack, enemyHealth);

var fight = function() {
    //Alert players round is starting
    window.alert("Welcome to Robot Gladiators!");

    //Subtract playerattack from enemy and update enemyhealth
     enemyHealth = enemyHealth - playerAttack;

    //log console message
     console.log(
         playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
     );

     //check enemy's health
     if (enemyHealth <=0) {
         window.alert(enemyName + " has died!")
     }
     else {
         window.alert(enemyName + " still has " + enemyHealth + " health left.");
     }
    //Subtract enemyattack from player and update playerhealth
     playerHealth = playerHealth - enemyAttack;

    //log console message
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
     //check player's health
     if (playerHealth <=0) {
        window.alert(playerName + " has died!")
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
fight();