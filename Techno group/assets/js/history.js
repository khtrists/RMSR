
  function detectMob() {
    return window.innerWidth <= 800;
  }

  if (!detectMob()) {
    var table = document.getElementById("tcs-table");
    var tableWidth = table.offsetWidth;
    var containerWidth = document.querySelector(".table-order-history").offsetWidth;

    if (tableWidth > containerWidth) {
      table.classList.add("table-scroll");
    } else {
      table.classList.remove("table-scroll");
    }
  }

  $(function () {
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    $('#from,#to').datepicker({ format: 'yyyy-mm-dd' }).on('changeDate', function (e) {
        $(this).datepicker('hide');
    });
});