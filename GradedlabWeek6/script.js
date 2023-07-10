function greet() {
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var today = new Date();
    var currentYear = today.getFullYear();
  
    if (isNaN(year)) {
      alert("Please enter a valid number for the year.");
      return;
    }
  
    var age = currentYear - year;
  
    var greeting = document.getElementById("greeting");
    greeting.innerHTML = "Hello " + name + ", you are " + age + " years old!";
    
  }
  