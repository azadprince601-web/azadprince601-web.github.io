// set year
document.getElementById('year').innerText = new Date().getFullYear();

// contact: open mail client
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    alert('Please fill all fields.');
    return;
  }

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailto = `mailto:azadprince601@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
}
