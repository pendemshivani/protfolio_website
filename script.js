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
    modalDescription.innerHTML = `
      <p>React.js + Node.js based tool to design dynamic and styled email templates with custom preview and saving options.</p>
    `;
    modalImages.innerHTML = `<img src="images/email_builder.png" alt="Email Builder Screenshot" />`;
  }

  if (projectId === "placement-portal") {
    modalTitle.innerHTML = "<h2>Placement & Career Portal</h2>";
    modalDescription.innerHTML = `
      <p>MERN stack portal for managing student placement and company interaction including resume uploads and notifications.</p>
    `;
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

window.onclick = function(e) {
  if (e.target === modal) closeModal();
};
