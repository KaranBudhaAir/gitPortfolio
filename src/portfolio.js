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
    " I’m an experienced Data Analyst with a background in artificial intelligence."
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
  title: "What I do ?",
  subTitle: "I help businesses to build scalable data driven solutions that drives process automation and utilises machine learning, big data and complex algorithms.",
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



// Your top 3 proficient stacks/tech experience

const techStack = {
  };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
  role: "Data Science Intern ",
  company: "Visgrow",
  companylogo: require("./assets/images/visgrow2.png"),
  date: "Feb 2026 - Current",
  desc: "I am developing an AI-driven platform that generates professional resumes directly from user inputs, aimed at enhancing the student experience. Working closely with the Founder, I am designing workflows to convert raw data into structured, recruiter-ready formats and refined the AI output to ensure personalised, accurate, and actionable resume content.",
  ach:""

    } ,
     {
  role: "Delivery Partner ",
  company: "Uber Eats",
  companylogo: require("./assets/images/uber1.png"),
  date: "Jul 2022 - Current",
  desc: "I’m responsible for delivering orders on time while keeping customers informed and resolving issues efficiently. I manage tasks independently in a fast-paced environment, staying organised and adaptable to ensure consistent service quality.",
  ach:"Achievements:",
  descBullets: [
    
   "Successfully performed 2,000+ deliveries, ensuring timely and accurate service, which led to repeat customers.",
  "Generated 12% additional income through customer tips due to the high-quality service delivered.",
   "Maintained a consistent 4.6 out of 5-star customer satisfaction rating."
   

]

     
}
    ,{
  role: "Data Analyst Intern ",
  company: "Deloitte ",
  companylogo: require("./assets/images/deloitte_logo.png"),
  date: "Nov 2025 - Feb 2026",
  desc: "I was tasked with the problem solving with their number one cause of machine failure and I was successfully able to identify it and make the necessary recommendation. ",
  ach: "Achievements:",
   descBullets: [
    
  "Identified Seiko(Osaka) as the top downtime factory (~500 mins).",
"Laser Welders causing the most machine failures."


   ]
},
      {
  role: "Data Analyst Intern ",
  company: "Commonwealth Bank",
  companylogo: require("./assets/images/comm_logo2.png"),
  date: "Jul 2025 - Feb 2026",
  ach: "Achievements:",
  desc: "I was responsible to analysed complex customer financial dataset which led to identifying risk and performance issues.",
  descBullets: [
   
  "Identified the 30–50 customer segment contributing 62% of loan approvals.",
  "Improved approval rates by 28% through a strategic shift to mid-range properties.",
  "Reduced risk exposure by 18% via optimized customer and property selection."
]

    }
   
   ,
  {
  role: "Team Member ",
  company: "Coles",
  companylogo: require("./assets/images/coles2.png"),
  date: "Dec 2018 - Jan 2022",
  desc: "I was responsible for maintaining the fresh produce section, keeping items stocked, clean, and organised. I assisted customers in locating products, monitored quality, and ensured displays were appealing, while collaborating with team members to manage stock and maintain a safe, welcoming environment.",
  ach: "Achievements:",
  descBullets: [
     "Assisted 3,500+ customers in a friendly manner, which led to multiple positive customer feedback."
 ,"Recognised as an “Achiever”, within the first few months for outstanding performance."
,	"Assigned weekend shifts during peak morning hours due to my ability to work effectively under pressure."

 ]

    },

    {
  role: "Software Engineer ",
  company: "Code Fusion",
  companylogo: require("./assets/images/code_fusion2.png"),
  date: "Dec 2018 - Jan 2022",
  desc: "I was responsible for developing and maintaining full-stack applications with a focus on data-driven features, analytics, reporting, system performance, secure integrations, Agile collaboration, product improvements, and mentoring junior developers.",
   
  ach: "Achievements:",
  descBullets: [

  "Reduced application response time by 30% and server load by 20%, improving performance for 1,500+ users.",
  "Delivered 12+ production-ready features, enhancing functionality and user experience.",
  "Recognised by management for consistently delivering high-quality work ahead of schedule."

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

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY RECENT PROJECTS",
  projects: [
    {
      image: require("./assets/images/comm_project.png"),
      projectName: "Green Loan ",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit github repo",
          url: "https://github.com/KaranBudhaAir/CommBank"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/chat_bot.png"),
      projectName: "AI Chatbot",
     // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit github repo",
          url: "https://github.com/KaranBudhaAir/AIChatBot"
        }
      ]
    },
    {
      image: require("./assets/images/netflix.png"),
      projectName: "Netflix Data Engineering ",
      //projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit github repo",
          url: "https://github.com/KaranBudhaAir/dataEngineering/blob/main/ELT%20Project.png"
        }
        //  you can add extra buttons here.
      ]
    }

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Certifications 🏆 "),
  subtitle:
    " Certifications",

  achievementsCards: [
    
  
  {
    title: "Data Analyst Intern",
//     subtitle:[
//     <ul style={{ listStyleType: "disc", paddingLeft: "1.2em", fontSize: "18px" }}>
//   <li><strong>Identified Seiko (Osaka)</strong> as the top downtime factory (~500 mins).</li>
  
//   <li><strong>Found Laser Welders</strong> causing the most machine failures.</li>
  
//   <li><strong>Built an interactive Tableau dashboard</strong> to quickly track and analyse downtime.</li>
// </ul> 
//     ],
      
    
    image: require("./assets/images/deloitte.png"),
    imageAlt: "Deloitte Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/114YBD6CsBJsRTlS70_fbpSLTJsKTg5u3/view?usp=drive_link"
      }
    ]
  }
  ,
  {
    title: "Data Analyst Intern",
//     subtitle:[
//    <ul style={{ listStyleType: "disc", paddingLeft: "1.2em", fontSize: "18px" }}>
//   <li><strong>Targeted key customer segment (30–50)</strong> driving <strong>62% of loan approvals</strong>.</li>
  
//   <li><strong>Shifted strategy to mid-range properties</strong>, boosting <strong>approval rates by 28%</strong>.</li>
  
//   <li><strong>Reduced risk exposure by 18%</strong> via <strong>smarter customer & property selection</strong>.</li>
// </ul>
//     ]
    image: require("./assets/images/commbank_achievment.png"),
    imageAlt: "Commonwealth Bank Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1-RHJnomhJrcRtZmYp8C8ScCBpLsAw3Ge/view?usp=drive_link"
      }
    ]
  },
  
  
    {
    title: "Azure AI Fundamentals",
//     subtitle:[
//       <ul style={{ listStyleType: "disc", paddingLeft: "1.2em", fontSize: "18px" }}>
//   <li><strong>Built a local AI chatbot</strong>, letting <strong>businesses customize responses</strong> without external APIs.</li>
  
//   <li><strong>Enabled chatbot configuration</strong> to <strong>match specific business needs</strong>.</li>
  
//   <li><strong>Created a hands-on AI learning project</strong> for <strong>local deployment and integration practice</strong>.</li>
// </ul>
//     ],
    image: require("./assets/images/azure.png"),
    imageAlt: "Microsoft Azure Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1VJaPcGwGs6KN3B-uuXvNkaaHpu1zaY33/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Microsoft Power BI",
    // subtitle:"Completed PL-300: Power BI for Data Analysis, developing skills in data modelling, transformation, and visualization. This strengthened my understanding of how well-structured data pipelines and data warehouses support reliable analytics and reporting. ",
    image: require("./assets/images/microsoft.png"),
    imageAlt: "Microsoft Azure Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1p1xtrzym6iIstLDGB7LIORp108RAhBmT/view?usp=drive_link"
      }
    ]
  },
{
    title: "Microsoft Azure  Cloud Computing Concepts",
    // subtitle:"Completed Microsoft Azure Fundamentals, developing an understanding of cloud computing concepts, Azure data services, and how cloud infrastructure supports modern data platforms and analytics workflows.  ",
    image: require("./assets/images/azure.png"),
    imageAlt: "Microsoft Azure Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/18WfO8AAQpl9mQ0jXx3QXbfm3AMlX422L/view?usp=drive_link"
      }
    ]
  },
  {
    title: "Oracle Database",
    // subtitle: "Completed Microsoft Azure Fundamentals with a focus on designing efficient data storage structures. Developed practical knowledge of Azure data services and how to use cloud infrastructure to support modern data analytics and management workflows.",
    image: require("./assets/images/oracle.png"),
    imageAlt: "Oracle",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1f0GyXxg8NqBeMS4Vv8ayEeVXKfp94Bhi/view?usp=drive_link"
      }
    ]
},
  {
    title: "Data Engineering on Microsoft Azure",
    // subtitle: "Completed Microsoft Azure Fundamentals with a focus on designing efficient data storage structures. Developed practical knowledge of Azure data services and how to use cloud infrastructure to support modern data analytics and management workflows.",
    image: require("./assets/images/azure1.png"),
    imageAlt: "Microsoft Azure Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1EpnupPk3RKcw8bWtYyGuomJTcbvyzG6a/view?usp=drive_link"
      }
    ]
},
{
    title: "JIRA",
    // subtitle: "Completed Microsoft Azure Fundamentals with a focus on designing efficient data storage structures. Developed practical knowledge of Azure data services and how to use cloud infrastructure to support modern data analytics and management workflows.",
    image: require("./assets/images/jira.png"),
    imageAlt: "JIRA",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://drive.google.com/file/d/1kkz6NdTYs_hNPQeL5hUqFL6BHuyf7KQn/view?usp=sharing"
      }
    ]
}

  ],
  display: true // Set false to hide this section, defaults to true
};

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
  bigProjects,
  workExperiences,
  achievementSection,
  techStack,
  
  openSource,
  educationInfo,
  
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
