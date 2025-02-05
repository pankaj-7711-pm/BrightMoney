document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("content");

  const sections = [
    {
      number: "01",
      title: "Download the App and check the rates.",
      description:
        "Get the best rates and credit limit with a quick soft credit inquiry.",
      imgSrc: "/public/images/one.png",
      imgAlt:
        "Illustration of a mobile phone with the Bright app and a checkmark",
      order: "normal",
    },
    {
      number: "02",
      title: "Get the credit line and choose which cards to pay.",
      description:
        "Refinance multiple cards up to your credit limit; pay down and choose more.",
      imgSrc: "/public/images/two.png",
      imgAlt: "Illustration of credit cards",
      order: "reverse",
    },
    {
      number: "03",
      title: "Make on-time payments and defeat debt.",
      description:
        "Choose how much to pay each month above your monthly minimum payment.",
      imgSrc: "/public/images/three.png",
      imgAlt: "Illustration of a calendar and coins",
      order: "normal",
    },
  ];

  sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = `section ${
      section.order === "reverse" ? "reverse" : ""
    }`;

    const textDiv = document.createElement("div");
    textDiv.className = "section-content";
    const number = document.createElement("h2");
    number.textContent = section.number;
    const title = document.createElement("h3");
    title.textContent = section.title;
    const description = document.createElement("p");
    description.textContent = section.description;
    const link = document.createElement("a");
    link.href = "#";
    link.innerHTML = 'Apply Now <i class="fas fa-arrow-right"></i>';

    textDiv.appendChild(number);
    textDiv.appendChild(title);
    textDiv.appendChild(description);
    textDiv.appendChild(link);

    const imgdiv = document.createElement("div");
    imgdiv.className = "imagesBanner";
    const img = document.createElement("img");
    img.src = section.imgSrc;
    img.alt = section.imgAlt;

    imgdiv.appendChild(img);

    sectionDiv.appendChild(imgdiv);
    sectionDiv.appendChild(textDiv);

    content.appendChild(sectionDiv);

    if (section !== sections[sections.length - 1]) {
      const hr = document.createElement("hr");
      content.appendChild(hr);
    }
  });
});

const testimonialsData = [
  {
    stars: 5,
    text: "To Pay off my credit card debt I'm using Bright money App. It's really easy to use and their customer service is excellent. They are helpful.",
    author: "Anmol Singh",
  },
  {
    stars: 5,
    text: "Bright money is willing to invest their time and get you an financial plan. Increase your score and reduce your debt in all in one App.",
    author: "Lance Nelson",
  },
  {
    stars: 5,
    text: "If you're looking to get your score better - this is the App that will help and guide you. You'll be with better score in few months. Get it.",
    author: "Sergio Lopez",
  },
  {
    stars: 5,
    text: "I recommend the Bright App to everybody. It helped me cut down on my credit card debt, help me save for car, vacation. Next we're saving for house.",
    author: "Todd Curry",
  },
  {
    stars: 5,
    text: "Thank you to Bright for helping me improve my credit and eliminating my debt. The customer service is super helpful. Appreciate the journey.",
    author: "Tom",
  },
];

const testimonialsContainer = document.getElementById("testimonials");

testimonialsData.forEach((testimonial) => {
  const testimonialDiv = document.createElement("div");
  testimonialDiv.className = "testimonial";

  const starsDiv = document.createElement("div");
  starsDiv.className = "stars";
  for (let i = 0; i < testimonial.stars; i++) {
    const starIcon = document.createElement("i");
    starIcon.className = "fas fa-star";
    starsDiv.appendChild(starIcon);
  }

  const textDiv = document.createElement("div");
  textDiv.className = "text";
  textDiv.textContent = testimonial.text;

  const authorDiv = document.createElement("div");
  authorDiv.className = "author";
  authorDiv.textContent = testimonial.author;

  testimonialDiv.appendChild(starsDiv);
  testimonialDiv.appendChild(textDiv);
  testimonialDiv.appendChild(authorDiv);

  testimonialsContainer.appendChild(testimonialDiv);
});
