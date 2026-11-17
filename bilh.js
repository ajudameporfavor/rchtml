let n = Number(prompt("idade"));
let c = (prompt("cartão"));
if (n <= 12 ){
    alert("4€");
}
else if (n >= 13 && n <= 64 && c == "s"){
    alert("6€");
}
else if (n >= 13 && n <= 64 && c == "n"){
    alert("8€");
}
else if (n >= 65){
    alert("5€");
}