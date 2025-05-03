const calendarDates = document.querySelector('.calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
  '1', '2', '3', '4', '5', '6',
  '7', '8', '9', '10', '11', '12'
];

// Define your events
const events = {
  '5-20-2025': { 
      title: 'Event 1', 
      date: '2023-05-01', 
      description: 'Description for Event 1',
      image: '../../images/events/event1.jpg' // Add the image URL
  },
  '5-9-2025': { 
      title: 'Event 2', 
      date: '2023-05-15', 
      description: 'Description for Event 2',
      image: '../../images/events/event2.jpg' // Add the image URL
  },
  '5-3-2025': { 
      title: 'Special Event', 
      date: '2025-05-03', 
      description: 'Description for the special event on May 3, 2025.',
      image: '../../images/events/event3.jpg' // Add the image URL
  },
  // Add more events as needed
};

function renderCalendar(month, year) {
    calendarDates.innerHTML = '';
    monthYear.textContent = `${year}年 - ${months[month]}月`;
  
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
      const blank = document.createElement('div');
      calendarDates.appendChild(blank);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.textContent = i;

        if (i === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            day.classList.add('current-date');
        }

        const dateString = `${month + 1}-${i}-${year}`;
        if (events[dateString]) {
            day.classList.add('event-date'); // Highlight days with events
            day.dataset.eventKey = dateString; // Store event key
            day.title = events[dateString].title; // Add a tooltip with the event title
        }

        calendarDates.appendChild(day);
    }
}

renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

calendarDates.addEventListener('click', (e) => {
  const dayElement = e.target;
  if (dayElement.textContent !== '' && dayElement.dataset.eventKey) {
      const event = events[dayElement.dataset.eventKey];
      document.querySelector('.s2 h2').textContent = event.title;
      document.querySelector('.s2 h6').textContent = `日期: ${event.date}`;
      document.querySelector('.s2 p').textContent = event.description;
      document.querySelector('.s2-img img').src = event.image; // Update the image
      document.querySelector('.s2-img').style.display = 'block'; // Show image box
  } else {
      // Display "no event" message
      document.querySelector('.s2 h2').textContent = '無活動';
      document.querySelector('.s2 h6').textContent = '';
      document.querySelector('.s2 p').textContent = '該日沒有活動。';
      document.querySelector('.s2-img img').src = ''; // Clear the image
      document.querySelector('.s2-img').style.display = 'none'; // Hide image box
  }
});