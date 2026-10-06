$(function () {
  function validDate(s) {
    var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(s);
    if (!m) return false;
    var mo = +m[1], d = +m[3], y = +m[4];
    if (mo < 1 || mo > 12) return false;
    if (y >= new Date().getFullYear()) return false;
    var days = new Date(y, mo, 0).getDate();
    return d >= 1 && d <= days;
  }
  $("#btnFinish").on("click", function () {
    $(".err").text("");
    var ok = true;
    function err(id, msg) { $("#e_" + id).text(msg); ok = false; }
    var v = function (id) { return $.trim($("#" + id).val()); };
    if (!v("name")) err("name", "Không được rỗng");
    if (!$("input[name=sex]:checked").length) err("sex", "Phải chọn giới tính");
    if (!v("email")) err("email", "Không được rỗng");
    else if (!/^[^@\s.]+(\.[^@\s.]+)?@[^@\s.]+(\.[^@\s.]+)+$/.test(v("email"))) err("email", "Email không hợp lệ");
    if (!v("birthday")) err("birthday", "Không được rỗng");
    else if (!validDate(v("birthday"))) err("birthday", "Ngày sinh không hợp lệ");
    if (!v("street")) err("street", "Không được rỗng");
    if (!v("city")) err("city", "Không được rỗng");
    if (!$("#region").val()) err("region", "Phải chọn vùng");
    if (!v("zip")) err("zip", "Không được rỗng");
    else if (!/^\d{5}$/.test(v("zip"))) err("zip", "Phải đúng 5 số");
    if (ok) alert("Dữ liệu hợp lệ!");
  });
  $("#btnClear").on("click", function () {
    $("#frm")[0].reset();
    $(".err").text("");
  });
});
