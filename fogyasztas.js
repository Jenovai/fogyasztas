let km = prompt("Hány kilométert mentél?")
let szam = new RegExp('\\d')
while(szam.test(km) == false || km < 1000){
    km = prompt("Hány kilométert mentél?")
}


let tankolas = prompt("Hány litert tankoltás?")
while (tankolas > 1 && tankolas < 50){
    tankolas = prompt("Hány litert tankoltás?")
}