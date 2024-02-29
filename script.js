const subscribeInputFormEl = document.querySelector('#subscribe__input');
const subscribeButtonFormEl = document.querySelector('#subscribe__button');

subscribeButtonFormEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (subscribeInputFormEl.value.trim() === '') {
    alert('Please type your email address.');
  } else if (!subscribeInputFormEl.value.includes('@')) {
    alert('Incorrect e-mail! Try again.');
  } else {
    alert('Subscription successful!');
  }
});
