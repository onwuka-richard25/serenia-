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

function initializeCalendar(calendarCard) {
  if (calendarCard.dataset.calendarReady) return;
  calendarCard.dataset.calendarReady = "true";

  const monthTitle = calendarCard.querySelector("[data-calendar-title]");
  const daysGrid = calendarCard.querySelector("[data-calendar-days]");
  const previousButton = calendarCard.querySelector("[data-calendar-prev]");
  const nextButton = calendarCard.querySelector("[data-calendar-next]");
  if (!monthTitle || !daysGrid || !previousButton || !nextButton) return;

  let currentDate = new Date();
  let selectedDate = null;

  function renderCalendar() {
    daysGrid.replaceChildren();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthTitle.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const startingDay = (firstDay.getDay() + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();
    const previousMonthDays = new Date(year, month, 0).getDate();

    for (let offset = startingDay; offset > 0; offset--) {
      const dayElement = document.createElement("span");
      dayElement.className =
        "flex h-11 w-11 items-center justify-center font-semibold text-gray-300";
      dayElement.textContent = previousMonthDays - offset + 1;
      daysGrid.appendChild(dayElement);
    }

    for (let day = 1; day <= totalDays; day++) {
      const dayElement = document.createElement("button");
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      dayElement.type = "button";
      dayElement.setAttribute("aria-pressed", String(Boolean(isSelected)));
      dayElement.className = isSelected
        ? "flex h-11 w-11 items-center justify-center bg-[#f5a623] font-bold text-white shadow-lg shadow-[#f5a623]/40"
        : "flex h-11 w-11 items-center justify-center font-semibold text-gray-700 transition-colors hover:bg-gray-100";
      dayElement.textContent = day;
      dayElement.addEventListener("click", () => {
        selectedDate = new Date(year, month, day);
        const dateField = calendarCard
          .closest("dialog")
          ?.querySelector('[name="tour-date"]');
        if (dateField) {
          dateField.value = [
            year,
            String(month + 1).padStart(2, "0"),
            String(day).padStart(2, "0"),
          ].join("-");
        }
        renderCalendar();
      });
      daysGrid.appendChild(dayElement);
    }

    const remainingCells = 42 - daysGrid.children.length;
    for (let day = 1; day <= remainingCells; day++) {
      const dayElement = document.createElement("span");
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
}

function initializeCalendars(root = document) {
  if (root.matches?.(".calendar-card")) initializeCalendar(root);
  root.querySelectorAll?.(".calendar-card").forEach(initializeCalendar);
}

document.addEventListener("serenia:calendar-ready", (event) => {
  initializeCalendars(event.detail?.root ?? document);
});

initializeCalendars();
