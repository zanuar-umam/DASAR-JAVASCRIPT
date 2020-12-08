let tinggi = 1.7 //DALAM METER
let berat = 90 //DALAM KG

var BMI = (berat / (tinggi**2) );


console.log ("===================================");
console.log ("Tinggi badan Rhodey   = 170 cm");
console.log ("Berat badan Rhodey    = 90 kg");
console.log ("==== STATUS BERAT BADAN RHODEY ====");



if (BMI < 18.5){
    console.log ("Kekurangan berat badan");
}
else if (BMI >= 18.5 && BMI <= 24.9){
    console.log ("Normal (ideal)");
}
else if (BMI >= 25.0 && BMI <= 29.9){
    console.log ("Kelebihan Berat Badan");
}else {
    console.log ("Kegemukan (Obesitas)");
}

console.log ("===================================");