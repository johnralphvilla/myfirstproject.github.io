let x ,y , operation , total
x = parseInt(prompt("Enter your Number"));
y = parseInt(prompt("Enter your Number"));

operation =prompt("Enter operation ( +, -, *, /)");
if (operation === "+") {
    total = x + y;

}
else if (operation === "-") {
    total = x - y;

}
else if (operation === "*") {
    total = x * y;
}
else if (operation === "/") {
    total = x / y;

}
else {
    total = "Invalid operation:";
}
document.write( x + " " + operation + " " + y + "=" + total);