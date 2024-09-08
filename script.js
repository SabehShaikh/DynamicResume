// Get form elements
var resumeForm = document.getElementById("resumeForm");
var resumePreview = document.getElementById("resumePreview");
var addEducationBtn = document.getElementById("addEducationBtn");
var educationSection = document.getElementById("educationSection");
var addExperienceBtn = document.getElementById("addExperienceBtn");
var experienceSection = document.getElementById("experienceSection");
var addSkillBtn = document.getElementById("addSkillBtn");
var skillsContainer = document.getElementById("skillsContainer");
var addProjectToggle = document.getElementById("addProjectToggle");
var projectsSection = document.getElementById("projectsSection");
var addProjectBtn = document.getElementById("addProjectBtn");
// Counters for education, experience, skills, and projects
var educationCount = 0;
var maxEducationEntries = 2;
var experienceCount = 0;
var maxExperienceEntries = 3;
var skillCount = 0;
var maxSkillEntries = 8;
var projectCount = 0;
var maxProjectEntries = 3;
// Function to create a new education entry field
function createEducationField(index) {
    var educationField = document.createElement("div");
    educationField.className = "education-entry";
    educationField.innerHTML = "\n    <label for=\"university".concat(index, "\">University/College/School Name:</label>\n    <input type=\"text\" id=\"university").concat(index, "\" placeholder=\"Enter name\" required />\n    <label for=\"degree").concat(index, "\">Degree/Certificate Name:</label>\n    <input type=\"text\" id=\"degree").concat(index, "\" placeholder=\"Enter degree/certificate\" required />\n    <label for=\"duration").concat(index, "\">Duration:</label>\n    <input type=\"text\" id=\"duration").concat(index, "\" placeholder=\"Enter duration (e.g. 2018-2022)\" required />\n    <button type=\"button\" class=\"close-btn\" onclick=\"removeEntry(this, 'education')\">\u00D7</button>\n  ");
    return educationField;
}
// Function to create a new experience entry field
function createExperienceField(index) {
    var experienceField = document.createElement("div");
    experienceField.className = "experience-entry";
    experienceField.innerHTML = "\n    <label for=\"company".concat(index, "\">Company Name:</label>\n    <input type=\"text\" id=\"company").concat(index, "\" placeholder=\"Enter company name\" required />\n    <label for=\"jobTitle").concat(index, "\">Job Title:</label>\n    <input type=\"text\" id=\"jobTitle").concat(index, "\" placeholder=\"Enter job title\" required />\n    <label for=\"expDuration").concat(index, "\">Duration:</label>\n    <input type=\"text\" id=\"expDuration").concat(index, "\" placeholder=\"Enter duration (e.g. 2019-2021)\" required />\n    <button type=\"button\" class=\"close-btn\" onclick=\"removeEntry(this, 'experience')\">\u00D7</button>\n  ");
    return experienceField;
}
// Function to create a new skill entry field
function createSkillField(index) {
    var skillField = document.createElement("div");
    skillField.className = "skill-entry";
    skillField.innerHTML = "\n    <label for=\"skill".concat(index, "\">Skill ").concat(index, ":</label>\n    <input type=\"text\" id=\"skill").concat(index, "\" placeholder=\"Enter skill\" required />\n    <button type=\"button\" class=\"close-btn\" onclick=\"removeEntry(this, 'skill')\">\u00D7</button>\n  ");
    return skillField;
}
// Function to create a new project entry field// Function to create project fields dynamically
function createProjectField(index) {
    var projectField = document.createElement("div");
    projectField.className = "project-entry";
    projectField.innerHTML = "\n    <label for=\"projectName".concat(index, "\">Project Name:</label>\n    <input type=\"text\" id=\"projectName").concat(index, "\" placeholder=\"Enter project name\" required />\n    \n    <label for=\"projectUrl").concat(index, "\">Project URL:</label>\n    <input type=\"url\" id=\"projectUrl").concat(index, "\" placeholder=\"Enter project URL\" required />\n\n    <button type=\"button\" class=\"close-btn\" onclick=\"removeEntry(this, 'project')\">\u00D7</button>\n  ");
    return projectField;
}
// Event listener to add education fields
addEducationBtn.addEventListener("click", function () {
    if (educationCount < maxEducationEntries) {
        educationCount++;
        var educationField = createEducationField(educationCount);
        educationSection.insertBefore(educationField, addEducationBtn);
    }
    else {
        alert("Maximum education entries reached");
    }
});
// Event listener to add experience fields
addExperienceBtn.addEventListener("click", function () {
    if (experienceCount < maxExperienceEntries) {
        experienceCount++;
        var experienceField = createExperienceField(experienceCount);
        experienceSection.insertBefore(experienceField, addExperienceBtn);
    }
    else {
        alert("Maximum experience entries reached");
    }
});
// Event listener to add skill fields
addSkillBtn.addEventListener("click", function () {
    if (skillCount < maxSkillEntries) {
        skillCount++;
        var skillField = createSkillField(skillCount);
        skillsContainer.appendChild(skillField);
    }
    else {
        alert("Maximum skill entries reached");
    }
});
// Event listener to add project fields
addProjectBtn.addEventListener("click", function () {
    if (projectCount < maxProjectEntries) {
        projectCount++;
        var projectField = createProjectField(projectCount);
        projectsSection.appendChild(projectField);
        console.log("Appended project field with index: ".concat(projectCount));
    }
    else {
        alert("Maximum project entries reached");
    }
});
// Function to remove an entry and update the respective count
function removeEntry(button, type) {
    var entry = button.parentElement;
    entry.remove();
    if (type === "education") {
        educationCount--;
    }
    else if (type === "experience") {
        experienceCount--;
    }
    else if (type === "skill") {
        skillCount--;
    }
    else if (type === "project") {
        projectCount--;
    }
}
// Event listener for form submission
resumeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("location")
        .value;
    var about = document.getElementById("about").value;
    var usernameElement = document.getElementById("username");
    var username = usernameElement.value;
    var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_resume.html");
    var education = "";
    for (var i = 1; i <= educationCount; i++) {
        var university = document.getElementById("university".concat(i)).value;
        var degree = document.getElementById("degree".concat(i))
            .value;
        var duration = document.getElementById("duration".concat(i)).value;
        if (university && degree && duration) {
            education += "<li><strong>".concat(university, "</strong> <br/>").concat(degree, " <br/>(").concat(duration, ")</li>");
        }
    }
    var experience = "";
    for (var i = 1; i <= experienceCount; i++) {
        var company = document.getElementById("company".concat(i))
            .value;
        var jobTitle = document.getElementById("jobTitle".concat(i)).value;
        var expDuration = document.getElementById("expDuration".concat(i)).value;
        if (company && jobTitle && expDuration) {
            experience += "<li><strong>".concat(company, "</strong> <br/>").concat(jobTitle, " <br/>  (").concat(expDuration, ")</li>");
        }
    }
    var skills = "";
    for (var i = 1; i <= skillCount; i++) {
        var skillValue = document.getElementById("skill".concat(i)).value;
        if (skillValue) {
            skills += "<li>".concat(skillValue, "</li>");
        }
    }
    // Collecting project data
    var projects = "";
    for (var i = 1; i <= projectCount; i++) {
        // Cast to HTMLInputElement to ensure the 'value' property is available
        var projectNameElement = document.getElementById("projectName".concat(i));
        var projectUrlElement = document.getElementById("projectUrl".concat(i));
        // Check if elements are found
        if (projectNameElement && projectUrlElement) {
            var projectName = projectNameElement.value;
            var projectUrl = projectUrlElement.value;
            // Debugging output
            console.log("Found elements for index ".concat(i, ": Name: ").concat(projectName, ", URL: ").concat(projectUrl));
            if (projectName && projectUrl) {
                projects += "<li><strong>".concat(projectName, "</strong> - <a href=\"").concat(projectUrl, "\" target=\"_blank\">").concat(projectUrl, "</a></li>");
            }
        }
        else {
            console.error("Element with ID projectName".concat(i, " or projectUrl").concat(i, " not found."));
        }
    }
    // Debugging output for the final list
    console.log("Projects List: ".concat(projects));
    resumePreview.innerHTML = "\n\n    <div class=\"header\">\n      <h1>".concat(name, "</h1>\n      <h2>Resume</h2>\n    </div>\n\n\n\n\n    <div class=\"contact-info\">\n      <p>Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a> | Location: ").concat(location, "</p>\n    </div>\n    <hr/>\n    \n    <div class=\"about-me\">\n      <h3>About Me:</h3>\n      <p>").concat(about, "</p>\n    </div>\n\n    <hr/>\n\n    <section class=\"education-section section\">\n      <h3>Education:</h3>\n      <div class=\"right\"> \n      <ul>").concat(education, "</ul>\n      </div>\n    </section>\n\n       <hr/>\n    <section class=\"experience-section section\">\n      <h3>Work Experience:</h3>\n       <div class=\"right\"> \n      <ul>").concat(experience, "</ul>\n      </div>\n    </section>\n\n       <hr/>\n\n    <section class=\"skills-section\">\n      <h3>Skills:</h3>\n      <ul class=\"skills-list\">").concat(skills, "</ul>\n    </section>\n\n       <hr/>\n\n     <section class=\"projects-section section\">\n      <h3>Projects:</h3>\n      <ul class=\"right\">").concat(projects, "</ul>\n    </section>\n\n    \n\n  ");
    var downloadLink = document.createElement("a");
    downloadLink.href = "data:text/html;charset=utf-8,".concat(encodeURIComponent(resumePreview.innerHTML));
    downloadLink.download = uniquePath;
    downloadLink.textContent = "Download Resume";
    downloadLink.classList.add("download-link");
    resumePreview.appendChild(downloadLink);
    resumePreview.style.display = "block";
});
// Toggle Projects Section
addProjectToggle.addEventListener("change", function () {
    if (addProjectToggle.checked) {
        projectsSection.style.display = "block";
    }
    else {
        projectsSection.style.display = "none";
    }
});
