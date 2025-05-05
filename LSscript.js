let intervalId;
let ratePerSecond = 0;
let totalEarned = 0;

const salaryTypeEl   = document.getElementById('salaryType');
const amountEl       = document.getElementById('salaryAmount');
const daysEl         = document.getElementById('daysPerMonth');
const hoursEl        = document.getElementById('hoursPerDay');
const startBtn       = document.getElementById('startBtn');
const stopBtn        = document.getElementById('stopBtn');
const rateDisplay    = document.getElementById('rateDisplay');
const totalDisplay   = document.getElementById('totalDisplay');

function calculateRate() {
  const type   = salaryTypeEl.value;
  const amount = parseFloat(amountEl.value);
  const days   = parseFloat(daysEl.value);
  const hours  = parseFloat(hoursEl.value);

  if (!amount || !days || !hours) {
    alert('All fields must be greater than zero.');
    return false;
  }

  if (type === 'hourly') {
    ratePerSecond = amount / 3600;
  } else {
    const totalSec = days * hours * 3600;
    ratePerSecond = amount / totalSec;
  }

  rateDisplay.textContent = `Rate: $${ratePerSecond.toFixed(6)}/sec`;
  totalEarned = 0;
  totalDisplay.textContent = `$${totalEarned.toFixed(2)}`;
  return true;
}

startBtn.addEventListener('click', () => {
  if (!calculateRate()) return;

  startBtn.disabled = true;
  stopBtn.disabled  = false;

  intervalId = setInterval(() => {
    totalEarned += ratePerSecond;
    totalDisplay.textContent = `$${totalEarned.toFixed(2)}`;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled  = true;
});
