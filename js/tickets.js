const $inputCantidad = document.getElementById('cantidad');
const $selectedCategoria = document.getElementById('categoria');
const $calcularCuenta = document.getElementById('calcularCuenta');
const $totalPago = document.getElementById('pago');

// le agrego un evento click al boton de resumen
$calcularCuenta.addEventListener('click',() => {
    const cantidad = parseFloat($inputCantidad.value);
    const categoria = $selectedCategoria.value;
    let total;

    if(categoria === 'estudiante'){
        total = (200 * cantidad) - (200 * cantidad * 0.80)
    } else if (categoria === 'trainee'){
        total = (200 * cantidad) - (200 * cantidad * 0.50)
    } else {
        total = (200 * cantidad) - (200 * cantidad * 0.15)
    }
    $totalPago.textContent = total
})

// le agrego un evento al boton reset para limpiar los inputs y el span