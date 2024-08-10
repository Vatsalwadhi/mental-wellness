let totalScore = 0;

function startQuiz() {
    document.querySelector('.start-page').classList.add('hidden');
    document.querySelector('.question-section').classList.remove('hidden');
    showQuestion('question1');
}

function nextQuestion(nextId, score) {
    totalScore += score;

    const currentCard = document.querySelector('.question-card.show');
    currentCard.classList.add('fade-out');
    currentCard.classList.remove('show');
    
    // Wait for the fade-out to complete before showing the next question
    setTimeout(() => {
        currentCard.classList.add('hidden');
        showQuestion(nextId);
    }, 600); // Match this duration with the fade-out transition duration in CSS
}

function showQuestion(id) {
    const nextCard = document.getElementById(id);
    nextCard.classList.remove('hidden');
    setTimeout(() => {
        nextCard.classList.add('show');
    }, 50); // Slight delay to trigger the animation

    if (id === 'resultPage') {
        displayResult();
    }
}

function displayResult() {
    let message = '';
    
    if (totalScore === 0) {
        message = 'Your score suggests no risk for anxiety and depression.';
    } else if (totalScore <= 5) {
        message = 'Your score suggests low risk for anxiety and depression.';
    } else if (totalScore <= 10) {
        message = 'Your score suggests moderate risk. Consider speaking with a mental health professional.';
    } else {
        message = 'Your score suggests high risk. Please reach out to a mental health professional for further assistance.';
    }
    
    document.getElementById('resultMessage').innerText = message;
}
