const faq = document.querySelectorAll(".faq-area");

faq.forEach((faq) => {
  const icon = faq.querySelector(".icon");
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  question.addEventListener("click", () => {
    icon.classList.toggle("active");
    answer.classList.toggle("active");
  });
});
