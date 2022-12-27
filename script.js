function inform(){
    alert("나는 alret입니다.")
}

function grade(){
    var kor1 = parseInt(document.getElementById("kor1").innerHTML);
    var kor2 = parseInt(document.getElementById("kor2").innerHTML);
    var eng1 = parseInt(document.getElementById("eng1").innerHTML);
    var eng2 = parseInt(document.getElementById("eng2").innerHTML);
    var mat1 = parseInt(document.getElementById("mat1").innerHTML);
    var mat2 = parseInt(document.getElementById("mat2").innerHTML);
    document.getElementById("first_g").innerHTML=kor1+kor2;
    first
    document.getElementById("second_g").innerHTML=eng1+eng2;
    document.getElementById("third_g").innerHTML=mat1+mat2;
}
