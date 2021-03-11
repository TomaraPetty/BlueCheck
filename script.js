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
    name: "Troy Ogletree",
    position: "Pop artist",
    photo:
      "https://pbs.twimg.com/profile_images/549991240415313920/BWEI-HJ4.jpeg",
    text:
      "Props to Tomara for making the verification process painless and fast - only taking a few days in my case! Being verified has helped me gain more validity as a musician and opened up the opportunity to collab with some amazing artists.",
  },
  {
    name: "Jessica Anderson",
    position: "Music artist",
    photo:
      "https://pbs.twimg.com/profile_images/964693148491329536/4tuJzx-j_400x400.jpg",
    text: "i love Blue Check!",
  },
  {
    name: "Everything Prehistoric",
    position: "Dinosaur Museum",
    photo:
      "https://boneclones.com/images/store-product/product-1551-main-main-big-1415043687.jpg",
    text: "We are a small business with a big reputation. Blue Check helped us secure verification for our museum which has made it easier for our customers to find us online. Tomara helped us out digitally so now we can focus on what we do best.",
  },
];

let idx = 1;

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
