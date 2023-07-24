// Get the current date and format it
function formatDate(date) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  };
  const formattedDate = date.toLocaleDateString('en-US', options);

  // Extract day, month, year, and weekday
  const [weekday, dateStr] = formattedDate.split(',');
  const [month, day, year] = dateStr.trim().split(' ');

  // Create the custom formatted date string
  const customFormattedDate = `${month} ${day} ${year} | ${weekday}`;
  console.log(customFormattedDate);

  return customFormattedDate;
}

// Update the date placeholder with the formatted date
function updateDateDisplay() {
  const dateElement = document.getElementById('datePlaceholder');
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  dateElement.textContent = formattedDate;
}

// Call the function on page load
updateDateDisplay();
