const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const footer = document.getElementById("footer");

const testimonials = [
  {
    name: "Troy Ogletree",
    position: "Pop artist",
    photo:
      "https://pbs.twimg.com/profile_images/549991240415313920/BWEI-HJ4.jpeg",
    text:
      "Props to Tomara for making the verification process painless and fast - only taking a few days in my case! Being verified has helped me gain more validity as a musician and opened up the opportunity to collab with some amazing artists.",
  },
  {
    name: "Diana Meyer",
    position: "Rock musician",
    photo:
      "https://pbs.twimg.com/profile_images/1086022851503648769/baqPNKru.jpg",
    text:
      "Tomara is awesome! the process was easy, straightforward and only took a few days. I definitely recommend working with her.",
  },
  {
    name: "All My Friends Hate Me",
    position: "Punk Band",
    photo: "https://i.ido.bi/assets/post/2020/11/All-My-Friends-Hate-Me-650x650.jpg",
    text:
      "Tomara is a friend of the band. She got us verified for a birthday present, which was a killer surprise.",
  },
  {
    name: "Everything Prehistoric",
    position: "Dinosaur Museum",
    photo:
      "https://boneclones.com/images/store-product/product-1551-main-main-big-1415043687.jpg",
    text: "We are a small business with a big reputation. Blue Check helped us secure facebook verification for our museum which has made it easier for our customers to find us online. Tomara helped us out digitally so now we can focus on what we do best.",
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
