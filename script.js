const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const feedback = document.getElementById('feedback');
const form = document.getElementById('quiz-form');

submitBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    feedback.textContent = '⚠️ Por favor, selecione uma resposta.';
    feedback.style.color = '#856404';
    return;
  }

  const isCorrect = selected.getAttribute('data-correct') === 'true';

  if (isCorrect) {
    feedback.textContent = '✅ Resposta correta! Parabéns!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = '❌ Resposta incorreta. Tente novamente.';
    feedback.style.color = 'red';
  }

  // Desabilita as opções após resposta
  const allOptions = document.querySelectorAll('input[name="answer"]');
  allOptions.forEach(opt => opt.disabled = true);

  submitBtn.disabled = true;
  resetBtn.style.display = 'inline-block';
});

resetBtn.addEventListener('click', () => {
  const allOptions = document.querySelectorAll('input[name="answer"]');
  allOptions.forEach(opt => {
    opt.checked = false;
    opt.disabled = false;
  });

  feedback.textContent = '';
  feedback.style.color = '';
  submitBtn.disabled = false;
  resetBtn.style.display = 'none';
});
