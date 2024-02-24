const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

// Idle timer
let idleTime = 0;
const idleInterval = setInterval(timerIncrement, 60000); // 1 minute

function resetIdleTimer() {
    idleTime = 0;
}

window.onload = resetIdleTimer;
document.onmousemove = resetIdleTimer;
document.onkeydown = resetIdleTimer;

function timerIncrement() {
  idleTime = idleTime + 1;

  if (idleTime > 5) { // 5 minutes of inactivity
      logout();
  }
}