//array string
let jurusan = ["RPL", "TKJ"]

//array numerik
let tingkatan_kelas = [10,11,12]

//array objek
let siswa = [
    //objek pertama
    {
        nama: "Yaya",
        jurusan: "RPL"
    },

    //objek kedua
    {
        nama: "Ying",
        jurusan: "TKJ"
    },

    //objek ketiga
    {
        nama: "Gopal",
        jurusan: "RPL"
    }
]

//**************************************************************//
//---mendapatkan jumlah data yang tersimpan pada array---//
//format --> nama_array.length

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

console.log("------------------------------");

//**************************************************************//

//---menambahkan atau memasukkan data pada array---//
//format --> nama_array.push(new data)

let kota = ["Malang", "Surabaya", "Tulungagung"]

console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("----------------------");

//tambah data kota baru
kota.push("Banyuwangi")

console.log("Isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

//--contoh penerapan penambahan data pada array objek
let barang = [
    { nama: "Rinso", harga: 5000 },
    { nama: "Moonlight", harga :4000}
]

console.log("Isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("----------------------");

//tambah data barang baru
barang.push(
    {nama: "Mloto", harga: 1000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);

//**************************************************************//
//---menghapus data pada array---//
//format --> nama_array.splice(index,jumlah data)

kota.splice(2,1)
console.log("Isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

//**************************************************************//

//---Menampilkan data pada array objek---//
//menggunakan fungsi--> map()//

let guru =[
    { nama_depan: "Jack", nama_belakang: "Ma" },
    { nama_depan: "Johny", nama_belakang: "English" },
    { nama_depan: "John", nama_belakang: "Cena" }
]

//menampilkan nama lengkap dari array
guru.map(
    (guru, index) => {
        console.log(guru.nama_depan+ " " + guru.nama_belakang);
    }
)