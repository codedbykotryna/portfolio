export const personalData = {
  name: process.env.REACT_APP_NAME || "Your Name",
  title: process.env.REACT_APP_TITLE || "Senior C# Tools Programmer",
  subtitle: process.env.REACT_APP_SUBTITLE || "WPF & WinForms Specialist",
  bio: process.env.REACT_APP_BIO || "Passionate C# developer with experience in building robust desktop applications using WPF and WinForms.",
  companies: [
    {
      name: 'DMC',
      logo: `${process.env.PUBLIC_URL}/assets/images/dmc.jpg`,
      description: 'Software Developer'
    },
    {
      name: 'Kwalee',
      logo: `${process.env.PUBLIC_URL}/assets/images/kwalee.jpg`,
      description: 'Senior Tools Programmer'
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
  avatar: "/assets/images/profile-photo.png",
  resume: "/assets/documents/resume.pdf",
  skills: {
    primary: ["C#", "WPF", "WinForms", "MVVM", "Entity Framework"],
    secondary: ["JavaScript", "React", "SQL Server", "Azure", "Git"]
  },
  stats: {
    yearsExperience: parseInt(process.env.REACT_APP_YEARS_EXPERIENCE) || 8,
    projectsCompleted: parseInt(process.env.REACT_APP_PROJECTS_COMPLETED) || 25,
    clientsSatisfied: parseInt(process.env.REACT_APP_CLIENTS_SATISFIED) || 15,
    linesOfCode: process.env.REACT_APP_LINES_OF_CODE || "500K+"
  }
};