const getImage = document.querySelectorAll(".image");
const getHeading = document.querySelectorAll("h3");

function imageGrowing() {
  getImage.forEach((image) => {
    image.classList.remove("flex-[0.7]");
  });
  this.classList.toggle("flex-[0.7]");
  getHeading.forEach((heading) => {
    heading.classList.remove("opacity-0");
  });
}

getImage.forEach((image) => {
  image.addEventListener("click", imageGrowing);
});
