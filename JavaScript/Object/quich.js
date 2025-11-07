// const qestion1 = {
//   question: "Which is the capital of Odisha",
//   options: ["bhubaneswar", "bhadrak", "jacpur", "cuttack"],
//   correctIndex: 0,

//   check: function(answerIndex) {
//     return answerIndex === this.correctIndex;
//   },

//   explain: function() {
//     console.log("Correct answer is:", this.options[this.correctIndex]);
//   },

//   show: function() {
//     console.log("Question:", this.question);
//     let i = 0;
//     while (i < this.options.length) {
//       console.log(i + ":", this.options[i]);
//       i++;
//     }
//   }
// };

// qestion1.show();
// console.log(qestion1.check(0)); 
// console.log(qestion1.check(1)); 
// qestion1.explain();




class QuizQuestion {
    constructor(question, options, correctIndex) {
      this.question = question;
      this.options = options;
      this.correctIndex = correctIndex;
    }
  
    check(answerIndex) {
      return answerIndex === this.correctIndex;
    }
  
    explain() {
      console.log("Correct answer is:", this.options[this.correctIndex]);
    }
  
    show() {
      console.log("Question:", this.question);
      let i = 0;
      while (i < this.options.length) {
        console.log(i + ":", this.options[i]);
        i++;
      }
    }
  }
  
  const q1 = new QuizQuestion(
    "What is the Famous food in Odisha?",
    ["Water Rice", "Puri", "Idli", "Dosa"],
    0
  );
  
  const q2 = new QuizQuestion(
    "What is the capital of Odisha?",
    ["Bhadrak", "Bhubaneswar", "Jajpur", "Cuttack"],
    1
  );
  
  q1.show();
  console.log(q1.check(1)); 
  console.log(q1.check(0)); 
  q1.explain();
  
  console.log("\n----\n");
  
  q2.show();
  console.log(q2.check(2)); 
  console.log(q2.check(1)); 
  q2.explain();
  
  
  
  
  
  
  
  
  
  
  
  
  