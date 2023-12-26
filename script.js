let hrs= document.getElementById("hrs");
let mins=document.getElementById("mins");
let secs= document.getElementById("secs");

setInterval(()=>{
    
let CurrentTime= new Date();
// console.log(currentTime);

hrs.innerHTML=(CurrentTime.getHours()<10?"0":"")+CurrentTime.getHours();
mins.innerHTML=(CurrentTime.getMinutes()<10?"0":"")+CurrentTime.getMinutes();
secs.innerHTML=  (CurrentTime.getSeconds()<10?"0":"")+CurrentTime.getSeconds();

},1000);

// setInterval(()=>{
    
//     let CurrentTime= new Date();
//     // console.log(currentTime);
    
//     hrs.innerHTML= CurrentTime.getHours();
//     // mins.innerHTML= new urrentTime.getMinutes();
//     // secs.innerHTML= new currentTime.getSeconds();
    
//     },1000);