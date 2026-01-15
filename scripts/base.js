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
// Screenshot image?
// Live demo link
// GitHub repo link

/* ****************************************************
    Projects
***************************************************** */

const dataURL = "./projects.json";

async function getProjects() {
  try {
    const response = await fetch(dataURL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    displayProjects(data.projects);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getProjects();

const displayProjects = (projects) => {
  const cards = document.querySelector("#projects");
  if (!cards) return;

  projects.forEach((project) => {
    const pCard = document.createElement("section");
    pCard.classList.add("project");

    const projectImg = document.createElement("img");
    projectImg.src = project.image;
    projectImg.alt = `${project.title} screenshot`;
    projectImg.loading = "lazy";

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const links = document.createElement("div");
    links.classList.add("project-links");

    if (project.liveLink) {
      const liveLink = document.createElement("a");
      liveLink.href = project.liveLink;
      liveLink.textContent = "Live Demo";
      liveLink.target = "_blank";
      liveLink.rel = "noopener";
      links.appendChild(liveLink);
    }

    if (project.githubLink) {
      const githubLink = document.createElement("a");
      githubLink.href = project.githubLink;
      githubLink.textContent = "GitHub Repo";
      githubLink.target = "_blank";
      githubLink.rel = "noopener";
      links.append(githubLink);
    }

    pCard.append(projectImg, projectTitle, description, links);

    cards.appendChild(pCard);
  });
};

/* ****************************************************
    Grid / List Toggle
***************************************************** */

// const gridBtn = document.querySelector("#gridBtn");
// const listBtn = document.querySelector("#listBtn");
// const display = document.querySelector("article");

// if (gridBtn && listBtn && display) {
//   gridBtn.addEventListener("click", () => {
//     display.classList.add("grid");
//     display.classList.remove("list");
//   });

//   listBtn.addEventListener("click", () => {
//     display.classList.add("list");
//     display.classList.remove("grid");
//   });
// }
