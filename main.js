setInterval(function () {
    fetch("http://localhost/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("deteksi").innerHTML = res.Ada_Pergerakan;

      });
  }, 1000);