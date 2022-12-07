const myQuestions = [
  {
    question: "Who invented JavaScript?",

    a: "Douglas Crockford",
    b: "Sheryl Sandberg",
    c: "Brendan Eich",

    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",

    a: "Node.js",
    b: "TypeScript",
    c: "npm",

    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",

    a: "Angular",
    b: "jQuery",
    c: "RequireJS",
    d: "ESLint",

    correctAnswer: "d",
  },
  {
    question: "What is the famous language according to data of 2022?",

    a: "javascript",
    b: "Java",
    c: "Sass",
    d: "Python",

    correctAnswer: "a",
  },
];

let currentQues = 0;
loadQuiz();

function loadQuiz() {
  const ques = document.getElementById("ques");
  const currentQuesData = myQuestions[currentQues];

  ques.innerText = currentQuesData.question;
  const a_text = document.getElementById("opt_1");
  const b_text = document.getElementById("opt_2");
  const c_text = document.getElementById("opt_3");

  a_text.innerText = currentQuesData.a;
  b_text.innerText = currentQuesData.b;
  c_text.innerText = currentQuesData.c;
}

function getSelected() {
  const ansEls = document.querySelectorAll(".ans");
  let answer = undefined;
  ansEls.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const answer1 = getSelected();
  console.log(answer1);
  if (answer1) {
    currentQues++;
    if (currentQues < myQuestions.length) {
      loadQuiz();
    } else {
      alert("You Finished the quiz");
    }
  }
});
