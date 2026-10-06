$(function () {
  $(".op").on("click", function () {
    var a = parseFloat($("#a").val()), b = parseFloat($("#b").val()), op = $(this).data("op"), r;
    if (isNaN(a) || isNaN(b)) { $("#result").val("Nhập số!"); return; }
    switch (op) {
      case "+": r = a + b; break;
      case "-": r = a - b; break;
      case "*": r = a * b; break;
      case "/": r = b === 0 ? "Chia cho 0" : a / b; break;
      case "^": r = Math.pow(a, b); break;
    }
    $("#result").val(r);
  });
});
