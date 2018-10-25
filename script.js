class Player {
    constructor(name, HP, basicAttack, basicDefense, level, experiencePoints) {
        this.name = name;
        this.HP = HP;
        this.basicAttack = basicAttack;
        this.basicDefense = basicDefense;
        this.level = level;
        this.experiencePoints = experiencePoints;
    };
};

let intro = document.getElementById("intro");
let start = document.getElementById("createCharacter");
let giocatore = document.getElementById("giocatore");
let enemyInfo = document.getElementById("enemy");
let shop = document.getElementById("shop");

let statsList = document.getElementById("statsList");
let statsName = document.getElementById("statsName");
let statsHP = document.getElementById("statsHP");
let statsWeapon = document.getElementById("weapon");
let statsDur = document.getElementById("durability");
let statsAtt = document.getElementById("attack");
let statsDef = document.getElementById("defense");
let statsExp = document.getElementById("experience");
let statsLvl = document.getElementById("level");
intro.removeChild(shop);

function makeCharacter() {

    let inputName = document.getElementById("playerName");
    inputName = inputName.value;

    let characterClass = document.querySelector('input[name = "characterClass"]:checked').value;

    if (inputName == '' || characterClass == 0) {
        alert("Please enter a name and select a class.");
    } else {
        console.log(characterClass);
        characterClass = Number(characterClass);
        switch (characterClass) {
            case 1:
                thePlayer = new Player("Duelist " + inputName, 400, 25, 5, 1, 0);
                console.log(thePlayer)
                break;
            case 2:
                thePlayer = new Player("Knight " + inputName, 500, 15, 15, 1, 0);
                console.log(thePlayer)
                break;
            case 3:
                thePlayer = new Player("Guardian " + inputName, 600, 5, 25, 1, 0);
                console.log(thePlayer)
                break;
        };

    }

    console.log(thePlayer);

    while (intro.hasChildNodes()) {
        intro.removeChild(intro.firstChild);
    };
    intro.appendChild(shop);

    statsList.style.listStyleType = "none";
    statsName.innerHTML = "<b>Name:</b> " + thePlayer.name;
    statsHP.innerHTML = "<b>HP:</b> " + thePlayer.HP;
    statsWeapon.innerHTML = "<b>Weapon:</b> ";
    statsDur.innerHTML = "<b>Durability:</b> ";
    statsAtt.innerHTML = "<b>Attack:</b> " + thePlayer.basicAttack;
    statsDef.innerHTML = "<b>Defense:</b> " + thePlayer.basicDefense;
    statsExp.innerHTML = "<b>Exp points:</b> " + thePlayer.experiencePoints;
    statsLvl.innerHTML = "<b>Level:</b> " + thePlayer.level;
    enemyInfo.style.visibility = "visible";
    giocatore.style.visibility = "visible";
    makeEnemy()
}

start.addEventListener("click", makeCharacter);


function makeEnemy() {

    class Npc {
        constructor(name, HP, basicAttack, basicDefense, level) {
            this.name = name;
            this.HP = HP;
            this.basicAttack = basicAttack;
            this.basicDefense = basicDefense;
            this.level = level;
        };
    };

    let enemyArray = [
        new Npc("Bandit", 250, 10, 10, 3),
        new Npc("Skeleton", 200, 15, 5, 3),
        new Npc("Slime", 300, 5, 15, 3)
    ];
    let randomEnemy = Math.floor(Math.random() * enemyArray.length);
    
    let enemy = enemyArray[randomEnemy];
    
    enemyStats = document.getElementById("enemyStats");
    enemyName = document.getElementById("enemyName");
    enemyHP = document.getElementById("enemyHP");
    enemyAtt = document.getElementById("enemyAtt");
    enemyDef = document.getElementById("enemyDef");
    enemyLvl = document.getElementById("enemyLvl");

    enemyStats.style.listStyleType = "none";
    enemyName.innerHTML = "<b>Name: </b> " + enemy.name;
    enemyHP.innerHTML = "<b>HP: </b> " + enemy.HP;
    enemyAtt.innerHTML = "<b>Atttack: </b> " + enemy.basicAttack;
    enemyDef.innerHTML = "<b>Defense: </b> " + enemy.basicDefense;
    enemyLvl.innerHTML = "<b>Level: </b> " + enemy.level;

};



class Weapon {
    constructor(name, attack, minLevel, durability) {
        this.name = name;
        this.attack = attack;
        this.minLevel = minLevel;
        this.durability = durability;
    };
};

let weaponArray = [
    new Weapon("Rusty sword", 15, 2, 10),
    new Weapon("Wood staff", 13, 3, 20),
    new Weapon("Iron mace", 20, 5, 30),
    new Weapon("OK sword", 27, 6, 25),
    new Weapon("Great sword", 35, 8, 35),
    new Weapon("Best sword", 40, 10, 40),
];


