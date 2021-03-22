let km = prompt("Hány kilométert mentél?")
let szam = new RegExp('\\d')
while(szam.test(km) == false || km > 1000){
    km = prompt("Hány kilométert mentél?")
}

let tankolas = prompt("Hány litert tankoltás?")
while (tankolas < 1 && tankolas > 50){
    tankolas = prompt("Hány litert tankoltás?")
}

let fogyasztasa_oszto = km / 100
let fogyasztasa_liter = tankolas / fogyasztasa_oszto

let autok = {
    evjarat : 2000,
    automarka : "Citroen",
    fogyaszt : function (){
        console.log(autok.evjarat, "évjáratú", autok.automarka, "fogyasztasa",fogyasztasa_liter.toFixed(2) ,"liter/100km" )
    },
    garazs : function(utca){
        console.log(autok.automarka, "garázsa", utca, "utcában található");
    }
}
autok.fogyaszt()

if(tankolas > 20){
    console.log("Nem sajnálod az üzemanyagot!")
}
if (km > 700){
    console.log("Nem kellene ennyit utaznod!");
}
else{
    console.log("Csak így tovább!");
}

autok.garazs("Kossuth")

for (let i in autok){
    console.log(autok[i]);
}
