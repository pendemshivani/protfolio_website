// ===== Modal for Projects =====
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImages = document.getElementById("modal-images");

function openModal(projectId) {
  modal.style.display = "block";
  modalTitle.innerHTML = "";
  modalDescription.innerHTML = "";
  modalImages.innerHTML = "";

  if (projectId === "email-builder") {
    modalTitle.innerHTML = "<h2>Email Builder</h2>";
    modalDescription.innerHTML = `<p>React.js + Node.js based tool to design dynamic and styled email templates with custom preview and saving options.</p>`;
    modalImages.innerHTML = `<img src="images/email_builder.png" alt="Email Builder Screenshot" />`;
  }

  if (projectId === "placement-portal") {
    modalTitle.innerHTML = "<h2>Placement & Career Portal</h2>";
    modalDescription.innerHTML = `<p>MERN stack portal for managing student placement and company interaction including resume uploads and notifications.</p>`;
    modalImages.innerHTML = `
      <img src="images/interface.png" />
      <img src="images/register.png" />
      <img src="images/student.png" />
      <img src="images/admin.png" />
      <img src="images/compny.png" />
    `;
  }
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target === modal) closeModal();
};

// ===== Scroll Certificates & Projects =====
function scrollCerts(direction) {
  const certs = document.getElementById("certifications-scroll");
  const scrollAmount = 300;
  certs.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth"
  });
}

function scrollProjects(direction) {
  const projects = document.getElementById("projects-scroll");
  const scrollAmount = 300;
  projects.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth"
  });
}

// ===== Open Image in New Tab =====
function openImage(src) {
  const win = window.open(src, '_blank');
  if (win) win.focus();
}

// ===== Dark/Light Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const icon = themeToggle.querySelector('i');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
  });
}

// ===== Scroll to Contact Section =====
const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== Resume Download Button =====
const resumeBtn = document.getElementById('download-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    window.open('./resume.pdf', '_blank');
  });
}

// ===== Contact Form (POST to Backend) =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const form = this;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    fetch('https://protfolio-3fev.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})

      .then((res) => res.json())
      .then((data) => {
        if (data.success || data.message?.includes("sent")) {
          alert(data.message || '✅ Message sent successfully!');
          form.reset();
        } else {
          alert(data.message || '❌ Failed to send message.');
        }
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('❌ An error occurred while sending the message.');
      });
  });
}
