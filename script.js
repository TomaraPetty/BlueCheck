const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const footer = document.getElementById("footer");

const testimonials = [
  {
    name: "",
    position: "",
    photo:
      "https://pbs.twimg.com/profile_images/549991240415313920/BWEI-HJ4.jpeg",
    text:
      "Props to Blue Check for making the verification process painless and fast - only taking a few days in my case! Being verified has helped me gain more validity as a musician and opened up the opportunity to collab with some amazing artists.",
  },
  {
    name: "",
    position: "",
    photo:
      "https://pbs.twimg.com/profile_images/1086022851503648769/baqPNKru.jpg",
    text:
      "Blue Check is awesome! the process was easy, straightforward and only took a few days. I definitely recommend working with them.",
  },
  {
    name: "",
    position: "",
    photo: "https://i.ido.bi/assets/post/2020/11/All-My-Friends-Hate-Me-650x650.jpg",
    text:
      "We weren't sure if we qualified so when we got verified it was a killer surprise.",
  },
  {
    name: "",
    position: "",
    photo:
      "https://boneclones.com/images/store-product/product-1551-main-main-big-1415043687.jpg",
    text: "We are a small business with a big reputation. Blue Check helped us secure verification for our museum which has made it easier for our customers to find us online. They helped us out digitally so now we can focus on what we do best.",
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
