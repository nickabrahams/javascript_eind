document.querySelector('#box1').style.backgroundColor = "green";
document.querySelector('#box2').style.backgroundColor = '#fc6500';
document.querySelector('#box3').style.backgroundColor = '#F955A0';
document.querySelector('#box4').style.backgroundColor = '#203F83';


window.addEventListener("load", function () {
    console.log("De pagina is geladen!");
});

let leven = {
    "werk": "Keuken",
    "sport": "Sportschool",
    "school": "Nova College",
    "leerjaar_school": 2,
    "opleiding": "Software Developer",
    "hobbys": [
        "Sporten ",
        "Eten ",
        "Afspreken met vrienden ",
    ]
};


document.querySelector('#box2').addEventListener('click', function() {
    document.querySelector('#box2').innerHTML = "<h1>" + leven.school + "</h1>" + leven.opleiding +"<br>"+ "leerjaar: " + leven.leerjaar_school ;
    document.querySelector('#box2').style.backgroundColor = '#f7f700';
});

document.querySelector('#box1').addEventListener('click', function() {
    document.querySelector('#box1').innerHTML =
        "<h1>" + "Ik" + "</h1>" +
        "Werk: " + leven.werk + "<br>" +
        "Sport: "+ leven.sport + "<br>" +
        "Hobbys: " + leven.hobbys ;
    document.querySelector('#box1').style.backgroundColor = '#a5f8ff';
});








