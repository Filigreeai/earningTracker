document.getElementById('trackerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const salaryType = document.getElementById('salaryType').value;
  const salaryAmount = parseFloat(document.getElementById('salaryAmount').value);
  const daysPerMonth = parseFloat(document.getElementById('daysPerMonth').value);
  const hoursPerDay = parseFloat(document.getElementById('hoursPerDay').value);

  if (!salaryAmount || !daysPerMonth || !hoursPerDay) {
    alert('所有字段必须大于零。');
    return;
  }

  const params = new URLSearchParams({
    salaryType,
    salaryAmount,
    daysPerMonth,
    hoursPerDay
  });

  window.location.href = `result.html?${params.toString()}`;
});
