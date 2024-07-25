document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const surveySection = document.getElementById('survey');
    const surveyForm = document.getElementById('surveyForm');
    const progressBar = document.getElementById('progress');
    const nextButton = document.getElementById('nextButton');
    const submitButton = document.getElementById('submitButton');
    const questions = surveyForm.querySelectorAll('.question');

    let currentQuestion = 0;

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;

        if (username) {
            loginForm.parentElement.classList.add('hidden');
            surveySection.classList.remove('hidden');
            showQuestion(currentQuestion);
            updateProgress();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            hideQuestion(currentQuestion);
            currentQuestion++;
            showQuestion(currentQuestion);
            updateProgress();

            if (currentQuestion === questions.length - 1) {
                nextButton.classList.add('hidden');
                submitButton.classList.remove('hidden');
            }
        }
    });

    surveyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Survey submitted successfully!');
        progressBar.value = 100;
    });

    function showQuestion(index) {
        questions[index].classList.remove('hidden');
    }

    function hideQuestion(index) {
        questions[index].classList.add('hidden');
    }

    function updateProgress() {
        const answeredQuestions = Array.from(questions).slice(0, currentQuestion + 1)
            .reduce((count, question) => count + (question.querySelector('input:checked') ? 1 : 0), 0);
        progressBar.value = (answeredQuestions / questions.length) * 100;
    }
});
