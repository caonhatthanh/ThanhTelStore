$(document).ready(function () {
    let quantity = parseInt($('#quantity').val());

    // nút -
    $('#decrease').click(function () {
        if (quantity > 1) {
            quantity--;
            $('#quantity').val(quantity);
        }
    });

    // nút +
    $('#increase').click(function () {
        quantity++;
        $('#quantity').val(quantity);
    });
});