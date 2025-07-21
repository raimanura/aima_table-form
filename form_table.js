// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-data");
  const tabelBody = document.getElementById("tabel-body");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const umur = document.getElementById("umur").value;

    // Buat baris baru
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nama}</td>
      <td>${email}</td>
      <td>${umur}</td>
    `;

    // Tambahkan ke tabel
    tabelBody.appendChild(row);

    // Reset form
    form.reset();
  });
});
