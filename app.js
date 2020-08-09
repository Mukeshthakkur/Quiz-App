
function result(){
    var score = 0;
    const corr_ans_q1 = document.getElementById("q1-a3")
    var q1_ans2 = document.getElementById("q1-a1");
    var q1_ans3 = document.getElementById("q1-a2");
    var q1_ans4 = document.getElementById("q1-a4");

    if(corr_ans_q1.checked == true) {
    score++
      alert("Q1 answer is correct")
    }
    else{
      alert("Q1 answer is wrong")
    }

              
                //   question no.2
    const corr_ans_q2 = document.getElementById("q2-a1")
    var q2_ans2 = document.getElementById("q2-a3");
    var q2_ans3 = document.getElementById("q2-a2");
    var q2_ans4 = document.getElementById("q2-a4");

    if(corr_ans_q2.checked == true) {
    score++
      alert("Q2 answer is correct")
    }
    else{
      alert("Q2 answer is wrong")
    }
 
 
                //  question no.3
    const corr_ans_q3 = document.getElementById("q3-a2")
    var q3_ans2 = document.getElementById("q3-a1");
    var q3_ans2 = document.getElementById("q3-a3");
    var q3_ans2 = document.getElementById("q3-a4");

    if(corr_ans_q3.checked == true) {
    score++
      alert("Q3 answer is correct")
    }
    else{
      alert("Q3 answer is wrong")
    }
                //  question no.4
    const corr_ans_q4 = document.getElementById("q4-a2")
    var q4_ans2 = document.getElementById("q4-a1");
    var q4_ans2 = document.getElementById("q4-a3");
    var q4_ans2 = document.getElementById("q4-a4");

    if(corr_ans_q4.checked == true) {
    score++
      alert("Q4 answer is correct")
    }
    else{
      alert("Q4 answer is wrong")
    }
    
                //  question no.5
    const corr_ans_q5 = document.getElementById("q5-a2")
    var q5_ans2 = document.getElementById("q5-a1");
    var q5_ans2 = document.getElementById("q5-a3");
    var q5_ans2 = document.getElementById("q5-a4");

    if(corr_ans_q5.checked == true) {
    score++
      alert("Q5 answer is correct")
    }
    else{
      alert("Q5 answer is wrong")
    }

     alert("Your Score is: " + score + " / 5")    
}