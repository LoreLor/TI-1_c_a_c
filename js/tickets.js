const $inputCantidad = document.getElementById('cantidad');
const $selectedCategoria = document.getElementById('categoria');
const $calcularCuenta = document.getElementById('calcularCuenta');
const $totalPago = document.getElementById('pago');
const $reset = document.getElementById('borrar');

// le agrego un evento click al boton de resumen
$calcularCuenta.addEventListener('click',() => {
    const cantidad = parseFloat($inputCantidad.value);
    const categoria = $selectedCategoria.value;
    let total;

    if(categoria === 'estudiante'){
        total = (200 * cantidad) - (200 * cantidad * 0.80)
    } else if (categoria === 'trainee'){
        total = (200 * cantidad) - (200 * cantidad * 0.50)
    } else if(categoria === 'junior'){
        total = (200 * cantidad) - (200 * cantidad * 0.15)
    } else {
        swal({
            title: "Error de Ingreso!",
            text: "Ingresa una opcion válida",
            icon: "error",
            button: "OK",
          });
    }
    $totalPago.textContent = total
})

// le agrego un evento al boton reset para limpiar los inputs y el span
$reset.addEventListener('click', ()=>{
    $totalPago.textContent = ""
})