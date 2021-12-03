function calculate(){
    var toan = document.getElementById("math").value;
var van = document.getElementById("literature").value;
var anh = document.getElementById("english").value;
var hoa = document.getElementById("chemistry").value;

toan = Number(toan);
van = Number(van);
anh = Number(anh);
hoa = Number(hoa);


// diemtrb
// tinh diem
var tienCoThe = toan * 0.6;
var tienPhaiTra = (van*(1 + anh))/ hoa;
var alertTag = document.getElementById("result")
var alertTag2 = document.getElementById("result2")

alertTag.innerHTML = ""
alertTag2.innerHTML = ""
// tro toi cai tag -> lay tag
// document.getElementById("result").textContent = "GPA: " + diemTb.toFixed(2);

// document.getElementById("result").style.display = "block";
// document.getElementById("diemthi").textContent = "Diem khoi A: " + diemThi.toFixed(2);
// document.getElementById("diemthi").style.display = "block";

// tạo thẻ p
var tienCT = document.createElement("p")
tienCT.textContent = "Số tiền có thể trả: " + tienCoThe.toFixed(2);


var tienPT = document.createElement("p")
tienPT.textContent = "Số tiền phải trả: " + tienPhaiTra.toFixed(2);



alertTag.appendChild(tienCT);
alertTag.appendChild(tienPT)

if ( tienCoThe > tienPhaiTra) {
    document.getElementById("result2").textContent = "Chúc mừng bạn đủ điều kiện vay vốn"
} else{
    document.getElementById("result2").textContent = "Rất tiếc bạn không đủ điều kiện vay vốn"
    document.getElementById("result2").style.backgroundColor = "#f8dae9";
    document.getElementById("result2").style.borderStyle = "none";


}

if (toan < 0 || van < 0 || anh < 0 || hoa < 0){
    alert("NHẬP SỐ LỚN HƠN 0 IHHH")
    document.getElementById("math").value = "";
     document.getElementById("literature").value = "";
    document.getElementById("english").value = "";
   document.getElementById("chemistry").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("result2").style.display = "none";
    return;
}

document.getElementById("result").style.display = "block"
document.getElementById("result2").style.display = "block";


}

function reset(){
   document.getElementById("math").value = "";
     document.getElementById("literature").value = "";
    document.getElementById("english").value = "";
   document.getElementById("chemistry").value = "";
   
    // document.getElementById("diemthi").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("result2").style.display = "none";


}