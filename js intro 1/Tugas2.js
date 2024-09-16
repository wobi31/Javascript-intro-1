let nilaiSiswa = [
  matematika = 80,
  bahasaIndonesia = 90,
  bahasaInggris = 89,
  ipa = 69,
];

function rataRata(nilaiSiswa) {
  let olahNilai = Object.values(nilaiSiswa);
  let total = olahNilai.reduce((a, b) => a + b, 0);
  let hasilNilai = total / olahNilai.length; 
  return hasilNilai;
} if (hasilNilai >= 90) {
  console.log('nilai A');
} else if (hasilNilai >= 80) {
  console.log('nilai B')
}

console.log(rataRataNilai);
console.log(nilaiSiswa);