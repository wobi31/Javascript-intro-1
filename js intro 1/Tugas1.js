const userName = "Wobi Nurdiansyah";
const age = 20;
const hobbi = ["Naik Gunung","jogging",];
const isMarried = false;
const mountanNering = 'Advenct';
const interistingCoding = true;
const schoolList = [
  {
    namasekolah: "Sdn Marengmang",
    yearIn: 2006,
    yearOut: 2014,
  },
  {
    namasekolah: "Smpn 2 Kalijati",
    yearIn: 2014,
    yearOut: 2016,
  },
  {
    namasekolah: "Smk Al-Mufti Purwadadi",
    yearIn: 2017,
    yearOut: 2020,
    major: "Teknik Kendaran Ringan(TKR)",
  },
];


 console.log(`Dia bernama ${userName} Dia berumur ${age} Tahun, Ia mempunyai hobbi ${hobbi}.Status ia ${isMarried ? 'sudah menikah': 'belum menikah'} Dia memiliki sedikit Skill di pendakian Gunung di tingkaat ${mountanNering}.Ia tertarik dengan Coding ${interistingCoding ? 'Sangat tertarik' : 'Tidak sama sekali'} ${schoolList} `)
 
//1.memasukan  data biodata saya seperti nama,umur,hobbi,status,daftar sekolah

//2.schoolist saya membuat data array dengan terbagi menjadi 3 data.
//   -pertama berisi data sekolah Sd
//   -Kedua berisi data sekolah Smp
//   -ketiga berisi data sekolah Smk

//3. pemanggilan script saya menggunakan metode literal dan di bagian status saya menggunakan operator ternaty,Operator ternaty menggunanakn 2 symbol ? dan menggunakn : jika ia mengisi dan menuliskan true maka akan keluar sudah menikah tapi jika menuliskan false maka ia akan mencetak belum menikah

//4.Selesai