const characters = [
    {name: "character1", health: 50},
    {name: "character2", health: 70},
    {name: "character3", health: 90}
];

const opponent = {
    name: "opponent1",
    health: 100
};
while (true) {
    for (let ch of characters) {
        console.log(ch);
    }
    console.log(opponent);
    const response = prompt("Pick character 1, 2, or 3: ");
    if (response === null) {
        break;
    }
    if (response === '1') {
        characters[0].health = characters[0].health - 5;
        opponent.health = opponent.health - 5;
    } else if (response === '2') {
        characters[1].health = characters[1].health - 5;
        opponent.health = opponent.health - 5;
    } else if (response === '3') {
        characters[2].health = characters[2].health - 5;
        opponent.health = opponent.health - 5;
    }
}