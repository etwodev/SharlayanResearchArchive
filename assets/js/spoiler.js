document.addEventListener("DOMContentLoaded", function() {
  // Check if the page contains spoilers and if the user hasn't already dismissed the spoiler
  if (document.getElementById('spoiler-overlay')) {
    const overlay = document.getElementById('spoiler-overlay');
    const okButton = document.getElementById('spoiler-ok-btn');

    // Show the overlay with a fade-in effect
    overlay.classList.add('show');

    // Add event listener to the "OK" button to remove the overlay and unblur the content
    okButton.addEventListener('click', function() {
      overlay.classList.remove('show');
      document.getElementById('content').style.filter = 'none';
    });
  } else {
    document.getElementById('content').style.filter = 'none';
  }
});
