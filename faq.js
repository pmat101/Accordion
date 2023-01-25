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

const accordianBody = document.querySelector(".accordian_body");

function showFaq() {
  for (i of faqData) accordianBody.appendChild(createFaq(i));
}

function createFaq(item) {
  let faq = document.createElement("div");
  let header = document.createElement("div");
  let heading = document.createElement("h3");
  let btn = document.createElement("button");
  let para = document.createElement("p");

  faq.setAttribute("class", "faq");
  header.setAttribute("class", "faq_header");
  btn.setAttribute("class", "show_btn");
  para.setAttribute("class", "hidden");

  heading.innerText = item.question;
  btn.innerText = "+";
  para.innerText = item.answer;

  header.appendChild(heading);
  header.appendChild(btn);
  faq.appendChild(header);
  faq.appendChild(para);

  btn.addEventListener("click", btnStatusUpdate);
  return faq;
}

function btnStatusUpdate() {
  let parent = this.parentElement;
  let sibling = parent.nextElementSibling;
  if (sibling.getAttribute("class") == "hidden") {
    sibling.removeAttribute("class");
    this.innerText = "-";
  } else {
    sibling.setAttribute("class", "hidden");
    this.innerText = "+";
  }
}

showFaq();
