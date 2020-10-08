let cantidad_agua = 0
// Mientras presione el botón A
input.onButtonPressed(Button.A, function () {
    // inicializa  la variable en o cantidad_agua=0
    cantidad_agua = 0
    // Ciclo repetitivo para 5 años
    for (let index = 0; index < 1825; index++) {
        // Establece la cantidad de agua 
        cantidad_agua += randint(0, 6)
    }
    basic.showString("PD=")
    // Muestra el promedio diario de lluvia
    basic.showNumber(cantidad_agua / 1825)
})
