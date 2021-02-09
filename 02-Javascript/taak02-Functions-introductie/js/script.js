function alertbox(){
    alert("Wie dit leest is gek");}
function promptbox(){
    bericht = prompt("Vul hier wat in");
    console.log(bericht);
    }
function confirmbox(){
    confirm1 = confirm("OK of nee");
        if(confirm1 == true){
            console.log("OK");
        }
        else{ if(confirm1 == false)
            console.log("dan niet");
        }
    }

alertbox()
promptbox()
confirmbox()