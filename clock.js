let namE = prompt("İsminizi Giriniz:")
let myName = document.querySelector("#myName")

if(namE == ""){
    alert("Hatalı giriş yaptınız,lütfen bilgi giriniz!");
} else{
    myName.innerHTML=`${namE}`
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDate();
    let z = today.getMonth();
    let b = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    z = checkTime(z);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s  + "<br>" + d + ":" + z + ":" + b;
    setTimeout(startTime, 1000);
    }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }

