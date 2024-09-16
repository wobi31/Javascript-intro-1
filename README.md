# JavaScript-intro-1:

#Tugas 1: 
## Deskripsi 

Program ini akan menampilkan informasi tentang seorang individu:

##Rincian Kode:
Variabel: 
Kode mendefinisikan beberapa variabel untuk menyimpan informasi tentang seseorang, termasuk nama, usia, hobi, status perkawinan, dan minatnya.
Daftar Sekolah: 
Susunan schoolList menyimpan informasi mengenai pendididkan yang telah di selesaikan,nama sekolah, tahun penerimaan, tahun kelulusan, dan jurusan jika berlaku.
pendidikan individu ditampilkan dalam bentuk array objek.

Keluaran: Program ini digunakan console.log()untuk mencetak string yang diformat yang menggabungkan informasi dari variabel dan schoolListarray.

## Cara Menjalankan Program

1. Pastikan Anda memiliki Node.js terinstal.
2. Buka terminal atau command prompt di direktori tempat file JavaScript berada.
3. Jalankan perintah `node Tugas1.js`.

## Output

Program akan menampilkan informasi tentang individu dalam format teks ke konsol.

## Contoh Output
Dia bernama Wobi Nurdiansyah Dia berumur 20 Tahun, Ia mempunyai hobbi Naik Gunung,jogging,.Status ia belum menikah Dia memiliki sedikit Skill di pendakian Gunung di tingkaat Advenct.
Ia tertarik dengan Coding Sangat tertarik

#Tugas 2:
## Deskripsi 

program ini adalah kalkulator sederhana untuk menghitung nilai rata-rata siswa berdasarkan skor mereka dalam berbagai mata pelajaran.

## Fitur

- Menghitung nilai rata-rata dari beberapa mata pelajaran.
- Menentukan kategori nilai (A, B, C,dst.) berdasarkan skor rata-rata.

## Ringkasan Kode

nilaiSiswa  di tampung di let dari  beberapa mata pelajaran.
Fungsi rataRata menerima objek nilaisiswa sebagai parameter dan melakukan langkah-langkah berikut:
Mengambil semua nilai dari objek nilaisiswa dan menyimpannya dalam array olahNilai.
Menghitung total nilai dengan menggunakan metode reduce.
Menghitung rata-rata nilai dengan membagi total nilai dengan jumlah mata pelajaran.
Mengembalikan hasil rata-rata nilai.

## Output
Ouput akan mencetak hasil dari perhitungan rata-rata yang sudah di hitung

#Tugas3:
## Deskripsi 
program membuat segitiga terbalik dengan ukuran yang di inputkan

##Rincian kode
Kode ini mendefinisikan fungsi bernama printSegitigayang menerima satu argumen yaitu a.Fungsi ini digunakan untuk mencetak segitiga dengan jumlah baris yang ditentukan oleh a.
Di dalam fungsinya, terdapat dua loop bersarang. Loop luar ulangi dari ahingga 1,sementara loop dalam ulangi dari 1 hingga i(nilai iterasi loop luar).
Di setiap iterasi loop dalam,kode akan menambahkan nilai jke variabel rowdan mencetaknya ke konsol. Setelah loop dalam selesai,
kode akan mencetak baris rowke konsol.Kode ini kemudian memanggil fungsi printSegitigadengan argumentasi 8. Ini berarti fungsinya akan mencetak segitiga dengan 8 baris.
Secara sederhana, kode ini menggunakan loop bersarang untuk mencetak segitiga. Loop luar mengontrol jumlah baris,
sementara loop dalam mengontrol jumlah karakter di setiap baris. Karakter yang dicetak di setiap baris adalah angka dari 1 hingga i.

#Tugas4:
## Deskripsi 
program tugas ke 4 mengelola dan menampilkan data pengguna dengan menampilkan data yang ingin kita ambil

##Rincian kode
let data menyimpan objek data yang berisi informasi pengguna seperti id, name, username, email, address, phone, dan website.
let newData = [];: Membuat array kosong newData untuk menyimpan data pengguna baru.
newData.push Menambahkan objek pengguna baru ke dalam array hanpir sama dengan data pertama

##Output
console.log(newData);: Menampilkan seluruh data pengguna yang ada di newData.
console.log(newData[0].name);: Menampilkan nama pengguna pertama di newData.
console.log(newData[0].address.city);: Menampilkan kota dari alamat pengguna pertama di newData.
