// Navigation and Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Display Copyright
function getCopyrightYear() {
  const year = new Date().getFullYear();
  return `&copy; ${year}`;
}
document.getElementById("cYear").innerHTML = getCopyrightYear();

// // Display Last Modified
// const options = {
//   month: "short",
//   day: "numeric",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true,
// };

// function getLastModified() {
//   const lastModified = new Date(document.lastModified).toLocaleDateString(
//     "en-US",
//     options
//   );
//   return `Last Modified: ${lastModified}`;
// }
// document.getElementById("lastModified").innerHTML = getLastModified();

// Project Directory Page

// Project title
// Short description
// Technologies used
// Screenshot image?
// Live demo link
// GitHub repo link
