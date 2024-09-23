$(document).ready(function () {
  $('#thanhtoanBtn').click(function (e) {
    e.preventDefault();

    // Lấy thông tin sản phẩm
    var soluong = $('#giatri').val(); // Số lượng sản phẩm
    var khuyenmai = $('input[name="khuyenmai"]:checked').next('label').text(); // Khuyến mãi đã chọn
    var mausac = $('.chonmau').val(); // Màu sắc sản phẩm

    // Lấy thông tin cá nhân
    var hovaten = $('#hovaten').val(); // Họ và tên
    var gioitinh = $('input[name="gioitinh"]:checked').next('label').text(); // Lấy giá trị giới tính đã chọn
    var sdt = $('#sdt').val(); // Số điện thoại
    var email = $('#email').val(); // Email
    var diachi = $('#diachinha').val(); // Địa chỉ

    // Lấy thông tin phương thức nhận hàng
    var hinhthucnhanhang = $('input[name="hinhthuc"]:checked').next('label').text(); // Hình thức nhận hàng

    // Lấy thông tin phương thức thanh toán
    var thanhtoan = $('input[name="thanhtoan"]:checked').next('label').text(); // Phương thức thanh toán

    // Lấy thông tin hóa đơn VAT (nếu có)
    var hoadonVAT = $('#hoadon').is(':checked'); // Kiểm tra người dùng có yêu cầu hóa đơn VAT không
    var tencongty = $('#tencty').val(); // Tên công ty
    var msthue = $('#msthue').val(); // Mã số thuế
    var diachicty = $('#diachi').val(); // Địa chỉ công ty

    // In ra console log các giá trị
    console.log('--- Thông tin đặt hàng ---');
    console.log('Số lượng sản phẩm:', soluong);
    console.log('Khuyến mãi:', khuyenmai);
    console.log('Màu sắc sản phẩm:', mausac);
    console.log('--- Thông tin cá nhân ---');
    console.log('Họ và tên:', hovaten);
    console.log('Giới tính:', gioitinh);
    console.log('Số điện thoại:', sdt);
    console.log('Email:', email);
    console.log('Địa chỉ nhận hàng:', diachi);
    console.log('--- Hình thức nhận hàng ---');
    console.log('Hình thức nhận hàng:', hinhthucnhanhang);
    console.log('--- Phương thức thanh toán ---');
    console.log('Phương thức thanh toán:', thanhtoan);

    if (hoadonVAT) {
      console.log('--- Hóa đơn VAT ---');
      console.log('Tên công ty:', tencongty);
      console.log('Mã số thuế:', msthue);
      console.log('Địa chỉ công ty:', diachicty);
    } else {
      console.log('Không yêu cầu hóa đơn VAT');
    }

    console.log('--- Kết thúc ---');
  });
});
