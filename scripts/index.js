const buttonSuscribe = document.querySelector(".suscribe");

buttonSuscribe.addEventListener("click", () => {
  const mail = document.getElementById("email-address").value;
  getThanksCard(mail);

  const oldAttribution = document.querySelector(".attribution");
  oldAttribution.remove();

  const attribution = document.createElement("div");
  const a = document.createElement("a");
  a.classList.add("a");
  const me = document.createElement("a");

  attribution.classList.add("attribution");
  attribution.innerText = "Challenge by ";
  a.setAttribute("href", "https://www.frontendmentor.io?ref=challenge");
  a.setAttribute("target", "_blank");
  a.innerHTML = "Frontend Mentor ";
  attribution.appendChild(a);

  attribution.innerHTML += "Coded by ";
  me.setAttribute("href", "https://github.com/alejandrox64");
  me.setAttribute("target", "_blank");
  me.innerText += "Alejandro Rojas";
  attribution.appendChild(me);

  const attributionFragment = document.createDocumentFragment();
  attributionFragment.appendChild(attribution);

  const body = document.querySelector(".body");
  body.appendChild(attributionFragment);

  deleteImageMobile();
});

const getThanksCard = (inputMail) => {
  const card = document.querySelector(".card");
  card.remove();

  const container = document.createElement("div");
  const success = document.createElement("span");
  const subscriptor = document.createElement("strong");
  const img = document.createElement("img");
  const subscribingTitle = document.createElement("h1");
  const confirmationEmail = document.createElement("p");
  const buttonDesmiss = document.createElement("button");

  container.classList.add("subscribing-card");
  success.classList.add("success");
  subscriptor.classList.add("subscriptor");
  subscribingTitle.classList.add("subscribing-title");
  confirmationEmail.classList.add("confirmation-email");
  buttonDesmiss.classList.add("desmiss-mesage");

  container.appendChild(success);
  success.appendChild(img);
  container.appendChild(subscribingTitle);
  container.appendChild(confirmationEmail);
  container.appendChild(buttonDesmiss);

  subscriptor.textContent = inputMail;

  subscribingTitle.textContent = "Thanks for subscribing!";
  confirmationEmail.innerHTML = `A confirmation email has been sent to `;
  confirmationEmail.appendChild(subscriptor);
  confirmationEmail.innerHTML += `. Please open it and click the button inside to confirm your subscription.`;
  subscriptor.style.fontWeight = "bold";
  img.src = "./assets/images/icon-success.svg";
  buttonDesmiss.innerHTML = "Dismiss message";

  const body = document.querySelector(".body");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(container);
  body.appendChild(fragment);

  buttonDesmiss.addEventListener("click", () => {
    location.reload();
  });
};

const deleteImageMobile = () => {
  if (window.innerWidth <= 500) {
    const element = document.querySelector(".image-mobile");
    if (element) {
      element.parentNode.removeChild(element);
    }
  }
};
