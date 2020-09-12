$.getJSON("https://api.chucknorris.io/jokes/random",function (data) {
    document.querySelector('h2').textContent = data.value;
  }
);


$('button').click(function (e) { 
  e.preventDefault();
  $.getJSON("https://api.chucknorris.io/jokes/random",function (data) {
    document.querySelector('h2').textContent = data.value;
  }
  );
});