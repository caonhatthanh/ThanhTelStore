$(document).ready(function () {
    $('.fadeychd').hide();
    $('#hoadon').change(function () {
        if ($(this).is(':checked')) {
            $('.fadeychd').fadeIn(250);
        } else {
            $('.fadeychd').fadeOut(205);
        }
    });
});


$(document).ready(function () {
    $('.diadiem').hide();
    $('#ghtn').click(function () {
        if ($('.diadiem').is(':visible')) {
            $('.diadiem').fadeOut();
        } else {
            $('.diadiem').fadeIn();
        }
    });
});

$(document).ready(function () {
    $('.diachifade').hide();
    $('#ghtn').click(function () {
        if ($('.diachifade').is(':visible')) {
            $('.diachifade').fadeOut();
        } else {
            $('.diachifade').fadeIn();
        }
    });
});
