// Get form elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumePreview = document.getElementById("resumePreview") as HTMLElement;

const addEducationBtn = document.getElementById(
  "addEducationBtn"
) as HTMLButtonElement;
const educationSection = document.getElementById(
  "educationSection"
) as HTMLElement;

const addLanguageBtn = document.getElementById(
  "addLanguageBtn"
) as HTMLButtonElement;
const languageSection = document.getElementById(
  "languagesSection"
) as HTMLElement;

const addExperienceBtn = document.getElementById(
  "addExperienceBtn"
) as HTMLButtonElement;
const experienceSection = document.getElementById(
  "experienceSection"
) as HTMLElement;

const addSkillBtn = document.getElementById("addSkillBtn") as HTMLButtonElement;
const skillsContainer = document.getElementById(
  "skillsContainer"
) as HTMLElement;

const addProjectBtn = document.getElementById(
  "addProjectBtn"
) as HTMLButtonElement;
const projectsSection = document.getElementById(
  "projectsSection"
) as HTMLElement;

// Counters for education, experience, skills, projects, and languages
let educationCount = 0;
const maxEducationEntries = 2;

let experienceCount = 0;
const maxExperienceEntries = 3;

let skillCount = 0;
const maxSkillEntries = 6;

let projectCount = 0;
const maxProjectEntries = 3;

let languageCount = 0;
const maxLanguageEntries = 3;

// Function to create a new education entry field
function createEducationField(index: number): HTMLElement {
  const educationField = document.createElement("div");
  educationField.className = "education-entry";
  educationField.innerHTML = `
    <label for="university${index}">University/College/School Name:</label>
    <input type="text" id="university${index}" placeholder="Enter name" required />
    <label for="degree${index}">Degree/Certificate Name:</label>
    <input type="text" id="degree${index}" placeholder="Enter degree/certificate" required />
    <label for="duration${index}">Duration:</label>
    <input type="text" id="duration${index}" placeholder="Enter duration (e.g. 2018-2022)" required />
    <button type="button" class="close-btn" onclick="removeEntry(this, 'education')">×</button>
  `;
  return educationField;
}

// Function to create a new experience entry field
function createExperienceField(index: number): HTMLElement {
  const experienceField = document.createElement("div");
  experienceField.className = "experience-entry";
  experienceField.innerHTML = `
    <label for="company${index}">Company Name:</label>
    <input type="text" id="company${index}" placeholder="Enter company name" required />
    <label for="jobTitle${index}">Job Title:</label>
    <input type="text" id="jobTitle${index}" placeholder="Enter job title" required />
    <label for="expDuration${index}">Duration:</label>
    <input type="text" id="expDuration${index}" placeholder="Enter duration (e.g. 2019-2021)" required />
    <button type="button" class="close-btn" onclick="removeEntry(this, 'experience')">×</button>
  `;
  return experienceField;
}

// Function to create a new skill entry field
function createSkillField(index: number): HTMLElement {
  const skillField = document.createElement("div");
  skillField.className = "skill-entry";
  skillField.innerHTML = `
    <label for="skill${index}">Skill ${index}:</label>
    <input type="text" id="skill${index}" placeholder="Enter skill (e.g. HTML)" required />
    <button type="button" class="close-btn" onclick="removeEntry(this, 'skill')">×</button>
  `;
  return skillField;
}

// Function to create a new project entry field
function createProjectField(index: number): HTMLElement {
  const projectField = document.createElement("div");
  projectField.className = "project-entry";
  projectField.innerHTML = `
    <label for="projectName${index}">Project Name:</label>
    <input type="text" id="projectName${index}" placeholder="Enter project name" required />
    <label for="projectUrl${index}">Project URL:</label>
    <input type="url" id="projectUrl${index}" placeholder="Enter project URL" required />
    <button type="button" class="close-btn" onclick="removeEntry(this, 'project')">×</button>
  `;
  return projectField;
}

