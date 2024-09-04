var list = ["anshul", "kans", "kirmada"];
var Name = prompt("What's your name?")
name = Name.toLocaleLowerCase()
if (list.includes(name)){
    alert("Welcome "+Name)
}
else{ alert("Sorry, But you arn't invited")}