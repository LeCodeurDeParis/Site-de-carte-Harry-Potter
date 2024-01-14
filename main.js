var turnDayInvo = 5



function entierAleatoire(min, max)
{
 return  Math.floor(Math.random() * (max - min + 1)) + min;
}

class carte{
    constructor(name, house, atk, def, spd, swt, hp,id){
        this.name = name
        this.house = house
        this.atk = atk
        this.def = def
        this.spd = spd
        this.swt = swt
        this.hp = hp
        this.id = id
    }
}

let Harry = new carte("Harry Potter", "Gryffondor", 15, 10, 12, 5, 50, 1)
let Hermione = new carte("Hermione Granger", "Gryffondor", 13, 12, 10, 6, 50, 2)
let Ron = new carte("Ron Weasley", "Gryffondor", 13, 7, 12, 7, 40, 3)
let Ginny = new carte("Ginny Weasley","Gryffondor", 16, 8, 8, 5, 50, 4)
let Neuville = new carte("Neuville Londuba"," Gryffondor", 14, 9, 15, 8, 45, 5)
let Dumbledore = new carte("Albus Dumbledore", "Gryffondor", 18, 14, 14, 10, 55, 6)
let McGonagall = new carte("Minerva McGonagall"," Gryffondor", 17, 13, 13, 9, 54, 7)
let Lupin = new carte("Remus Lupin"," Gryffondor", 13, 8, 8, 10, 55, 8)
let Black = new carte("Sirius Black", "Gryffondor", 15, 8, 10, 10, 45, 9)
let Voldemort = new carte("Lord Voldemort", "Serpantard", 20, 15, 15, 10, 55, 10)
let Drago = new carte("Drago Malefoy", "Serpantard", 15, 10, 10, 5, 50, 11)
let Lucius = new carte("Lucius Malefoy", "Serpantard", 16, 8, 8, 8, 45, 12)
let Severus = new carte("Severus Rogue", "Serpantard", 15, 10, 12, 5, 55, 13)
let Dolores = new carte("Dolores Ombrage", "Serpantard", 10, 6, 8, 6, 45, 14)

let collection = [Harry, Hermione, Ron, Ginny, Neuville, Dumbledore, McGonagall, Lupin, Black, Voldemort, Drago, Lucius, Severus, Dolores]
let deck = []
let favori = []

function tirage(){
    if (turnDayInvo > 0){
        var res = entierAleatoire(0, 13)
        deck.push(collection[res])
        resultatTirage.innerHTML = ("Vous avez tiré : ", collection[res].name)
        console.log("Vous avez tiré :", collection[res].name)
        turnDayInvo -= 1
    }
    else if (turnDayInvo == 0){
        console.log("Vous n'avez plus de tirage pour aujourd'hui")
        resultatTirage.innerHTML = "Vous n'avez plus de tirage pour aujourd'hui"
    }
    return console.log(deck), console.log(res)
}
