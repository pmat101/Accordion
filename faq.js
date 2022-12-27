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

for (let i of faqData) {
  let box = document.createElement("div");
  let heading = document.createElement("h3");
  let show = document.createElement("button");
  let para = document.createElement("p");
  box.setAttribute("class", "faq");
  heading.setAttribute("class", "faq_header");
  show.setAttribute("class", "show_btn");
  para.setAttribute("class", "hidden");
  heading.innerText = i.question;
  show.innerText = "+";
  para.innerText = i.answer;
  document.querySelector(".accordian_body").appendChild(box);
  box.appendChild(heading);
  box.appendChild(show);
  box.appendChild(para);
  box.style.display = "flex";
  box.style.flexWrap = "wrap";
  box.style.justifyContent = "space-between";
  function displayPara() {
    let flag = para.getAttribute("class");
    if (flag == "hidden") {
      para.removeAttribute("class");
      show.innerText = "-";
    } else {
      para.setAttribute("class", "hidden");
      show.innerText = "+";
    }
  }
  show.addEventListener("click", displayPara);
}

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