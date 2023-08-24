/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

import {AiFillHtml5} from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoSass,
  BiLogoDocker,
  BiLogoPython,
  BiLogoFirebase,
  BiLogoAws,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoJavascript
} from "react-icons/bi";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tharuneshwar S",
  title: "Hi all, I'm Tharuneshwar",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter / Flask-Django and some other cool libraries and frameworks."
  ),
  resumeLink:
    "##", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/THARUNESHWAR-369",
  linkedin: "https://www.linkedin.com/in/tharuneshwar-s/",
  gmail: "itstharuneshwar@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/22241040/tharuneshwar-s",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: <AiFillHtml5 />
    },
    {
      skillName: "css3",
      fontAwesomeClassname: <BiLogoCss3 />
    },
    {
      skillName: "sass",
      fontAwesomeClassname: <BiLogoSass />
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: <BiLogoJavascript />
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: <BiLogoReact />
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: <BiLogoPostgresql />
    },
    {
      skillName: "aws",
      fontAwesomeClassname: <BiLogoAws />
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: <BiLogoFirebase />
    },
    {
      skillName: "python",
      fontAwesomeClassname: <BiLogoPython />
    },
    {
      skillName: "docker",
      fontAwesomeClassname: <BiLogoDocker />
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manakula Vinayagar Institute of Technology",
      logo: require("./assets/images/mvit.png"),
      subHeader: "Bachelors in Computer Science",
      duration: "2021 - 2025"
    },
    {
      schoolName: "Kendriya Vidyalaya No.2, Pondicherry University",
      logo: require("./assets/images/kv.png"),
      subHeader: "10+2",
      duration: "April 2020 - April 2021"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",
      company: "CodSoft",
      companylogo: require("./assets/images/codesoft.jpeg"),
      date: "July 2023 – Aug 2023",
      certificateLink:
        "https://drive.google.com/file/d/11p9rE3dis3q2eFffnmkdzsNhz_PrcfoZ/view?usp=sharing",
      githubRepoLink: "https://github.com/THARUNESHWAR-369/CODSOFT"
    },
    {
      role: "Web Development Intern",
      company: "Prodigy",
      companylogo: require("./assets/images/prodigy.jpeg"),
      date: "Aug 2023 – Sep 2023",
      certificateLink: null,
      githubRepoLink: "https://github.com/THARUNESHWAR-369"
    },
    {
      role: "Web Development Intern",
      company: "Oasis Infobyte",
      companylogo: require("./assets/images/oasis.jpeg"),
      date: "Aug 2023 – Sep 2023",
      certificateLink: null,
      githubRepoLink: "https://github.com/THARUNESHWAR-369"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/movieverse.png"),
      projectName: "MovieVerse",
      projectDesc:
        "Movie Verse is a ReactJS web app for movie search, details, reviews, and recommendations. It uses the TMDB API for movie data, incorporates sentiment analysis for reviews, and offers personalized suggestions. The app is hosted on Firebase Hosting and integrates with GitHub Actions for deployment.",
      techStack:
        "Python | Machine Learning | ReactJs | tmdb-api | sentiment-classification | Tailwindcss | python-flask-api",

      footerLink: [
        {
          name: "Repo",
          url: "https://github.com/THARUNESHWAR-369/movie-verse"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ss.png"),
      projectName: "Stream Saver",
      projectDesc:
        "Stream Saver is a Flask-Python web app that enables users to download YouTube videos. y leveraging the Pytube library, users can search for their desired videos and effortlessly save them for offline access. Stream Saver simplifies the process of video downloading, enhancing the convenience and flexibility of online content consumption.",
      techStack:
        "jquery-ajax | html-css-javascript | python-flask-application | pytube",
      footerLink: [
        {
          name: "Repo",
          url: "https://github.com/THARUNESHWAR-369/stream-saver"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IBM: Machine Learning with Python",

      image: require("./assets/images/IBM.jpg"),
      imageAlt: "IBM ML",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/4bacf8e5-2fa8-40d8-9599-25695a78c99e"
        }
      ]
    },
    {
      title: "Datacamp: Introduction to Python",
      image: require("./assets/images/datacamp.png"),
      imageAlt: "datacamp",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.datacamp.com/statement-of-accomplishment/course/d250f73e07d152718b8c63e7cc10afa36aed1144"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
