let panjang = 20.5
let lebar =30
let harga = 1500000
let ppn = 0.15

var LuasTanah = (panjang * lebar)
var TotalHarga = (LuasTanah*harga)

console.log ("==================================================");
console.log ("Luas Tanah yang dipesan Pak Arman        = " + LuasTanah +" m2");
console.log ("Harga tanah per meter                    = Rp." + harga);
console.log ("PPN Pembelian                            = 15%")
console.log ("==================================================");
console.log ("Harga tanah yang dipesan Pak Arman       = Rp." + TotalHarga);
console.log ("Total Pajak                              = Rp." + (TotalHarga* 0.15));
console.log ("====== TOTAL HARGA TANAH YANG HARUS DIBAYAR ======");
console.log ("Total Harga                              = Rp." + (TotalHarga + (TotalHarga * ppn)));
console.log ("==================================================");
