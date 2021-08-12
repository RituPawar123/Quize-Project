const quize=[
    {
   question: "What does HTML stands for",
    a:"Hypertext Machine language",
    b:"Hypertext and links markup language",
    c:"Hypertext Markup Language",
    d:"Hightext machine language",
    ans:"ans3",
 },{
    question:"Which of the following HTML element is used for creating an unordered list?",
    a:"<ui>",
    b:"<ul>",
    c:"<li>",
    d:"<ol>",
    ans: "ans2", 
 },
 {
    question:"How many heading tags are there in HTML5?",
    a:"4",
    b:"5",
    c:"6",
    d:"3",
    ans: "ans3", 
 },
 {
    question:"How many attributes are there in HTML5?",
    a:"3",
    b:"2",
    c:"1",
    d:"4",
    ans: "ans2", 
 },
 { question:"Which of the following attributes is used to add link to any element?",
    a:"link",
    b:"ref",
    c:"href",
    d:"newref",
    ans: "ans3", 
},
{ question:"What is the font-size of the h1 heading tag?",
    a:"3.5 em",
    b:"2 em",
    c:"1.24 em",
    d:"1.5 em",
    ans: "ans2", 

},
{ question:"Which of the following HTML Elements is used for making any text bold ?",
    a:"<p>",
    b:"<li>",
    c:"<a>",
    d:"<b>",
    ans: "ans4", 
},
{ question:"What is the difference between XML and HTML?",
   a:"HTML is used for exchanging data, XML is not.",
   b:"XML is used for exchanging data, HTML is not",
   c:"HTML can have user defined tags, XML cannot",
    ans: "ans2", 
},
{
   question:"Opening Tag of HTML Tag is called as ________",
   a:"Closed Tag",
   b:"Starting Tag",
   c:"Forward Tag",
   d:"Enging Tag ",
   ans:"ans2"
},
{

},
]
const question=document.querySelector("#question")
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showscore");
let questionCount=0;
let score=0;
const loadQuestion=()=>{
   const questionList=quize[questionCount];
   question.innerText=questionList.question;
   option1.innerText=questionList.a;
   option2.innerText=questionList.b;
   option3.innerText=questionList.c;
    option4.innerText=questionList.d;
 
}
loadQuestion();
const getCheckAnswer=()=>{
   let answer;
   answers.forEach((curAnsElem)=>{
      if(curAnsElem.checked){
         answer=curAnsElem.id;
             } 
   });
   return answer;
};
const deselectAll = ()=>{
   answers.forEach((curAnsElem)=> curAnsElem.checked=false);
}
submit.addEventListener('click', ()=>{
   const checkedAnswer = getCheckAnswer();
   console.log(quize,questionCount);

   if(checkedAnswer==quize[questionCount].ans){
      score++;
   };
      questionCount++;
       deselectAll();
         answers.forEach((curAnsElem)=>curAnsElem.checked=false);
            if(questionCount<quize.length)
      loadQuestion();
else

{
   showScore.innerHTML=`<h2>
   your scored is ${score}/${quize.length}✌️</h2>
   <button class="btn" onclick="location.reload()">PLAY AGAIN</button>`
   showScore.classList.remove('showarea');
}


   
})