var currentTable = 1;
var totalTables = 4;

document.getElementById('left-arrow').addEventListener('click', function () {
  if (currentTable > 1) {
    currentTable--;
    updateTable();
  }
  updateArrow();

}

);
document.getElementById('right-arrow').addEventListener('click', function () {
  if (currentTable < totalTables) {
    currentTable++;
    updateTable();


  }
  updateArrow()
});

function updateTable() {
  for (var i = 1; i <= totalTables; i++) {
    var table = document.getElementById('table' + i);
    table.classList.remove('visible');
    table.classList.add('hidden', 'fade-out');
  }
  setTimeout(function () {
    for (var i = 1; i <= totalTables; i++) {
      var table = document.getElementById('table' + i);
      table.classList.remove('fade-out');
    }
  }, 500);

  var current = document.getElementById('table' + currentTable);
  current.classList.remove('hidden');
  current.classList.add('visible', 'fade-in');
  setTimeout(function () {
    current.classList.remove('fade-in');
  }, 500);

  document.getElementById('table-number').textContent = currentTable;
}


updateArrow();



function updateArrow() {
  if (currentTable == 1) {
    document.getElementsByClassName("imgss").item(0).classList.add("imgss-disable");
  }
  else if (currentTable == 4)
    document.getElementsByClassName("imgss").item(1).classList.add("imgss-disable");
  else {
    document.getElementsByClassName("imgss").item(0).classList.remove("imgss-disable");
    document.getElementsByClassName("imgss").item(1).classList.remove("imgss-disable");

  }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
