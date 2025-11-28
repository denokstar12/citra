document.addEventListener("DOMContentLoaded", loadData);

const form = document.getElementById("absensiForm");
const tabel = document.querySelector("#tabelAbsensi tbody");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let status = document.getElementById("status").value;
    let waktu = new Date().toLocaleString();

    let data = { nama, kelas, status, waktu };

    // Simpan ke LocalStorage
    let absensi = JSON.parse(localStorage.getItem("absensiPMR")) || [];
    absensi.push(data);
    localStorage.setItem("absensiPMR", JSON.stringify(absensi));

    form.reset();
    loadData();
});

function loadData() {
    let absensi = JSON.parse(localStorage.getItem("absensiPMR")) || [];
    tabel.innerHTML = "";

    absensi.forEach((item) => {
        let row = `
            <tr>
                <td>${item.nama}</td>
                <td>${item.kelas}</td>
                <td>${item.status}</td>
                <td>${item.waktu}</td>
            </tr>
        `;
        tabel.innerHTML += row;
    });
}
