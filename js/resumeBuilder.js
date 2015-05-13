var name = "Jenny Crawshaw";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Biography Object
var bio = {
  "name" : "Jenny Crawshaw",
  "role" : "Web Devleoper",
  "contacts" : {
    "email": "jennycrawshaw@gmail.com",
    "mobile": "(727) 967-2089",
    "location": "New Port Richey, FL 34655",
    "linkedin": "https://www.linkedin.com/in/jennifercrawshaw",
    "github": "https://github.com/Jcrawshaw"
    },
  "welcomeMessage" : "Hello! I am a web developer in the Tampa area! I work on both the frontend or backend of websites and applications.",
  "biopic" : "images/Jennyclose.jpg",
  "skills" :  ["Ruby", "Rails", "HTML5", "CSS", "Bootstrap", "Javascript", "jQuery" ]
}

//Work Object
var work = {
  "jobs": [
    {
      "employer": "Flex One Trinity",
      "title": "Owner-Operator",
      "location": "1653 Davenport Drive, Trinity, FL 34655",
      "dates": "January 2011 through present",
      "description": "Owner-Operator of a private personal training studio.  In charge of content management across web and social media, using Wordpress, Facebook, and Instagram.  Designed marketing content and strategies for local and social media platforms."
    },
    {
      "employer": "TrailRunFinder.com",
      "title": "Web Developer",
      "location": "3421 Ellington Way, New Port Richey, FL 34655",
      "dates": "March 2015 through present",
      "description": "Developed a web application and database using Ruby on Rails. Designed the U/X to present a social sharing application using HTML, CSS and Bootstrap. Built web presence through social media marketing."
    }
  ]
}
  
//Education Object
var education = {
  "schools": [
    {
      "name": "Bloc",
      "location": "San Francisco, CA, US",
      "studies": "Web Development",
      "dates": "2015"
    },
    {
      "name": "Kennesaw State University",
      "location": "Kennesaw, GA, US",
      "studies": "Undergraduate",
      "dates": "1998"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "dates": "4/2015",
      "url": "https://udacity.com/nanodegree"
    }
  ]
}

//Projects Object
var projects = {
  "projects": [
    {
      "title": "TrailRunFinder",
      "dates": "4/2015",
      "description": "A web application created for trail runners to search for U.S. running trails, and add their own trails to the database.",
      "images": ["images/croomsign.jpg"]
    },
    {
      "title": "Blocmarks",
      "dates": "1/2015 - 3/2015",
      "description": "A social bookmarking application utilizing email integration.",
      "images": ["images/bookmark.png"]
    },
    {
      "title": "Trinity Trail Runners",
      "dates": "3/2014 - 6/2014",
      "description": "A website for a local running group featuring their photo galleries.",
      "images": ["images/TTRlogo.png"]
    }
  ]
}



if (bio.skills.length > 0){

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);

}

function displayWork() {
for (job in work.jobs) {
  // create new div for work experience
  $("#workExperience").append(HTMLworkStart);

  // employer and title info
  var formattedEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);
}
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY; 
  logClicks(x,y); 
});

console.log(name);

//Internationalize the Name format//
function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);


projects.display = function() {
  for (project in projects.projects) {
  $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);

  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);

  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

  if (projects.projects[project].images.length > 0) {
    for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
  }
};
projects.display();


//Adding google map
$("#mapDiv").append(googleMap);