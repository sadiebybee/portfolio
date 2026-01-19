/* =====================================================
   Utilities
===================================================== */

// Last Modified
const dateOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

function getLastModified() {
  return new Date(document.lastModified).toLocaleDateString(
    "en-US",
    dateOptions
  );
}

// Copyright Year
function getCopyrightYear() {
  return new Date().getFullYear();
}

// Insert footer values (safe on all pages)
const lastModifiedEl = document.querySelector("#lastModified");
if (lastModifiedEl) {
  lastModifiedEl.textContent = `Last Modified: ${getLastModified()}`;
}

const cYearEl = document.querySelector("#cYear");
if (cYearEl) {
  cYearEl.innerHTML = `&copy; ${getCopyrightYear()}`;
}

/* =====================================================
   Navigation / Hamburger Menu
===================================================== */

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (hamButton && navigation) {
  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
  });
}

/* =====================================================
   Projects Page Logic
===================================================== */

const projectsContainer = document.querySelector("#projects");
const dataURL = "./projects.json";

async function getProjects() {
  if (!projectsContainer) return;

  try {
    const response = await fetch(dataURL);

    if (!response.ok) {
      throw new Error("Failed to fetch project data");
    }

    const data = await response.json();
    displayProjects(data.projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

function displayProjects(projects) {
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
      links.appendChild(githubLink);
    }

    pCard.append(projectImg, projectTitle, description, links);
    projectsContainer.appendChild(pCard);
  });
}

getProjects();

/* =====================================================
   Grid / List Toggle 
===================================================== */

// const gridBtn = document.querySelector("#gridBtn");
// const listBtn = document.querySelector("#listBtn");
// const display = document.querySelector("#projects");

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
