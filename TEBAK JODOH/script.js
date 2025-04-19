function tebakJodoh() {
  const tanggal = parseInt(document.getElementById('tanggal').value);
  const bulan = parseInt(document.getElementById('bulan').value);
  const hasil = document.getElementById('hasil');

  const namaJodoh = [
    "Raka", "Salsa", "Dimas", "Putri", "Andi", "Bella", "Iqbal", "Dewi",
    "Rizky", "Citra", "Bayu", "Ayu", "Naufal", "Rani", "Joko", "Nia",
    "Reza", "Lia", "Fajar", "Sari", "Ilham", "Mira", "Fahri", "Intan",
    "Yoga", "Dina", "Ardi", "Vina", "Bima", "Tari", "Bagus"
  ];

  if (!tanggal || !bulan || tanggal > 31 || bulan > 12) {
    hasil.innerText = "Masukkan tanggal dan bulan yang valid!";
    return;
  }

  const index = (tanggal * bulan) % namaJodoh.length;
  hasil.innerText = "Nama jodoh kamu adalah: " + namaJodoh[index];
}
