// $(document).ready(function () {
//     let quantity = parseInt($("#giatri").val());

//     // nút -
//     $("#nuttru").click(function () {
//       if (quantity > 1) {
//         quantity--;
//         $("#giatri").val(quantity);
//       }
//     });

//     // nút +
//     $("#nutcong").click(function () {
//       quantity++;
//       $("#giatri").val(quantity);
//     });
//   });

$(document).ready(function () {
  var giasanpham = 15490000; //giá lap top là 15tr
  var soluong = 1; // số lượng của sản phẩm

  function capnhatgiatien() { //tạo 1 function để có thể dễ dàng setting và thao tác
    var tonggia = soluong * giasanpham; // logic tính tổng giá sản phẩm
    var tongiatienformat = tonggia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }); // đổi phương thức hiển thị giá tiền thành số thập phân theo mệnh giá tiền Việt Nam
    $("#tonggia").text(tongiatienformat); // xuất tổng giá ra màn hình
    $('.chotgia').text(tongiatienformat); // xuất tổng giá ra màn hình
  }

  $('#nutcong').click(function (e) { //khi bắt đầu ấn nút cộng
    e.preventDefault();
    soluong++ // số lượng sẽ được +1
    $('#giatri').text(soluong); //xuất giá trị số lượng sản phẩm
    $('#giatri').val(soluong); // cập nhật value số lượng sản phẩm trong input +- số lượng
    $('.giatritong').text(soluong); //xuất giá trị số lượng sản phẩm
    capnhatgiatien(); //thực hiện lệnh function capnhatgiatien như đã khai báo ở trên
  });

  $('#nuttru').click(function (e) { //khi bắt đầu ấn nút trừ
    e.preventDefault();
    if (soluong > 1) { // kiểm tra nếu số lượng bằng 1 thì sẽ thực hiện lệnh
      soluong--; //thực hiện trừ 1 giá trị
      $('#giatri').text(soluong); //xuất giá trị số lượng sản phẩm
      $('#giatri').val(soluong); // cập nhật value số lượng sản phẩm trong input +- số lượng
      $('.giatritong').text(soluong);//xuất giá trị số lượng sản phẩm
      capnhatgiatien(); //thực hiện lệnh function capnhatgiatien như đã khai báo ở trên
    }
  });
});