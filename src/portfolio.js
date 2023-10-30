/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Madhana Mohit Konduru",
  title: "Hi all, I'm MK",
  subTitle: emoji(
    "Data Scientist 🚀 with a robust foundation in machine learning, data analysis, and data engineering. Demonstrated proficiency in delivering meaningful solutions at institutions like Cal State Long Beach and Tata Consultancy Services. Skilled in deploying advanced algorithms, optimizing data workflows, and developing innovative web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Enpl3kTGOjHtWDHp6k0WHQlCD9BgW2eP/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/madhanamohitkonduru",
  linkedin: "https://www.linkedin.com/in/mohitkonduru/",
  gmail: "mohit.kondur1998@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "Programming Languages:",
    "Python • Java • R • C • C++",
    // "-----",
    "Data Manipulation and Analysis:",
    "Pandas • NumPy • PySpark",
    // "------------",
    "Machine Learning & AI:",
    "MLlib • MLflow • Scikit-Learn • TensorFlow • Keras",
    // "---------------------",
    "Web & App Development:",
    "HTML • CSS • JavaScript • Bootstrap • Dash • Dash Enterprise • Django • Flask • Android Studio",
    "Data:",
    "SQL • Databricks • IBM Infosphere DataStage • Netezza • DB2 • MySQL • Snowflake • Oracle • Hadoop",
    "Cloud  & Other Technologies:",
    "AWS • Docker • Control-M • Blockchain",
    "Version Control:",
    "Git • GitHub • Gitlab"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    //{
    //   // skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5 fa-spin"
    // },
    {
      // skillName: "css3",
      fontAwesomeClassname: "fas fa-code fa-spin"
    },
    {
      // skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database fa-spin"
    },
    {
      // skillName: "aws",
      fontAwesomeClassname: "fab fa-aws fa-spin"
    },
    {
      //   skillName: "firebase",
      fontAwesomeClassname: "fas fa-code-branch fa-spin"
    },
    {
      // skillName: "python",
      fontAwesomeClassname: "fab fa-python fa-spin"
    },
    {
      // skillName: "docker",
      fontAwesomeClassname: "fab fa-docker fa-spin"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State University, Long Beach",
      logo: require("./assets/images/CSULBLogoWHite.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - April 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Machine Learning - Deep Learning - Pattern Recognition - Natural Language Processing - Algorithms - Software Engineering"
      ]
    },
    {
      schoolName: "Anna University",
      logo: require("./assets/images/AnnaLogo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science & Engineering",
      duration: "August 2016 - April 2020",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Data Warehousing - Theory of Computing - Programming & Data Structures - Cryptography & Network Security - Operating Systems - Database Management Systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analytics & Data Engineering",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming & Data Structures",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Institutional Research & Analytics, CSULB",
      companylogo: require("./assets/images/lbwhite.jpg"),
      date: "February 2023 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Achieved 80-90% accuracy in retention, attrition, and admit yield prediction using Pandas and scikit-learn. ",
        "Transitioned to PySpark and MLlib, enhancing model accuracy by 5% with MLflow integration.",
        "Developed interactive Dash dashboards, accelerating data-driven decisions by 15% and improving visualization",
        " Collaborated on a student monitoring dashboard for CSULB, boosting student success metrics by 15%.",
        "Streamlined data transfers between Oracle and Databricks using Python, optimizing workflows."
      ]
    },
    {
      role: "Data Engineer",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcsLogo.jpeg"),
      date: "August 2020 – July 2022",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Successfully led the migration of 500+ assets from Netezza to Snowflake, achieving a 40% faster query response and better data accuracy.",
        "Automated ETL processes with Python, SQL, and DataStage, cutting manual efforts by 60% and enhancing data accuracy by 25%.",
        "Developed a Python validation framework, bolstering data integrity by 25% and reaching a 95% data completeness rate through thorough quality checks.",
        "Managed maintenance of a health screening mobile app during COVID, resolving both customer and application errors efficiently."
      ]
    },
    {
      role: "Andriod Developer Intern",
      company: "Uniq Technologies",
      companylogo: require("./assets/images/uniqLogo.jpeg"),
      date: "June 2018 – July 2018",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Developed a child-friendly quiz app using Android Studio and Firebase with add-on features.",
        "Engaged in code reviews, optimizing and refining application development.",
        "Conducted thorough testing, ensuring a smooth and successful production release."
      ]
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

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle: "Certifications and some cool stuff that I have done !",

  achievementsCards: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "Issued October 2023 by Stanford Online & DeepLearning.AI",
      image: require("./assets/images/stanford_online_logo.jpeg"),
      imageAlt: "Standord",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PNGAVVnNc-FEGJIBKvKndpUoOTL7PHh1/view?usp=drive_link"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Xperience BG Ready Python Certification",
      subtitle: "Issued August 2020 by Tata Consultancy Services",
      image: require("./assets/images/tcsLogo.jpeg"),
      imageAlt: "TCS",
      footerLink: [
        // {
        //   name: "C",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "IT Skill Ready in Security Pro",
      subtitle: "Issued December 2017 by Digiterati",
      image: require("./assets/images/digiterati.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1x6T5-L_rq7jpcBgJQnNdc5vot_XAbIAC/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let’s turn possibilities into partnerships. My Inbox is open for all.",
  number: "+1 562-243-2017",
  email_address: "mohit.kondur1998@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  contactInfo,
  isHireable
};
