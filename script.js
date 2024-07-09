// Получаем все кнопки "Подробнее"
const moreInfoButtons = document.querySelectorAll(".more-info");

// Получаем все модальные окна
const modalTeachers = document.querySelectorAll(".modal");

// Функция для открытия модального окна
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal(modal) {
  modal.style.display = "none";
}

// Обработчик события для клика по кнопке "Подробнее"
moreInfoButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Открываем модальное окно, соответствующее кнопке
    openModal(`modal-teacher-${index + 1}`); 
  });
});

 // Закрытие окна при клике на кнопку "Закрыть"
closeButton.addEventListener("click", () => {
    portfolioContainer.style.display = "none";
    testContainer.style.display = "none";
    answerContainer.style.display = "none"; // Добавьте закрытие answerContainer
  });const teachers = document.querySelectorAll(".teacher");
  const portfolioContainer = document.getElementById("portfolio-container");
  const testContainer = document.getElementById("test-container");
  const answerContainer = document.querySelector(".answer-container");
  const closeButton = document.querySelector(".close-button"); // Получаем кнопку "Закрыть" только один раз
  
  // Закрытие окна при клике на кнопку "Закрыть"
  closeButton.addEventListener("click", () => {
    portfolioContainer.style.display = "none";
    testContainer.style.display = "none";
    answerContainer.style.display = "none"; 
  });
  
  // Закрытие окна при клике за пределами окна
  portfolioContainer.addEventListener("click", (event) => {
    if (event.target === portfolioContainer) {
      portfolioContainer.style.display = "none";
      testContainer.style.display = "none";
      answerContainer.style.display = "none"; 
    }
  });
  
  // Обработчик клика по блоку учителя
  teachers.forEach(teacher => {
    teacher.querySelector(".more-info").addEventListener("click", () => {
      const teacherName = teacher.getAttribute("data-teacher");
      const teacherImage = teacher.querySelector("img").src;
  
      // Заполняем портфолио информацией
      const portfolioContent = portfolioContainer.querySelector(".portfolio-content");
      portfolioContent.querySelector(".teacher-image").src = teacherImage;
      portfolioContent.querySelector(".teacher-name").textContent = teacherName;
      portfolioContent.querySelector("#education p").textContent = `Информация об образовании для ${teacherName}`;
      portfolioContent.querySelector("#experience p").textContent = `Информация об опыте работы для ${teacherName}`;
      portfolioContent.querySelector("#awards p").textContent = `Информация о наградах для ${teacherName}`;
  
      // Устанавливаем ссылки на соц сети (замените '#' на реальные ссылки)
      portfolioContent.querySelector(".social-link.instagram").href = `#`;
      portfolioContent.querySelector(".social-link.facebook").href = `#`;
  
      portfolioContainer.style.display = "block";
      testContainer.style.display = "flex";
  
      // Обработчик клика по столбцу в тестовом окне
      const columns = testContainer.querySelectorAll(".column");
      columns.forEach(column => {
        column.addEventListener("click", () => {
          const question = column.getAttribute("data-question");
          const answer = document.getElementById(`answer-${question}`);
          answerContainer.style.display = "block";
  
          // Закрытие окна при клике на кнопку "Закрыть"
          closeButton.addEventListener("click", () => {
            answerContainer.style.display = "none";
          });
  
          // Закрытие окна при клике за пределами окна
          answerContainer.addEventListener("click", (event) => {
            if (event.target === answerContainer) {
              answerContainer.style.display = "none";
            }
          });
        });
      });
    });
  });

// Закрытие модального окна при клике за пределами модального окна
window.onclick = function(event) {
  if (event.target == modalTeachers[0] || event.target == modalTeachers[1] || event.target == modalTeachers[2]) {
    closeModal(event.target);
  }
}
