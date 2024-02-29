const subscribeInputFormEl = document.getElementById('subscribe__input');
const subscribeButtonFormEl = document.getElementById('subscribe__button');

if (subscribeButtonFormEl) {
  subscribeButtonFormEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (subscribeInputFormEl && subscribeInputFormEl.value.trim() === '') {
      alert('Please type your email address.');
    } else if (
      subscribeInputFormEl &&
      !subscribeInputFormEl.value.includes('@')
    ) {
      alert('Incorrect e-mail! Try again.');
    } else {
      alert('Subscription successful!');
    }
  });
}

const announcementEl = document.getElementById('announcement');
const announcementCloseBtnEl = document.getElementById(
  'announcement__btn--close'
);

if (announcementCloseBtnEl) {
  announcementCloseBtnEl.addEventListener('click', (e) => {
    if (announcementEl) {
      announcementEl.classList.add('close');
    }
  });
}
