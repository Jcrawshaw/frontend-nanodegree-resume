var name = "Jenny Crawshaw";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
  "name" : "Jenny Crawshaw",
  "role" : "Web Devleoper",
  "contact" : [
    {
    "email": "jennycrawshaw@gmail.com",
    "mobile": "(727) 967-2089",
    "linkedin": "https://www.linkedin.com/in/jennifercrawshaw",
    "github": "https://github.com/Jcrawshaw"
    }
    ],
  "welcome" : "Hello! I am a web developer!",
  "picture" : "images/Jennyclose.jpg",
  "skills" :  ["Ruby", "Rails", "HTML5", "CSS", "Javascript" ]
}


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
  

var education = {
  "schools": [
    {
      "name": "Bloc",
      "city": "San Francisco, CA, US",
      "studies": "Web Development"
    },
    {
      "name": "Kennesaw State University",
      "city": "Kennesaw, GA, US",
      "studies": "Undergraduate"
    }
  ],
  "online courses": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity",
      "dates": "4/2015",
      "url": "https://udacity.com/nanodegree"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "TrailRunFinder",
      "dates": "4/2015",
      "description": "A web application created for trail runners to search for U.S. running trails, and add their own trails to the database.",
      "image": "http://www.trailrunfinder.com"
    },
    {
      "title": "Blocmarks",
      "dates": "1/2015 - 3/2015",
      "description": "A social bookmarking application utilizing email integration.",
      "image": "https://jenny-blocmarks.herokuapp.com/"
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