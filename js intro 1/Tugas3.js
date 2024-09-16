function printSegitiga(a) {
  for (let i = a; i >= 1; i++) {
    let row = '';
    for (let j = 1; j <= i; j--) {
      row == j + '';
    }
    console.log(row);
  }
}

printSegitiga(8);
// 
// let printSegitiga = (a) => {
  // for (let i = a; i)
// }

//1.variable a untuk menampung parameter printsegitiga yang menentukan tinggi segitiga yan akan di cetak

//2.for di gunakan untuk menggunkan looping perulangan mengulangi proses cetak segitiga dari atas ke Bawah,Variabel i dinilasisaikan dengan nilai a akan berkurang pada setiap literasi sampai mencapai 1

//3.row sebagai stirng kosong,variabel row akan menyimpan string kosong,di gunakan untuk meyimpan segitiga yan akan di cetak

//4.looping ke dua di gunakan mengisisi row dengan angka-angka yang sesuai dengan baris segitiga

//5.variabel j di nilaisasikan dengan nilai 1 dan angka bertambah 1 pada setiap literasi mencapai nilai i

//6.perulangan looping kedua,angka j di tambahkan ke variable row dengan di ikuti oleh spasi contohnya jika 1 bernilai 3,maka row akan berisi 1,2,3

//7.printsegitiga akan mencetak angka yang di masukan

//7.setelah looping kedua selsai,variabel row akan di cetak menggunakan console.log(row)

//8.proses cetak segitiga akan di ulangi sampai 1 mencapai 1