// Function to create a new language entry field
function createLanguageField(index: number): HTMLElement {
  const languageField = document.createElement("div");
  languageField.className = "language-entry";
  languageField.innerHTML = `
    <label for="language${index}">Language ${index}:</label>
    <input type="text" id="language${index}" placeholder="Enter language e.g (English – Fluent)" required />
    <button type="button" class="close-btn" onclick="removeEntry(this, 'language')">×</button>
  `;
  return languageField;
}

// Adding event listeners for adding entries
addEducationBtn.addEventListener("click", () => {
  if (educationCount < maxEducationEntries) {
    educationCount++;
    const educationField = createEducationField(educationCount);
    educationSection.insertBefore(educationField, addEducationBtn);
  } else {
    alert("Maximum education entries reached");
  }
});

addExperienceBtn.addEventListener("click", () => {
  if (experienceCount < maxExperienceEntries) {
    experienceCount++;
    const experienceField = createExperienceField(experienceCount);
    experienceSection.insertBefore(experienceField, addExperienceBtn);
  } else {
    alert("Maximum experience entries reached");
  }
});

addSkillBtn.addEventListener("click", () => {
  if (skillCount < maxSkillEntries) {
    skillCount++;
    const skillField = createSkillField(skillCount);
    skillsContainer.appendChild(skillField);
  } else {
    alert("Maximum skill entries reached");
  }
});

addProjectBtn.addEventListener("click", () => {
  if (projectCount < maxProjectEntries) {
    projectCount++;
    const projectField = createProjectField(projectCount);
    projectsSection.appendChild(projectField);
  } else {
    alert("Maximum project entries reached");
  }
});

addLanguageBtn.addEventListener("click", () => {
  if (languageCount < maxLanguageEntries) {
    languageCount++;
    const languageField = createLanguageField(languageCount);
    languageSection.appendChild(languageField);
  } else {
    alert("Maximum language entries reached");
  }
});

// Remove entry helper function
function removeEntry(button: HTMLButtonElement, type: string) {
  const entry = button.parentElement as HTMLElement;
  entry.remove();

  if (type === "education") educationCount--;
  else if (type === "experience") experienceCount--;
  else if (type === "skill") skillCount--;
  else if (type === "project") projectCount--;
  else if (type === "language") languageCount--;
}

