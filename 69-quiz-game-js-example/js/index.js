const containerEl = document.querySelector(".container");

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionsURL = "https://opentdb.com/api.php?amount=10";

const getQuestions = async () => {
  const { results } = await fetch(questionsURL).then((resp) => resp.json());

  return results;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const addResultElement = (correctAnswers, questionsQuantity) => {
  containerEl.classList.add("result");
  containerEl.innerHTML = `
    <h1>${correctAnswers}/${questionsQuantity}</h1>
    <p>correct answers</p>
    <button>Start again</button>
  `;

  containerEl.querySelector("button").addEventListener("click", () => {
    containerEl.classList.remove("result");
    containerEl.innerHTML = "";
    init();
  });
};

const createQuestionEl = ({ question, correct_answer, incorrect_answers }) => {
  const rawAnswers = [correct_answer, ...incorrect_answers];
  const answers = shuffleArray(shuffleArray(rawAnswers));
  const wrapper = document.createElement("div");
  wrapper.classList.add("question");

  wrapper.innerHTML = `
    <h4>${question}</h4>
    <ul class="options"></ul>
  `;
  answers.forEach((answer) => {
    wrapper.querySelector(
      ".options"
    ).innerHTML += `<li class="option" data-value="${answer}">${answer}</li>`;
  });

  return wrapper;
};

const createHeader = (questionsQuantity) => {
  containerEl.innerHTML = `
  <p class="pagination">
    <span class="question_number">0</span>/<span
      class="questions_quantity"
    >${questionsQuantity || 0}</span>
  </p>
`;
};

const removeCurrentQuestionEl = () => {
  const questionEl = document.querySelector(".question");

  if (questionEl) {
    questionEl.remove();
  }
};

const setCurrentQuestionPosition = () => {
  const questionNumberEl = document.querySelector(".question_number");
  questionNumberEl.innerText = currentQuestionIndex + 1;
};

const handleAnswerSelect = (questions) => {
  setTimeout(() => {
    if (currentQuestionIndex < questions.length) {
      addNewQuestionToDOM(questions);
    } else {
      addResultElement(correctAnswers, questions.length);
    }
  }, 1000);
};

const addNewQuestionToDOM = (questions) => {
  setCurrentQuestionPosition();
  removeCurrentQuestionEl();

  const currentQuestion = questions[currentQuestionIndex];
  const questionEl = createQuestionEl(currentQuestion);

  questionEl.addEventListener("click", ({ target }) => {
    const targetValue = target.dataset.value;

    if (targetValue) {
      const isCorrectAnswer = targetValue === currentQuestion.correct_answer;
      const answerClass = isCorrectAnswer ? "success" : "error";

      target.classList.add(answerClass);
      correctAnswers += isCorrectAnswer; // boolean in math converts to 1 or 0
      currentQuestionIndex += 1;

      handleAnswerSelect(questions);
    }
  });

  containerEl.appendChild(questionEl);
};

const init = async () => {
  currentQuestionIndex = 0;
  correctAnswers = 0;

  const questions = await getQuestions();
  createHeader(questions.length);

  addNewQuestionToDOM(questions);
};

init();
