$(function () {
  $("#btnRemove").on("click", function () {
    $("#colorSelect option:selected").remove();
  });
});
