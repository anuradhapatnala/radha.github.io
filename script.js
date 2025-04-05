/* script.js remains unchanged */
document.getElementById('feedbackForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate feedback handling
  document.getElementById('responseMessage').textContent = `Thanks, ${name}! Your feedback has been received.`;
  this.reset();
});
