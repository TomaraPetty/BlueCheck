const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const footer = document.getElementById("footer");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Pop artist",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text:
      "Tomara rocks! Blue Check came through for us. She was easy to work with and got the job done in just a few days.",
  },
  {
    name: "Jo Shmo",
    position: "Marketing",
    photo:
      "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guys is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought our design and do theri best to put it in code.",
  },
  {
    name: "Jessica Anderson",
    position: "Music artist",
    photo:
      "https://pbs.twimg.com/profile_images/964693148491329536/4tuJzx-j_400x400.jpg",
    text: "i love them",
  },
];

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

const currentDate = new Date().getFullYear();
footer.innerText = "Copyright © " + currentDate;
