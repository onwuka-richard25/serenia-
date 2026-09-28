const tourDialogId = "tour-request-modal";
let tourDialog = document.getElementById(tourDialogId);

if (!tourDialog) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<dialog
  id="tour-request-modal"
  class="rounded-xl shadow-box p-0 max-w-4xl w-full backdrop:bg-black/40 backdrop:backdrop-blur-sm border-0">

  <div class="p-6 md:p-8 bg-white max-h-[90vh] overflow-y-auto rounded-xl">
    <div class="flex justify-between items-center pb-4 mb-6 ">
      <h2 class="">Request tour</h2>
      <form method="dialog">
        <button type="submit" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
      </form>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div class="calendar-card bg-white p-6 sm:p-8 shadow-box">
          <div class="mb-8 flex items-center justify-between">
            <button type="button" data-calendar-prev aria-label="Previous month" class="text-2xl text-gray-400 hover:text-gray-600 transition-colors px-2">&lsaquo;</button>
            <h3 data-calendar-title class="text-[18px] font-bold text-gray-800"></h3>
            <button type="button" data-calendar-next aria-label="Next month" class="text-2xl text-gray-400 hover:text-gray-600 transition-colors px-2">&rsaquo;</button>
          </div>
          <div class="mb-5 grid grid-cols-7 text-center">
            <span class="text-[11px] font-bold tracking-wider text-gray-300">MON</span>
            <span class="text-[11px] font-bold tracking-wider text-gray-300">TUE</span>
            <span class="text-[11px] font-bold tracking-wider text-gray-300">WED</span>
            <span class="text-[11px] font-bold tracking-wider text-gray-300">THU</span>
            <span class="text-[11px] font-bold tracking-wider text-gray-300">FRI</span>
            <span class="text-[11px] font-bold tracking-wider text-gray-300">SAT</span>
            <span class="text-[11px] font-bold tracking-wider text-gray-300">SUN</span>
          </div>
          <div data-calendar-days class="grid grid-cols-7 gap-y-3 justify-items-center"></div>
        </div>
        <div class="border border-gray-200 p-4">
          <div class="flex items-center gap-2 mb-3 font-medium text-gray-700">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm font-semibold">Select time</span>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-700 mb-1">Preferred time</label>
            <select class="w-full border border-gray-300 p-2.5 text-sm text-gray-700 focus:ring-1 focus:ring-black outline-none bg-white">
              <option value="">Select time</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
        </div>
      </div>
      <form method="post" class="space-y-4">
        <input type="hidden" name="tour-date" />
        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">Full name</label>
          <input type="text" placeholder="Enter your name" class="w-full border border-gray-300 p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" required />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">Email address</label>
          <input type="email" placeholder="Enter your email" class="w-full border border-gray-300 p-2.5 text-sm focus:ring-1 focus:ring-black outline-none" required />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">Phone number</label>
          <div class="flex border border-gray-300 overflow-hidden focus-within:ring-1 focus-within:ring-black">
            <div class="flex items-center gap-1 bg-gray-50 px-3 border-r border-gray-300 text-sm">
              <span>🇺🇸</span>
              <select class="bg-transparent text-sm focus:outline-none cursor-pointer">
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
            </div>
            <input type="tel" placeholder="Enter your number" class="w-full p-2.5 text-sm outline-none" required />
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">Cluster</label>
          <select class="w-full border border-gray-300 p-2.5 text-sm text-gray-700 focus:ring-1 focus:ring-black outline-none bg-white">
            <option value="">Select cluster</option>
            <option value="A">Cluster A</option>
            <option value="B">Cluster B</option>
          </select>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-gray-700 mb-1">Property type</label>
            <select class="w-full border border-gray-300 p-2.5 text-sm text-gray-700 focus:ring-1 focus:ring-black outline-none bg-white">
              <option value="">Select type</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-700 mb-1">Unit</label>
            <select class="w-full border border-gray-300 p-2.5 text-sm text-gray-700 focus:ring-1 focus:ring-black outline-none bg-white">
              <option value="">Select unit</option>
              <option value="101">101</option>
              <option value="102">102</option>
            </select>
          </div>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-700 mb-1">Note</label>
          <textarea placeholder="Enter message" rows="3" class="w-full border border-gray-300 p-2.5 text-sm focus:ring-1 focus:ring-black outline-none resize-none"></textarea>
        </div>
        <div class="pt-2 flex justify-end">
          <button type="submit" class="bg-[#52593b] text-white px-8 py-2.5 font-medium text-sm hover:bg-[#434930] transition">Submit</button>
        </div>
      </form>
    </div>
  </div>
</dialog>`,
  );
  tourDialog = document.getElementById(tourDialogId);
  document.dispatchEvent(
    new CustomEvent("serenia:calendar-ready", { detail: { root: tourDialog } }),
  );

  const modalStyles = document.createElement("style");
  modalStyles.textContent = `
    dialog#${tourDialogId} { margin: auto; inset: 0; position: fixed; }
    dialog#${tourDialogId}[open] { animation: modal-pop 0.15s ease-out; }
    @keyframes modal-pop {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.append(modalStyles);
}

if (!document.querySelector('[data-tour-fallback]')) {
  const hasTourTrigger = [...document.querySelectorAll("a, button")].some(
    (element) => element.textContent.trim().toLowerCase() === "request tour",
  );

  if (!hasTourTrigger) {
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.dataset.tourFallback = "";
    trigger.textContent = "Request tour";
    trigger.className =
      "fixed bottom-5 right-5 z-40 bg-stone h-10 w-30 rounded-sm font-semibold ring-green-800 transition-all duration-300 ease-in-out hover:bg-stone-200 hover:ring-2 hover:ring-offset-2 focus:ring-2 focus:ring-offset-2";
    document.body.append(trigger);
  }
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("a, button");
  if (!trigger || trigger.textContent.trim().toLowerCase() !== "request tour") return;

  event.preventDefault();
  if (!tourDialog.open) tourDialog.showModal();
});

tourDialog.addEventListener("click", (event) => {
  const bounds = tourDialog.getBoundingClientRect();
  const isOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (isOutside) tourDialog.close();
});