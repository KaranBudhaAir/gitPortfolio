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
  username: "Karan Budha Air",
  title: "Hello I'm Karan Budha Air",
  subTitle: emoji(
    " I’m experienced software developer with a background in artificial intelligence 🚀"
  ),
  resumeLink:"/resume.docx", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KaranBudhaAir",
  linkedin: "https://www.linkedin.com/in/karan-budha-air",
  gmail: "karan.budha.air.0316@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/budhaayer",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I help businesses to build scalable data driven solutions that utilises Machine Learning, Big Data and Complex Algorithms",
  skills: [
    emoji(
  "⚡ Develop scalable data models and interactive dashboards using SQL and Power BI to support strategic decision-making."
),
    emoji(
  "⚡ Design and implement end-to-end data pipelines that transform raw data into actionable business insights."
),

emoji(
  "⚡ Integrate APIs and cloud platforms (Azure/AWS) to enable secure, automated, and efficient data workflows."
)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Machine Learning",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "Artificial Intelligence",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-bar"
  },

  // 🏗 Data Engineering
  {
    skillName: "Data Engineering",
    fontAwesomeClassname: "fas fa-cogs"
  },
  {
    skillName: "Big Data",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "Data Warehousing",
    fontAwesomeClassname: "fas fa-warehouse"
  },
  {
    skillName: "ETL",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "ETL Pipeline Development",
    fontAwesomeClassname: "fas fa-stream"
  },

  // 🌐 Web Development
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "REST API",
    fontAwesomeClassname: "fas fa-exchange-alt"
  },
  
  
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
  
  schoolName: "Flinders University, Australia",
  logo: require("./assets/images/flinders.png"),
  subHeader: "Master of Science",
  duration: "2022 - 2024",
  desc: "Forecasting Geophysical Hazards Using Machine Learning.",
  descBullets: [
    "Applied LSTM and Random Forest models to VLF signal data for seismic event forecasting",
    "Performed data preprocessing, feature engineering, and model evaluation using Python",
    "Visualized trends and model outputs using Matplotlib and Seaborn to support interpretation"
  ]
    },
    {
  schoolName: "National College of Engineering, Lalitpur, Nepal",
  logo: require("./assets/images/nce.png"),
  subHeader: "Bachelor of Engineering",
  duration: "2011 - 2018",
  desc: "IoT-Based Water Level Detection System.",
  descBullets: [
    "Engineered a real-time alert system using ultrasonic sensors and GSM modules",
    "Programmed microcontrollers in C for automation and wireless signal transmission",
    "Designed a scalable monitoring solution suitable for both household and industrial applications"
  ]
}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
      {
  role: "Data Analytics Virtual Industry Experience ",
  company: "Commonwealth Bank (Forage)",
  companylogo: require("./assets/images/commBank.png"),
  date: "February 2026",
  desc: "Completed Commonwealth Bank job simulation focused on data analytics and business insights.",
  descBullets: [
    "Analyzed home mortgage datasets in Excel to identify potential target customers for CommBank’s Green Loan program",
  "Applied filtering, sorting, and segmentation techniques to evaluate borrowers based on LTV ratios, income levels, property values, and demographic indicators",
  "Identified and quantified qualified sales leads by comparing multiple eligibility criteria combinations",
  "Created data visualizations and charts in Excel to highlight trends, patterns, and high-potential customer segments",
  "Developed a concise 5–7 slide PowerPoint presentation communicating key insights, risks, and business recommendations",
  "Provided transparent commentary on data limitations and quality considerations to support confident decision-making"
  ]

    },
    {
  role: "Data Analytics & Forensic Technology Virtual Industry Experience ",
  company: "Deloitte (Forage)",
  companylogo: require("./assets/images/deloitte.png"),
  date: "February 2026",
  desc: "Completed Deloitte job simulation focused on data analytics and forensic technology applications.",
  descBullets: [
    "Analyzed structured datasets using Excel to classify data and extract meaningful business insights",
    "Designed and developed an interactive dashboard in Tableau to visualize key performance indicators",
    "Interpreted analytical findings to support client-focused decision making",
    "Applied data storytelling techniques to communicate insights clearly and effectively"
  ]
},
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
  {
    title: "Commonwealth Bank – Data Analytics Virtual Experience",
    subtitle:
      "Completed CommBank Green Loan data analysis simulation, identifying qualified customer segments using Excel and presenting insights via PowerPoint.",
    image: require("./assets/images/comm_bank_logo.png"),
    imageAlt: "Commonwealth Bank Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1-RHJnomhJrcRtZmYp8C8ScCBpLsAw3Ge/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Deloitte – Data Analytics & Forensic Technology Simulation",
    subtitle:
      "Completed Deloitte job simulation involving Excel-based data classification and Tableau dashboard development for client-focused analysis.",
    image: require("./assets/images/deloitte_logo.png"),
    imageAlt: "Deloitte Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/114YBD6CsBJsRTlS70_fbpSLTJsKTg5u3/view?usp=drive_link"
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
  display: false// Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61-415 230 979",
  email_address: "karan.budha.air.0316@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
