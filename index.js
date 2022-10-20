var question=document.querySelector('.question-el')
var answers_El=document.querySelectorAll('.answer')
var ans_1=document.querySelector('#a_text')
var ans_2=document.querySelector('#b_text')
var ans_3=document.querySelector('#c_text')
var ans_4=document.querySelector('#d_text')
var btn=document.querySelector('.next')
var score=0
var questionNumebr=0
let answer=undefined

let questionsAnswers = [
    {
      "questionText":"2+2",
      "a":"3",
      "b":"2",
      "c":"4",
      "d":"5",
      "correct":"c"
    },
    {
        "questionText":"6*4",
        "a":"24",
        "b":"23",
        "c":"42",
        "d":"55",
        "correct":"a"
    },
    {
        "questionText":"50/5",
        "a":"24",
        "b":"10",
        "c":"42",
        "d":"55",
        "correct":"b"
    },
    {
        "questionText":"144/12",
        "a":"24",
        "b":"10",
        "c":"12",
        "d":"33",
        "correct":"c"
    },
    {
        "questionText":"55-40",
        "a":"12",
        "b":"15",
        "c":"33",
        "d":"9",
        "correct":"b"
    },
  ]
loadQuiz()


  function loadQuiz(){
   
    deselectAnswers()
    const currentQues=questionsAnswers[questionNumebr]
    question.innerHTML=currentQues.questionText
    ans_1.innerHTML=currentQues.a
    ans_2.innerHTML=currentQues.b
    ans_3.innerHTML=currentQues.c
    ans_4.innerHTML=currentQues.d    

 }


function getSelected(){
    
    let answer=undefined

    answers_El.forEach((answer_el)=>{
        if(answer_el.checked){
            answer= answer_el.id
        }
    })
    return answer
}

function deselectAnswers(){
    answers_El.forEach((answer_el)=>{
        answer_el.checked=false
    })
}


btn.addEventListener('click',function(){
   //check to see the answer

    const answer=getSelected()
    console.log(answer)

    if(answer)
    {
        if(answer===questionsAnswers[questionNumebr].correct){
            score++

        }
       questionNumebr++
         if(questionNumebr<questionsAnswers.length){
       loadQuiz()
      
    }
    else{
        alert(score)
    }  
    }

  
       

})
   

