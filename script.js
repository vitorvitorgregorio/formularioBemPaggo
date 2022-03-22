const types = {
    'react': 0,
    'angular': 0,
    'vue': 0
    
}

function add(type) {
    types[type]++
    showValue(types[type]);
    document.getElementById(type).innerHTML = types[type];
}

function sub(type) {
    if(types[type] <= 0){
        alert('o numero de adesivos não pode ser menor que 0')
    }
    else {
    types[type]--
    showValue(types[type]);
    document.getElementById(type).innerHTML = types[type];
    }
}

// mostrar a soma de valores
function showValue() {
    value = Object.values(types).reduce((prevValue,nextValue) => prevValue + nextValue)
    document.getElementById("result").innerHTML = value;
    document.getElementById("result2").innerHTML = value;

}
// mostrar e ocultar a página de sucesso
function show(){
    const element = document.getElementById("form2")
    element.classList.toggle('show')
    const form = document.getElementById("form")
    form.classList.toggle('hide')
}


