document.querySelector('#box1').style.backgroundColor = "green";
document.querySelector('#box2').style.backgroundColor = '#fc6500';
document.querySelector('#box3').style.backgroundColor = '#F955A0';
document.querySelector('#box4').style.backgroundColor = '#203F83';


window.addEventListener("load", function () {
    console.log("De pagina is geladen!");
});


document.querySelector('#box1').addEventListener('click', function() {
    document.querySelector('#box2').innerText = "text ";
    document.querySelector('#box2').style.backgroundColor = '#f7f700';
});

document.querySelector('#box2').addEventListener('click', function() {
    document.querySelector('#box1').innerText = "text";
    document.querySelector('#box1').style.backgroundColor = '#a5f8ff';
});








