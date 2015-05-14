

//Biography Object
var bio = {
  "name" : "Jenny Crawshaw",
  "role" : "Web Devleoper",
  "contacts" : {
    "email": "jennycrawshaw@gmail.com",
    "mobile": "(727) 967-2089",
    "location": "Tampa, FL",
    "linkedin": "https://www.linkedin.com/in/jennifercrawshaw",
    "github": "Jcrawshaw"
    },
  "welcomeMessage" : "Hello! I am a web developer in the Tampa area! I work on both the frontend or backend of websites and applications using my background in Ruby on Rails, HTML, CSS and JavaScript. I enjoy learning, and am actively adding more knowlegde to my technical skill set.",
  "biopic" : "images/Jennyclose.jpg",
  "skills" :  ["Ruby", "Rails", "HTML5", "CSS", "Bootstrap", "Javascript", "jQuery" ],
  "display": function() {
    //display Header info
    var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedHeaderRole);
    var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedHeaderName);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

    //display header and footer contact info
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedmobile);
    $("#footerContacts").append(formattedmobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedemail);
    $("#footerContacts").append(formattedemail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedgithub);
    $("#footerContacts").append(formattedgithub);
    var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    $("#topContacts").append(formattedlinkedin);
    $("#footerContacts").append(formattedlinkedin);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedlocation);

     $("#header").append(HTMLskillsStart);
      for (skill in bio.skills){
          $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
      }
  }
};

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
  ],
  "display": function() {

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
};
  
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
  ],
  "display": function() {

    for (school in education.schools) {
      // create new div for education
      $("#education").append(HTMLschoolStart);

      // School info
      var formattedSchoolName =  HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedSchoolName);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].studies);
      $(".education-entry:last").append(formattedschoolDegree);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedSchoolDates);
    };


    for (onlineCourse in education.onlineCourses) {
      //create new div for online education
      $(".education-entry:last").append(HTMLonlineClasses);
      // Online class info
      var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
      $(".education-entry:last").append(formattedonlineTitle);

      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      $(".education-entry:last").append(formattedonlineSchool);

      var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
      $(".education-entry:last").append(formattedonlineDates);

      var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
      $(".education-entry:last").append(formattedonlineURL);
    }
  }
};

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
  ],
  "display": function() {
    for (project in projects.projects) {
      //create new div for projects section
      $("#projects").append(HTMLprojectStart);

      //project info
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
  }
};


//Call all functions to display data

bio.display();
work.display();
projects.display();
education.display();


//Click location information to the console
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


//Adding google map
$("#mapDiv").append(googleMap);