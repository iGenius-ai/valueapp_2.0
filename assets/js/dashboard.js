const sidebar = document.getElementById("sidebar");
const toggle = document.getElementById("sidebar-toggle");
const mainWrapper = document.getElementById("main-wrapper");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-width-sm");
  mainWrapper.classList.toggle("main-wrapper-lg");
});

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function showDate() {
  const dateElement = document.getElementById("date");

  function updateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('en-us', { month: 'long' });
    var day = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes()
    var seconds = currentDate.getSeconds();

    var amPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    var formattedDate = 'Today is ' + '<b>' + month + ' ' + day + ', ' + year + '</b>' + '. ' + hours + ':' + addLeadingZero(minutes) + ':' + addLeadingZero(seconds) + ' ' + amPM;
    dateElement.innerHTML = formattedDate; 
  }

  updateTime();
  setInterval(updateTime, 1000);
}