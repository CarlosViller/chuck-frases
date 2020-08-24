$.getJSON("https://api.chucknorris.io/jokes/random",function (data) {
    document.querySelector('h2').textContent = data.value;
  }
);