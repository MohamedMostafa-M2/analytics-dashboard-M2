document.addEventListener("DOMContentLoaded", function () {

  function runProgressBars() {

    var x = 0;
    var green = setInterval(function () {
      x++;
      document.getElementById("m2-progress-green").innerHTML = (
        `<div style="background-color: green; width: ${x}%; height: 40px;border-radius: 25px;text-align: center;color: #fff; line-height:2;">
          ${x}%
        </div>`
      );
      if (x === 25) clearInterval(green);
    }, 50);

    var o = 0;
    var orange = setInterval(function () {
      o++;
      document.getElementById("m2-progress-orange").innerHTML = (
        `<div style="background-color: orange; width: ${o}%; height: 40px;border-radius: 25px;text-align: center;color: #fff; line-height:2;">
          ${o}%
        </div>`
      );
      if (o === 50) clearInterval(orange);
    }, 50);

    var r = 0;
    var red = setInterval(function () {
      r++;
      document.getElementById("m2-progress-red").innerHTML = (
        `<div style="background-color: #dc143cff; width: ${r}%; height: 40px;border-radius: 25px;text-align: center;color: #fff; line-height:2;">
          ${r}%
        </div>`
      );
      if (r === 75) clearInterval(red);
    }, 50);

  }

  // تشغيل أول مرة
  runProgressBars();

  // تكرار كل 10 ثواني = 10000ms
  setInterval(runProgressBars, 10000);

});
