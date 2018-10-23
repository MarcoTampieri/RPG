class Player {
    constructor(name, HP, basicAttack, basicDefense, level, experiencePoints) {
        this.name = name;
        this.HP = HP
        this.basicAttack = basicAttack;
        this.basicDefense = basicDefense;
        this.level = level;
        this.experiencePoints = experiencePoints;
    };
};

let start = document.getElementById("start");
let intro = document.getElementById("intro");
let statsList = document.getElementById("statsList");
let statsName = document.getElementById("statsName");
let statsHP = document.getElementById("statsHP");
let statsWeapon = document.getElementById("weapon");
let statsDur = document.getElementById("durability");
let statsAtt = document.getElementById("attack");
let statsDef = document.getElementById("defense");
let statsExp = document.getElementById("experience");
let statsLvl = document.getElementById("level");
intro.removeChild(statsList);

function makeCharacter() {

    let inputName = document.getElementById("playerName");
    inputName = inputName.value;

    let characterClass = document.querySelector('input[name = "characterClass"]:checked').value;

    if (inputName == '' || characterClass == 0) {
        alert("Please enter a name and select a class.");
        console.log(inputName);
        console.log(characterClass);
    } else {
        let player = {}
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
    let form = document.getElementById("playerCreation");
    let h4 = document.getElementById("phaseTitle");

    intro.removeChild(form);
    intro.removeChild(start);
    intro.appendChild(statsList);
    h4.innerText = "Character Info:";
    statsName.innerText = "Name: " + thePlayer.name;
    statsHP.innerText = "HP: " + thePlayer.HP;
    statsAtt.innerText = "Attack: " + thePlayer.basicAttack;
    statsDef.innerText = "Defense: " + thePlayer.basicDefense;
    statsExp.innerText = "Exp points: " + thePlayer.experiencePoints;
    statsLvl.innerText = "Level: " + thePlayer.level;
}

start.addEventListener("click", makeCharacter);


class Weapon {
    constructor(name, attack, minLevel, durability) {
        this.name = name;
        this.attack = attack;
        this.minLevel = minLevel;
        this.durability = durability;
    };
};

let shop = [
    new Weapon("Rusty sword", 15, 2, 10),
    new Weapon("Wood staff", 13, 3, 20),
    new Weapon("Iron mace", 20, 5, 30),
    new Weapon("OK sword", 27, 6, 25),
    new Weapon("Great sword", 35, 8, 35),
    new Weapon("Best sword", 40, 10, 40),
];

class Npc {
    constructor(name, HP, basicAttack, basicDefense, level) {
        this.name = name;
        this.HP = HP;
        this.basicAttack = basicAttack;
        this.basicDefense = basicDefense;
        this.level = level;
    };
};

let enemy = [
    new Npc("Bandit", 250, 10, 10, 3),
    new Npc("Skeleton", 200, 15, 5, 3),
    new Npc("Slime", 300, 5, 15, 3)
];