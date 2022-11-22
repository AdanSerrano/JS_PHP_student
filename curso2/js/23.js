const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta ');
        break;
    case 'bitcoin':
        console.log('pagaste con bitcoin ');
        break;
    case 'cheque':
        console.log('pagaste con cheque ');
        break;
    default:
        console.log( 'aun no haz pagado' );
        break;
}