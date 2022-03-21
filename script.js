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
}