// Event listener for form submission
resumeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Display and populate preview
  resumePreview.style.display = "block";
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const location = (document.getElementById("location") as HTMLInputElement)
    .value;
  const about = (document.getElementById("about") as HTMLTextAreaElement).value;
  const title = (document.getElementById("title") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
    .value;
  const github = (document.getElementById("github") as HTMLInputElement).value;
  const profileImg = (
    document.getElementById("profileImage") as HTMLInputElement
  ).files?.[0];

  const profileImage = profileImg ? URL.createObjectURL(profileImg) : "";

  const usernameElement = document.getElementById(
    "username"
  ) as HTMLInputElement;
  const username = usernameElement.value;
  var uniquePath = `resume/${username.replace(/\s+/g, "_")}_resume.html`;

  let education = "";
  for (let i = 1; i <= educationCount; i++) {
    const university = (
      document.getElementById(`university${i}`) as HTMLInputElement
    ).value;
    const degree = (document.getElementById(`degree${i}`) as HTMLInputElement)
      .value;
    const duration = (
      document.getElementById(`duration${i}`) as HTMLInputElement
    ).value;
    if (university && degree && duration) {
      education += `<li><strong>${university}</strong> <br/>${degree} <br/> <span class="year">(${duration})</span></li>`;
    }
  }

  let experience = "";
  for (let i = 1; i <= experienceCount; i++) {
    const company = (document.getElementById(`company${i}`) as HTMLInputElement)
      .value;
    const jobTitle = (
      document.getElementById(`jobTitle${i}`) as HTMLInputElement
    ).value;
    const expDuration = (
      document.getElementById(`expDuration${i}`) as HTMLInputElement
    ).value;
    if (company && jobTitle && expDuration) {
      experience += `<li><strong>${company}</strong> <br/>${jobTitle} <br/> <span class="year"> (${expDuration}) </span></li>`;
    }
  }

  let skills = "";
  for (let i = 1; i <= skillCount; i++) {
    const skillValue = (
      document.getElementById(`skill${i}`) as HTMLInputElement
    ).value;
    if (skillValue) {
      skills += `<li>${skillValue}</li>`;
    }
  }

  let languages = "";
  for (let i = 1; i <= languageCount; i++) {
    const languageValue = (
      document.getElementById(`language${i}`) as HTMLInputElement
    ).value;
    if (languageValue) {
      languages += `<li>${languageValue}</li>`;
    }
  }

  let projects = "";
  for (let i = 1; i <= projectCount; i++) {
    const projectNameElement = document.getElementById(
      `projectName${i}`
    ) as HTMLInputElement | null;
    const projectUrlElement = document.getElementById(
      `projectUrl${i}`
    ) as HTMLInputElement | null;

    if (projectNameElement && projectUrlElement) {
      const projectName = projectNameElement.value;
      const projectUrl = projectUrlElement.value;

      console.log(
        `Found elements for index ${i}: Name: ${projectName}, URL: ${projectUrl}`
      );

      if (projectName && projectUrl) {
        projects += `<li><strong>${projectName}</strong> - <a href="${projectUrl}" target="_blank">${projectUrl}</a></li>`;
      }
    } else {
      console.error(
        `Element with ID projectName${i} or projectUrl${i} not found.`
      );
    }
  }

  console.log("Name:", name);
console.log("Education:", education);
console.log("Experience:", experience);
console.log("Skills:", skills);
console.log("Projects:", projects);


  // Generate resume content
  resumePreview.innerHTML = `
    <div class="container"> 
      <div class="header"><h1>${name}</h1>
      <h2>${title}</h2>
<img src="${profileImage}" alt="Profile Image" class="profile-img" />
      
      
      </div>
      <div class="contact-info">
        <p>📞 ${phone} | 📍 ${location}</p>

         <p><i class="fab fa-linkedin"></i> <a href="${linkedin}" target="_blank">${linkedin}</a> 
         <i class="fab fa-github"></i> <a href="${github}" target="_blank">${github}</a></p>

        <p>Email: ✉️ <a href="mailto:${email}">${email}</a></p>

       
      </div>

      <div class="about-me">
      <h3>About Me:</h3>
      <p>${about}</p>
      </div>

      <section class="languages-section">
        <h3><i class="fas fa-language"></i> Languages:</h3>
        <ul class="languages-list">
${languages}
        </ul>
      </section>

      <section class="skills-section">
        <h3><i class="fas fa-cogs"></i> Skills:</h3>
        <ul class="skills-list">
${skills}
        </ul>
      </section>

       <section class="education-section section">
        <h3><i class="fas fa-graduation-cap"></i> Education:</h3>
        <ul class="line">
        ${education}
        </ul>
      </section>


<section class="experience-section section">
  <h3><i class="fas fa-briefcase"></i> Experience:</h3>
  <ul class="line">
${experience}    
  </ul>
</section>

<section class="projects-section section" id="projectsList">
  <h3><i class="fas fa-folder-open"></i> Projects:</h3>
  <ul class="line">
  ${projects}
  </ul>
</section>


    </div>
  `;



  // Generate and display resume download link
  const downloadLink = document.createElement("a");
  downloadLink.href = `data:text/html;charset=utf-8,${encodeURIComponent(
    resumePreview.innerHTML
  )}`;
  downloadLink.download = "resume.html";
  downloadLink.textContent = "Download Resume";
  downloadLink.classList.add("download-link");
  resumePreview.appendChild(downloadLink);
});
