function openNav() {
    document.getElementById("mySidenav").style.width = "250px"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//Bmi
function calbmi(height, weight) {
    var heightcm = parseFloat(document.getElementById("userheight").value)
    var height = heightcm / 100
    var weight = parseFloat(document.getElementById("userweight").value)

    const resultbox = document.getElementById("resultbox")
    resultbox.style.display = "block";

    var resultbmi = weight / (height ** 2);
    document.getElementById("result").innerHTML = "คุณได้ดัชนีมวลกาย : " + resultbmi.toFixed(2)
    console.log(height + " " + weight)

    if (isNaN(heightcm) || isNaN(weight)) {
        document.getElementById("resultbox").style.display = "block";
        document.getElementById("result").innerHTML = "⚠️ กรุณากรอกตัวเลขให้ครบก่อนนะครับ ⚠️";
        document.getElementById("level").innerHTML = "";
        document.getElementById("tip").innerHTML = "";
        return;
    }

    if (resultbmi > 30) {
        document.getElementById("level").innerHTML = "อ้วนมาก / โรคอ้วนระดับ 3 😱"
        document.getElementById("tip").innerHTML = "🚨 ควรเริ่มปรับพฤติกรรมทันที" + "<br>" + "เพื่อหลีกเลี่ยงโรคเรื้อรัง เช่น เบาหวาน ความดัน ไขมันสูง" + "<br>" + "แนะนำพบแพทย์หรือนักโภชนาการเพื่อคำแนะนำเฉพาะครับ"
    }
    else if (resultbmi >= 25 && resultbmi <= 29.90) {
        document.getElementById("level").innerHTML = "อ้วน / โรคอ้วนระดับ 2	😨"
        document.getElementById("tip").innerHTML = "⚠️ คุณอยู่ในช่วงน้ำหนักเกินที่ส่งผลต่อสุขภาพแล้ว" + "<br>" + "ควรควบคุมอาหาร (ลดของมัน ของทอด)" + "<br>" + "และออกกำลังกายสม่ำเสมอเพื่อฟื้นฟูร่างกายครับ"
    }
    else if (resultbmi >= 23 && resultbmi <= 24.90) {
        document.getElementById("level").innerHTML = "ท้วม / โรคอ้วนระดับ 1	👌"
        document.getElementById("tip").innerHTML = "🍱 คุณเริ่มมีน้ำหนักเกินเล็กน้อย" + "<br>" + "ควรลดอาหารไขมันสูง น้ำตาล" + "<br>" + "และหันมาออกกำลังกายเพิ่มอีกนิดเพื่อป้องกันโรคในอนาคต"
    }
    else if (resultbmi >= 18.50 && resultbmi <= 22.90) {
        document.getElementById("level").innerHTML = "ปกติ (สุขภาพดี) ✅"
        document.getElementById("tip").innerHTML = "🧘‍♀️ เยี่ยมเลย! คุณอยู่ในเกณฑ์ปกติแล้ว" + "<br>" + "รักษาน้ำหนักและออกกำลังกายสม่ำเสมอเพื่อสุขภาพที่ดีระยะยาวครับ"
    }
    else {
        document.getElementById("level").innerHTML = "น้ำหนักน้อย / ผอม	😔"
        document.getElementById("tip").innerHTML = "🥬 คุณมีน้ำหนักน้อยกว่ามาตรฐาน" + "<br>" + "แนะนำให้รับประทานอาหารให้เพียงพอและครบ 5 หมู่"
    }
}

//todolist

const inputBox = document.getElementById("inputbox");
const Listcontainer = document.getElementById("todolist");

function addtask() {
    if (inputBox.value === '') {
        alert("เขียนอะไรสักอย่าง")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

Listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata()
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata() {
    localStorage.setItem("data", Listcontainer.innerHTML);
}


function showtask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();


//temperature
// ฟาเรนไฮต์ = (เซสเซียส * 1.8) + 32
//  เซสเซียส = (ฟาเรนไฮต์ - 32) / 1.8
function ctof(){
    let celsius = document.getElementById("inputcelsius").value

    if(celsius === ''){
        alert("ถ้าจะแปลงเป็นฟาเรนไฮต์กรุณากรอกองศาเซลเซียส !⚠️")
    }
    else{
        resultfarenheit = (celsius * 1.8) + 32
        document.getElementById("resultfarenheit").innerHTML = "แปลงจาก : "+celsius+" °C"+"<br>"+"ได้เป็น : "+resultfarenheit.toFixed(2) +" °F" 
    }


}

function ftoc(){
    let fahrenheit = document.getElementById("inputfahrenheit").value

    if(fahrenheit === ''){
        alert("ถ้าจะแปลงเป็นองสาเซลเซียสกรุณากรอกองศาฟาเรนไฮต์ !⚠️")
    }
    else{
        resultcelsius = (fahrenheit - 32) / 1.8
        document.getElementById("resultcelsius").innerHTML = "แปลงจาก : "+fahrenheit+" °F"+"<br>"+"ได้เป็น : "+ resultcelsius.toFixed(2) +" °C"
    }
}

//Qrcode generator

//https://api.qrserver.com/v1/create-qr-code/?size=200x200&data= 

function Qrcodegen() {
    const text = document.getElementById("text").value.trim();
    var qrcodeimg = document.getElementById("qrcodeimg");

    if (text === "") {
        alert("Please enter a text or URL to generate a QR code.");
        return;
    }
    const apiurl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    qrcodeimg.src = apiurl;

}


