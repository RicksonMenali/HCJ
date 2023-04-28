var hora = 18
console.log(`São ${hora} horas neste momento`)
if ( hora > 5 && hora < 12 ) {
    console.log('Bom Dia')
} else if ( hora < 18 && hora > 11) {
    console.log('Boa Tarde')
} else if (hora > 17) {
    console.log('Boa Noite')
} else {
    console.log('Boa Madrugada')
}