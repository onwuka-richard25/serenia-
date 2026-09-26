let currentDate = new Date();
let selectedDate = null;

const monthTitle = document.getElementById("monthTitle");
const daysGrid = document.getElementById("daysGrid");
const previousButton = document.getElementById("prevMonth");
const nextButton = document.getElementById("nextMonth");

const monthNames = [
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

function renderCalendar() {
  daysGrid.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  monthTitle.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1);
  let startingDay = firstDay.getDay() - 1;
  if (startingDay === -1) startingDay = 6;

  const totalDays = new Date(year, month + 1, 0).getDate();
  const previousMonthDays = new Date(year, month, 0).getDate();

  for (let offset = startingDay; offset > 0; offset--) {
    const dayElement = document.createElement("div");
    dayElement.className =
      "flex h-11 w-11 items-center justify-center font-semibold text-gray-300";
    dayElement.textContent = previousMonthDays - offset + 1;
    daysGrid.appendChild(dayElement);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayElement = document.createElement("div");
    const isSelected =
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year;

    dayElement.className = isSelected
      ? "flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#f5a623] font-bold text-white shadow-lg shadow-[#f5a623]/40 cursor-pointer"
      : "flex h-11 w-11 items-center justify-center font-semibold text-gray-700 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors";
    dayElement.textContent = day;
    dayElement.addEventListener("click", () => {
      selectedDate = new Date(year, month, day);
      renderCalendar();
    });
    daysGrid.appendChild(dayElement);
  }

  const remainingCells = 42 - daysGrid.children.length;
  for (let day = 1; day <= remainingCells; day++) {
    const dayElement = document.createElement("div");
    dayElement.className =
      "flex h-11 w-11 items-center justify-center font-semibold text-gray-300";
    dayElement.textContent = day;
    daysGrid.appendChild(dayElement);
  }
}

previousButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
