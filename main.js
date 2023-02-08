const dishes = [
    { name: 'Cordonbleu' },
    { name: 'Curry' },
    { name: 'Fleischkaese' },
    { name: 'Gerstensuppe' },
    { name: 'Banh Mi' },
    { name: 'Stroganoff' },
    { name: 'Spareribs' },
    { name: 'Lasagne' },
    { name: 'Gulasch' },
    { name: 'Flammkuchen' },
    { name: 'Wurst Käse Salat' },
    { name: 'Aelpermagronen' },
    { name: 'Gehacktes mit Hoernli' },
    { name: 'Beef Tapa' },
    { name: 'Pizza' },
    { name: 'Frikadellen' },
    { name: 'Musaka' },
    { name: 'Kartoffel-Gratin' },
    { name: 'Chicken Wings' },
    { name: 'Corned Beef' },
    { name: 'Pesto' },
    { name: 'Steak' },
    { name: 'Bratwurst / Cervelat' },
    { name: 'One Pot Pasta' },
    { name: 'Schnitzel' },
    { name: 'Eggs & Chäs' },
    { name: 'Bolognese' },
    { name: 'Carbonara' },
];

let weekMenu = [];
let days = 7;


//function menuMaker() {
for (i = 0; i < days; i++) {

    let menu = dishes[Math.round(Math.random() * dishes.length)];
    
        weekMenu.push(menu);
    
}
//}

//menuMaker();
console.log(weekMenu);



