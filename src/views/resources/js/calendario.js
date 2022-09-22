const date = new Date();
const year = new Date();


const renderCalendar = () => {
  date.setDate(1);
  year.setFullYear(new Date().getFullYear());
  
  // selecciona todos los tags (ahora vacio) del elemento con clase .days
  const monthDays = document.querySelector(".days"); 

  //guarda el último día del mes actual
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  //guarda el ültimo día del mes anterior
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  // como date esta en la linea 6 establecido como 1 esta const vale 1 ahora mismo
  const firstDayIndex = date.getDay()-1;

  //establece el indice con valor del último día del mes
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  // en caso de agosto esto valdría (-26)
  const nextDays = 7 - lastDayIndex ;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  // document.querySelector(".date p").innerHTML = new Date().toDateString();
  document.querySelector(".date p").innerHTML = date.getFullYear();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div onclick="ponEvento(${date.getFullYear()},${date.getMonth()},${i});" class="today">${i}</div>`;
      
    } else {
      //days += `<a href="reserva.php?dia=${i}&mes=${date.getMonth()}&year=${date.getFullYear()}"><div>${i}</div></a>`;
      days += `<div onclick="ponEvento(${date.getFullYear()},${date.getMonth()},${i});" >${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }


  

};// fin renderCalendar

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});



renderCalendar();

function ponEvento(year,mes,dia){
  console.log('evento en today');
  console.log(year);
  console.log(mes);
  console.log(dia);
  const posibleCita = new Date(year,mes,dia);
  };



