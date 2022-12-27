const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

let divv = document.createElement("div");
divv.setAttribute("class", "faq");
divv.innerHTML = faqData[0].question;
document.querySelector(".accordian_body").appendChild(divv);
// document.querySelector(".accordian_body").a;

/*
const accordianBody;
const faqs = [];

function showFaq() {

}

function createFaq() {

}

function btnStatusUpdate() {

}
*/

