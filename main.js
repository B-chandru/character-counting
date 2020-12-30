function send(){
    var tx=document.getElementById("tx");
    var h3=document.getElementById("h3");
    var txlength=tx.value.length;
     h3.innerText=`${txlength}`;
}