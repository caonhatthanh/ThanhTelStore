$(document).ready(function () {
    let quantity = parseInt($("#giatri").val());

    // nút -
    $("#nuttru").click(function () {
      if (quantity > 1) {
        quantity--;
        $("#giatri").val(quantity);
      }
    });

    // nút +
    $("#nutcong").click(function () {
      quantity++;
      $("#giatri").val(quantity);
    });
  });