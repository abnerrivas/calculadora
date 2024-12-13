function calculate() {
    try {
        const result = eval(document.calcu.text.value);
        document.calcu.text.value = result;
    } catch (error) {
        document.calcu.text.value = 'Error';
    }
}


//funcion de borrador
function del() {
    const currentValue = document.calcu.text.value;
    document.calcu.text.value = currentValue.slice(0, -1);
}

//funcionalidad para reiniciar
document.querySelector('.reset').addEventListener('click', function () {
    document.calcu.text.value = '';
});

//funcion para resultado
document.querySelector('.igual').addEventListener('click', function () {
    calculate();
});
