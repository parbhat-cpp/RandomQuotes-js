const classArr=["text-bg-primary","text-bg-secondary","text-bg-success","text-bg-danger","text-bg-warning","text-bg-info","text-bg-light","text-bg-dark"];
const classArrBtn=["btn-outline-primary","btn-outline-secondary","btn-outline-success","btn-outline-danger","btn-outline-warning","btn-outline-info","btn-outline-light","btn-outline-dark"];

const AUTHOR=document.getElementById("idAuthor");
const TEXT=document.getElementById("idText");
const bttn=document.getElementById("qt");
const CHANGE=document.getElementById("idChange");

let cnt=0;
let DATA;

const load=()=>{
fetch("https://type.fit/api/quotes").then((response)=>response.json()).then((data)=>{
  DATA=data;
  cnt=1;
  let ran=Math.floor(Math.random()*(classArr.length));
  CHANGE.className="";
  bttn.className="";
  CHANGE.classList.add("card");
  CHANGE.classList.add(classArr[ran]);
  CHANGE.classList.add("mb-3");
  bttn.classList.add("btn");
  bttn.classList.add(classArrBtn[ran]);
  let a=data;
  let len=a.length;
  let x=a[Math.floor(Math.random()*len)];
  console.log(x['author']);
  console.log(x['text']);
  AUTHOR.textContent=x['author'];
  TEXT.textContent=x['text'];
})
}

bttn.addEventListener("click",()=>{
  if(cnt===0){
    load();
  }
  else{
 
    let ran=Math.floor(Math.random()*(classArr.length));
     CHANGE.className="";
  bttn.className="";
  CHANGE.classList.add("card");
  CHANGE.classList.add(classArr[ran]);
  CHANGE.classList.add("mb-3");
  bttn.classList.add("btn");
  bttn.classList.add(classArrBtn[ran]);
    let len=DATA.length;
    let x=DATA[Math.floor(Math.random()*len)];
    AUTHOR.textContent=x['author'];
    TEXT.textContent=x['text'];
  }
},false);
