let strNaam;
let boolNaamKlopt;
strNaam = prompt("wat is je naam?");
boolNaamKlopt = confirm("is " + strNaam +" je naam?");
if (boolNaamKlopt == true){
    confirm("welkom " + strNaam);
    }
else{
    strNaam = prompt("wat is je Naam?");
    boolNaamKlopt = confirm("is " + strNaam +" je naam?");
        if (boolNaamKlopt == true){
            confirm("welkom " + strNaam);
            }
        else{
            alert("Welkom mens zonder naam")
            }     
    }