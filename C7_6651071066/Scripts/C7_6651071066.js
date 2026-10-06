$(function () {
  $("#linkForm").on("submit", function (e) {
    e.preventDefault();
    var link = $.trim($("#linkInput").val());
    if (link === "") { alert("Vui lòng nhập đường link!"); return; }
    if (!/^https?:\/\//i.test(link)) link = "http://" + link;
    if (confirm("Bạn có muốn chuyển đến " + link + " không?")) {
      window.location.href = link;
    }
  });
});
