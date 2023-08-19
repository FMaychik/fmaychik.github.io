const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    if (!isActive) {
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      const correspondingContent = document.querySelector(`#${tabId}`);
      correspondingContent.classList.add('active');
    }
  });
});
