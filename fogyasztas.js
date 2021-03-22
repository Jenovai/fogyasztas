let km = prompt("Hány kilométert mentél?")
let szam = new RegExp('\\d')

while(szam.test(km) == false || km < 1000){
    km = prompt("Hány kilométert mentél?")

}