export const personalData = {
  name: process.env.REACT_APP_NAME || "Your Name",
  title: process.env.REACT_APP_TITLE || "Senior C# Tools Programmer",
  subtitle: process.env.REACT_APP_SUBTITLE || "WPF & WinForms Specialist",
  bio: process.env.REACT_APP_BIO || "I'm a skilled Windows application developer with a strong foundation in C#, WinForms, and WPF, specializing in building robust, user-friendly desktop software using the latest .NET technologies. Recently, I've been shifting my focus toward backend development, exploring cloud services, scalable architectures, and expanding my DevOps skills with tools like Docker and automation pipelines.",
  companies: [
    {
      name: `Direct Machining Control`,
      logo: `${process.env.PUBLIC_URL}assets/images/companies/dmc-logo.png`, 
      position: "Software Developer",
      duration: "September 2023 - Present",
      description: "Leading the development of internal tools that streamline testing and support critical industrial operations—software that engineers and testers rely on every day.",
      responsibilities: [
        "Design, develop, and maintain Windows desktop applications using C#, WinForms, and WPF with the latest versions of .NET",
        "Build and maintain internal testing systems used by engineers and testers to ensure software quality, stability, and hardware compatibility",
        "Create custom tools and automation platforms in C# to support internal teams, including a Jenkins-like CI/CD system developed in-house",
        "Develop a SQL-based logging system to capture and store application data, with a WPF-based log viewer for real-time monitoring",
        "Handle DevOps responsibilities, including setting up and maintaining build infrastructure, Docker-based workflows, and deployment pipelines",
        "Integrate industrial devices, controllers, and hardware systems into software, working with technical documentation and communication protocols",
        "Collaborate closely with QA and engineering teams to automate testing, streamline validation processes, and reduce manual overhead"
      ],
      achievements: [
        "Developed a custom automation server in C# to better align with internal processes",
        "Built web dashboards and tools using React to support reporting, testing visibility, and internal tool accessibility",
        "Successfully streamlined testing workflows, reducing manual overhead for engineering teams"
      ],
      technologies: ["C#", ".NET", "WinForms", "WPF", "SQL", "Docker", "React", "DevOps", "Jenkins", "Industrial Hardware Integration"],
      projects: [
        {
          name: "Custom CI/CD Automation Server",
          description: "Developed an in-house Jenkins-like system in C# for better control and flexibility over build processes"
        },
        {
          name: "SQL-based Logging System",
          description: "Created a comprehensive logging solution with WPF-based log viewer for real-time monitoring and diagnostics"
        },
        {
          name: "React Web Dashboards",
          description: "Built internal dashboards for reporting, testing visibility, and tool accessibility"
        }
      ]
    },
    {
      name: "Kwalee",
      logo: `${process.env.PUBLIC_URL}assets/images/companies/kwalee-logo.jpg`,
      position: "Tools Software Engineer → Junior Tools Software Engineer → Junior Game Programmer",
      duration: "February 2020 - September 2023 (3 years 8 months)",
      description: "Led development of new systems, mentored junior team members, and created robust project architectures while maintaining legacy code for optimal performance.",
      responsibilities: [
        "Oversee and mentor junior team members, lead the development of new systems",
        "Create robust project architectures and maintain legacy code to ensure optimal performance",
        "Develop and maintain Jenkins configuration code throughout all projects",
        "Support publishing department by working as tech support for external developers",
        "Conduct workshops for the team on topics including Jenkins, UI Toolkit, and Design Patterns",
        "Lead code review processes with focus on team development and optimization"
      ],
      achievements: [
        "Employee Of the Month (June 2020)",
        "Developed an efficient Ads mediation system in Objective-C, driving revenue growth and enhancing user experience",
        "Created a web-page using Django with GitLab API integration for rapid prototyping",
        "Developed a new local C# testing system in Unity that reduced SDK release bugs",
        "Spearheaded the design of a robust architecture system for a new localization system"
      ],
      technologies: ["C#", "Unity", "Objective-C", "Python", "Django", "Jenkins", "GitLab API", "Bash", "Google Scripts"],
      projects: [
        {
          name: "Ads Mediation System",
          description: "Efficient system in Objective-C that drove revenue growth and enhanced overall user experience"
        },
        {
          name: "Cross-promotion System",
          description: "Developed system to show HTML pages in Unity and UI for different types of Ads"
        },
        {
          name: "Django Prototyping Tool",
          description: "Web-page using Django and GitLab API to get templates and create new prototype projects for rapid prototyping"
        },
        {
          name: "Unity C# Testing System",
          description: "Local testing system that made SDK releases less prone to bugs"
        },
        {
          name: "Localization Architecture",
          description: "Robust architecture system that streamlined workflows and improved efficiency"
        }
      ]
    },
    {
      name: "Gabsee",
      logo: `${process.env.PUBLIC_URL}assets/images/companies/gabsee-logo.png`,
      position: "Tools Programmer",
      duration: "April 2022 - July 2023 (1 year 4 months)",
      description: "Remote tools programming role focused on developing and maintaining development tools and systems.",
      responsibilities: [
        "Develop and maintain tools for game development workflows",
        "Create automation solutions to streamline development processes",
        "Work remotely to support development team infrastructure"
      ],
      technologies: ["C#", "Unity", "Python", "Development Tools"],
      projects: [
        {
          name: "Development Tools",
          description: "Created and maintained various tools to support game development workflows"
        }
      ]
    },
    {
      name: "Tiny Bull Studios",
      logo: `${process.env.PUBLIC_URL}assets/images/companies/tiny-bull-logo.jpg`, // You'll need to add this image
      position: "Tools Programming Intern",
      duration: "June 2019 - October 2019 (5 months)",
      description: "Internship focused on learning tools programming in a professional game development environment.",
      responsibilities: [
        "Learn and apply tools programming concepts in game development",
        "Support development team with tool creation and maintenance",
        "Gain experience in professional game development workflows"
      ],
      technologies: ["C#", "Unity", "Game Development Tools"],
      projects: [
        {
          name: "Development Tools",
          description: "Contributed to various tools and systems supporting game development"
        }
      ]
    },
    {
      name: "Lince Works",
      logo: `${process.env.PUBLIC_URL}assets/images/companies/lince-works-logo.jpg`, // You'll need to add this image
      position: "Game Programming Intern",
      duration: "March 2018 - August 2018 (6 months)",
      description: "6-month programming internship working on various aspects of game development including shaders, camera behaviors, and UI systems.",
      responsibilities: [
        "Work on shaders and visual effects",
        "Develop camera behaviors and character controllers",
        "Create and maintain UI systems",
        "Handle input switching and controller integration",
        "Get visual outcome with different controllers"
      ],
      achievements: [
        "Successfully completed 6-month internship with hands-on experience in multiple game development areas",
        "Gained experience working with different input controllers and visual systems"
      ],
      technologies: ["C#", "Unity", "Shaders", "UI Development", "Controller Integration"],
      projects: [
        {
          name: "Shader Development",
          description: "Worked on various visual effects and shader implementations"
        },
        {
          name: "Camera & Character Systems",
          description: "Developed camera behaviors and character controller systems"
        },
        {
          name: "Controller Integration",
          description: "Implemented input switching and visual outcome systems for different controllers"
        }
      ]
    }
  ],
  location: process.env.REACT_APP_LOCATION || "Your City, Country",
  email: process.env.REACT_APP_EMAIL || "your.email@example.com",
  phone: process.env.REACT_APP_PHONE || "+1 (555) 123-4567",
  social: {
    github: process.env.REACT_APP_GITHUB_URL || "https://github.com/yourusername",
    linkedin: process.env.REACT_APP_LINKEDIN_URL || "https://linkedin.com/in/yourusername",
    twitter: process.env.REACT_APP_TWITTER_URL || "https://twitter.com/yourusername",
    website: process.env.REACT_APP_WEBSITE_URL || "https://yourwebsite.com"
  },
  // Update to match your actual file extension
  avatar: `${process.env.PUBLIC_URL}assets/images/profile-photo.png`,
  resume: "/assets/documents/resume.pdf",
 skills: {
    primary: ["C#", "TypeScript", "React Native", "WPF Development", ".NET", "Unity"],
    secondary: ["React", "Python", "SQL", "Docker", "DevOps", "Jenkins", "Django", "Objective-C", "Industrial Hardware Integration"]
  },
  stats: {
    yearsExperience: parseInt(process.env.REACT_APP_YEARS_EXPERIENCE) || 8,
    projectsCompleted: parseInt(process.env.REACT_APP_PROJECTS_COMPLETED) || 25,
    clientsSatisfied: parseInt(process.env.REACT_APP_CLIENTS_SATISFIED) || 15,
    linesOfCode: process.env.REACT_APP_LINES_OF_CODE || "500K+"
  }
};