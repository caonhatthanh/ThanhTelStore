$(document).ready(function () {
    $('.fadeychd').hide(); //ẩn class
    $('#hoadon').change(function (e) { //khi checkbox mang id hoadon có sự thay đổi
        e.preventDefault();
        if ($(this).is(':checked')) { // kiểm tra ở ngay chỗ vừa thay đổi xem check box đã được check chưa
            $('.fadeychd').fadeIn(250); // nếu đã check thì sẽ xổ tùy chọn VAT xuống
        } else {
            $('.fadeychd').fadeOut(205); //nếu chưa check,hoặc bỏ check thì sẽ đóng lại
        }
    });
});