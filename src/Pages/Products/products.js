document.addEventListener('DOMContentLoaded', function () {
  const dropdownBtns = document.querySelectorAll('.dropdown-btn');

  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('i');

      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
    });
  });
});