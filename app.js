var storecurrency = document.querySelectorAll('.currency');
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var alertmes = document.getElementById('alert');

fetch('https://api.frankfurter.app/currencies')
.then((got) => got.json())
.then((give) => dropDown(give))

function dropDown(give){
    let name = Object.entries(give)
    for(var i = 0; i < name.length; i++){
         let create = `<option value="${name[i][0]}">${name[i][0]}</option>`
         storecurrency[0].innerHTML += create
         storecurrency[1].innerHTML += create
    }
}

btn.addEventListener('click', ()=>{
    let addone = storecurrency[0].value;
    let addtwo = storecurrency[1].value;
    let addthree = input.value;
    
    if(addone === addtwo){
       alertmes.style.display = "block"
    }else{
       alertmes.style.display = "none"
       convert(addone,addtwo,addthree)
    }
});

function convert(addone, addtwo, addthree){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${addthree}&from=${addone}&to=${addtwo}`)
    .then(resp => resp.json())
    .then((data) => {
       document.getElementById('result').value = Object.values(data.rates)[0]
    });
}