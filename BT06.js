class Job {
    constructor(id, title, description, completed) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
    }
}
  
let jobs = [];
  
function addJob() {
    let id = prompt("Enter job ID:");
    let title = prompt("Enter job title:");
    let description = prompt("Enter job description:");
    let completed = prompt("Enter job completion status (true/false):");
    jobs.push(new Job(id, title, description, completed));
}
  
function displayJobs() {
    for (let i = 0; i < jobs.length; i++) {
      console.log(`Job ${i + 1}:`);
      console.log(`ID: ${jobs[i].id}`);
      console.log(`Title: ${jobs[i].title}`);
      console.log(`Description: ${jobs[i].description}`);
      console.log(`Completed: ${jobs[i].completed}`);
      console.log();
    }
}
  
function searchJob() {
    let id = prompt("Enter job ID to search:");
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].id === id) {
        console.log(`Job found:`);
        console.log(`ID: ${jobs[i].id}`);
        console.log(`Title: ${jobs[i].title}`);
        console.log(`Description: ${jobs[i].description}`);
        console.log(`Completed: ${jobs[i].completed}`);
        console.log();
        return;
      }
    }
    console.log(`Job with ID "${id}" not found.`);
}
  
while (true) {
    let choice = prompt(`Choose an option:\n1. Add a job\n2. Display jobs\n3. Search job by ID\n4. Exit`);
    switch (choice) {
      case "1":
        addJob();
        break;
      case "2":
        displayJobs();
        break;
      case "3":
        searchJob();
        break;
      case "4":
        console.log("Exiting program...");
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }
}