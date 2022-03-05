

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var heading = document.getElementsByClassName('section2-heading');
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        document.body.classList.remove("dark-theme")
        heading[0].style.color = 'hsl(228, 12%, 44%)';

      } else {
          document.body.classList.add("dark-theme");
          heading[0].style.color = 'white';
      }
    });
  });