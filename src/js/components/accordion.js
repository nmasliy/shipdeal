const $triggers = document.querySelectorAll('.spoiler__trigger');

if ($triggers.length > 0) {
  $triggers.forEach(($trigger) => {
    $trigger.addEventListener('click', function () {
      $trigger.closest('.spoiler__item').classList.toggle('is-active');
    });
  });
}
