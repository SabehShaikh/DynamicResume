// Get form elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumePreview = document.getElementById("resumePreview") as HTMLElement;

const addEducationBtn = document.getElementById(
  "addEducationBtn"
) as HTMLButtonElement;
const educationSection = document.getElementById(
  "educationSection"
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

const addProjectToggle = document.getElementById(
  "addProjectToggle"
) as HTMLInputElement;
const projectsSection = document.getElementById(
  "projectsSection"
) as HTMLElement;
const addProjectBtn = document.getElementById(
  "addProjectBtn"
) as HTMLButtonElement;

// Counters for education, experience, skills, and projects
let educationCount = 0;
const maxEducationEntries = 2;

let experienceCount = 0;
const maxExperienceEntries = 3;

let skillCount = 0;
const maxSkillEntries = 8;

let projectCount = 0;
const maxProjectEntries = 3;

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
    <input type="text" id="skill${index}" placeholder="Enter skill" required />
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
    console.log(`Appended project field with index: ${projectCount}`);
  } else {
    alert("Maximum project entries reached");
  }
});


function removeEntry(button: HTMLButtonElement, type: string) {
  const entry = button.parentElement as HTMLElement;
  entry.remove();

  if (type === "education") {
    educationCount--;
  } else if (type === "experience") {
    experienceCount--;
  } else if (type === "skill") {
    skillCount--;
  } else if (type === "project") {
    projectCount--;
  }
}

// Event listener for form submission
resumeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const location = (document.getElementById("location") as HTMLInputElement)
    .value;
  const about = (document.getElementById("about") as HTMLTextAreaElement).value;


const usernameElement = document.getElementById("username") as HTMLInputElement;
const username = usernameElement.value;
var uniquePath = `resume/${username.replace(/\s+/g, '_')}_resume.html`;


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
      education += `<li><strong>${university}</strong> <br/>${degree} <br/>(${duration})</li>`;
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
      experience += `<li><strong>${company}</strong> <br/>${jobTitle} <br/>  (${expDuration})</li>`;
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

  

  // Collecting project data
let projects = "";
for (let i = 1; i <= projectCount; i++) {
 
  const projectNameElement = document.getElementById(`projectName${i}`) as HTMLInputElement | null;
  const projectUrlElement = document.getElementById(`projectUrl${i}`) as HTMLInputElement | null;

 
  if (projectNameElement && projectUrlElement) {
    const projectName = projectNameElement.value;
    const projectUrl = projectUrlElement.value;


    console.log(`Found elements for index ${i}: Name: ${projectName}, URL: ${projectUrl}`);

    if (projectName && projectUrl) {
      projects += `<li><strong>${projectName}</strong> - <a href="${projectUrl}" target="_blank">${projectUrl}</a></li>`;
    }
  } else {
    console.error(`Element with ID projectName${i} or projectUrl${i} not found.`);
  }
}


  

  resumePreview.innerHTML = `

    <div class="header">
      <h1>${name}</h1>
      <h2>Resume</h2>
    </div>




    <div class="contact-info">
      <p>Email: <a href="mailto:${email}">${email}</a> | Location: ${location}</p>
    </div>
    <hr/>
    
    <div class="about-me">
      <h3>About Me:</h3>
      <p>${about}</p>
    </div>

    <hr/>

    <section class="education-section section">
      <h3>Education:</h3>
      <div class="right"> 
      <ul>${education}</ul>
      </div>
    </section>

       <hr/>
    <section class="experience-section section">
      <h3>Work Experience:</h3>
       <div class="right"> 
      <ul>${experience}</ul>
      </div>
    </section>

       <hr/>

    <section class="skills-section">
      <h3>Skills:</h3>
      <ul class="skills-list">${skills}</ul>
    </section>

       <hr/>

     <section class="projects-section section">
      <h3>Projects:</h3>
      <ul class="right">${projects}</ul>
    </section>

    

  `;
  const downloadLink = document.createElement("a");
downloadLink.href = `data:text/html;charset=utf-8,${encodeURIComponent(resumePreview.innerHTML)}`
downloadLink.download = uniquePath;

downloadLink.textContent = "Download Resume";
downloadLink.classList.add("download-link");


  resumePreview.appendChild(downloadLink);

  resumePreview.style.display = "block";
});



// Toggle Projects Section
addProjectToggle.addEventListener("change", () => {
  if (addProjectToggle.checked) {
    projectsSection.style.display = "block";
  } else {
    projectsSection.style.display = "none";
  }
});

