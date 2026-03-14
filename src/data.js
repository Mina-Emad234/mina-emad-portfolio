export const profile = {
  name: "Mina Emad Al-Shahat",
  title: "Back-end Developer",
  location: "Sonbat, Al-Gharbeyah, Egypt",
  birthDate: "23 April 1998",
  email: "mina899432@gmail.com",
  phone: "+201273530486",
  whatsapp: "https://wa.me/201273530486",
  github: "https://github.com/Mina-Emad234",
  linkedin: "https://www.linkedin.com/in/mina-emad-2514a2243",
  summary: "Results-oriented Backend Developer with 4 years of experience, primarily within dynamic startup environments. Proven track record in building scalable web applications from the ground up using PHP and Laravel. Expert in designing RESTful APIs, optimizing database performance, and integrating complex third-party services. Strong focus on applying Clean Architecture to deliver maintainable, high-performance backend solutions that drive business growth.",
  education: {
    degree: "Bachelor of Business Information System",
    institution: "Faculty of Commerce, Tanta University",
    date: "June 2020",
    description: "Specialized in Web Programming and participated in the Ministry of Communications' youth qualification initiative."
  },
  skills: {
    backend: ["PHP", "Laravel", "CodeIgniter", "Filament", "ExpressJS"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    architecture: ["RESTful APIs", "GraphQL", "Microservices (RabbitMQ)", "Multitenancy", "System Design", "Design Patterns", "SOLID Principles", "DDD (Domain Driven Design)", "Web Scraping", "Caching", "Third-party services", "Unit Testing", "Feature Testing"],
    devops: ["Docker", "CI/CD (GitHub Actions)", "Git", "GitHub", "AWS"],
    frontend: ["HTML", "CSS", "JavaScript", "jQuery", "Vue.js", "Livewire", "Tailwind CSS", "Bootstrap"]
  },
  softSkills: [
    "Clear and concise communication",
    "Collaborative and team-oriented player with a strong work ethic and a commitment to helping others succeed",
    "Creative thinker and problem solver with a proven track record of developing and implementing innovative solutions",
    "Eager to take on new challenges and learn new technologies",
    "Effective researcher and continuous learner with a passion for staying up-to-date on the latest trends and developments in the field"
  ],
  experience: [
    {
      role: "Backend Developer",
      company: "Jolife for Information Technology",
      location: "Jarash, Jordan (Remote)",
      period: "11/2024 – 01/2026",
      achievements: [
        "Optimized long-term maintainability, implementing Clean Architecture principles, reducing onboarding time for new developers by approximately 25%.",
        "Developed high-performance RESTful APIs achieving a 40% reduction in server response time and a 35% increase in throughput.",
        "Developed scalable, modular backend services following Clean Architecture principles; leveraged PHPUnit to ensure 99.9% system reliability during high-traffic periods."
      ]
    },
    {
      role: "Backend Developer",
      company: "DCC",
      location: "Baghdad, Iraq (Remote)",
      period: "11/2023 – 09/2024",
      achievements: [
        "Developed and maintained scalable backend features and managed third-party service integrations, while architecting CI/CD pipelines via GitHub Actions.",
        "Ensuring system reliability through rigorous debugging and optimization."
      ]
    },
    {
      role: "Backend Developer",
      company: "We Can",
      location: "Amman, Jordan (Remote)",
      period: "10/2022 – 10/2023",
      achievements: [
        "Translated complex business requirements into technical specs for 10+ cross-platform projects, ensuring 100% alignment between stakeholder vision and final API delivery.",
        "Leveraged Agile methodologies to reduce \"feature creep,\" resulting in a 15% improvement in sprint completion rates."
      ]
    },
    {
      role: "Remote Backend Trainee",
      company: "Online Internship",
      location: "Online",
      period: "09/2021 – 06/2022",
      achievements: [
        "Engaged in intensive professional development and project-based learning to master market-ready skills in a remote environment.",
        "Collaborated with industry mentors to translate theoretical knowledge into practical solutions for digital communications challenges."
      ]
    }
  ],
  projects: [
    { 
      name: "Lockey", 
      // dashboard: "https://admin.lokeyapp.com/admin/login", 
      app: "https://play.google.com/store/apps/details?id=com.lokey.wecan",
      type: "Application & Dashboard"
    },
    { name: "Wecan.jo", website: "https://wecan.jo", type: "Corporate" },
    { name: "Fihaa", website: "https://alfaihascientific.com/main", type: "Corporate" },
    {
      name: "WayToDoctor",
      tech: "Laravel, SMS Service",
      // dashboard: "https://wa.com/admin/public/admin/dashboard",
      userApp: "https://play.google.com/store/apps/details?id=com.waytodoctors.wecan",
      doctorApp: "https://play.google.com/store/apps/details?id=com.waytodoctorsdoctor.wecan",
      type: "Medical"
    },
    {
        name: "GoldenCard",
        tech: "Laravel, Cpanel, Mailgun, Firebase, Cron job",
        website: "https://goldencard.com.jo/en",
        app: "https://play.google.com/store/apps/details?id=com.goldencard.wecan&pli=1",
        type: "Utility Card"
    },
    {
        name: "JordanStartsHere",
        tech: "Laravel, Cpanel, Mailgun, Firebase",
        app: "https://play.google.com/store/apps/details?id=com.jordanstartshere.wecan",
        type: "Community/Tourism"
    },
    {
        name: "Minutto",
        tech: "Laravel, Firebase",
        // website: "https://minutto.net",
        app: "https://play.google.com/store/apps/details?id=com.minuttoapp.wecan",
        type: "HR"
    },
    {
        name: "ESTOREIRAQ",
        tech: "Laravel, SMS (Info pep), Cron job",
        website: "https://www.estore.iq",
        // hrWebsite: "https://estoreiraq.in",
        type: "E-commerce"
    },
    {
        name: "EA-Score",
        tech: "Laravel, Firebase, Cron job, Sportmonks APIs",
        // dashboard: "https://dash.eascore.io/admin/login",
        app: "https://play.google.com/store/apps/details?id=com.eascore.wecan",
        type: "Sports"
    },
    {
        name: "WECANARABIA",
        tech: "PHP, Montypay Payment",
        website: "https://wecanarabia.com",
        type: "Corporate"
    },
    {
        name: "DOVERIFYIT",
        tech: "Laravel, MailService, WhatsappService",
        website: "https://api.doverifyit.com/ar/dash/login",
        type: "OTP Verification API Service"
    },
    {
        name: "RUBIX",
        tech: "Laravel, Filament, Livewire, Tailwind",
        webApp: "https://task-off.codenzia.com",
        type: "Management"
    },
    {
        name: "Basedash",
        tech: "Laravel, Filament, Livewire, Tailwind",
        webApp: "https://base.codenzia.com/admin/login",
        type: "Admin Dashboard"
    },
    {
        name: "EIMTITHAL",
        tech: "Laravel, Filament, Livewire, Tailwind",
        // webApp: "https://app.eimtithal.com/app/login",
        app: "https://play.google.com/store/apps/details?id=com.imtithal.wecan",
        type: "Compliance"
    },
    {
        name: "NOUR ALQABAS",
        tech: "Laravel, Filament, Livewire, Tailwind, Wasabi Integration",
        webApp: "https://nouralqabas.edu.jo/admin/login",
        type: "LMS"
    },
    {
        name: "TAQWA",
        tech: "Laravel, Filament, Firebase",
        webApp: "https://nouralqabas.edu.jo/",
        app: "https://play.google.com/store/apps/details?id=com.Taqwa.Taqwa.App.taqwa&pcampaignid=web_share",
        type: "LMS"
    },
    {
        name: "CAKESHOP",
        tech: "Laravel, Filament, Firebase",
        webApp: "https://nouralqabas.edu.jo/",
        app: "https://play.google.com/store/apps/details?id=com.mozaic.www.cakeshop&pcampaignid=web_share",
        type: "E-commerce"
    },
    {
        name: "BUYINGREWARDS",
        tech: "Laravel, Filament, Cashpre & Fedex APIs, Laravel Reverb, Firebase",
        webApp: "https://buyingrewards.com/",
        type: "E-commerce Platform"
    },
    { name: "Takkeh", status: "Not Deployed yet", type: "Full Stack" },
    {
      name: "Bright-life",
      // dashboard: "https://api.brightlifeapp.com/public/admin/login",
      // userApp: "https://play.google.com/store/apps/details?id=com.brightlife.wecan",
      // providerApp: "https://play.google.com/store/apps/details?id=com.bright_life_providers.wecan",
      type: "E-commerce / Service"
    },
    {
      name: "Yalla-mzzad",
      // dashboard: "https://yallamzad.com/admin/public/admin/dashboard",
      // app: "https://play.google.com/store/apps/details?id=com.yallamazad.wecan.yallamazad",
      type: "Auction App"
    },
    {
        name: "GHRAFY",
        tech: "Laravel, SMS (Info pep)",
        // website: "https://ghrafy.com/en",
        // dashboard: "https://admin.ghrafy.com",
        type: "E-commerce"
    },
    {
        name: "HISELL",
        // tech: "Laravel, Paytabs Payment",
        // website: "https://hisell.co/login",
        type: "Marketplace"
    },
    {
        name: "CODATA",
        tech: "Laravel, MailService",
        // website: "https://codata.cc",
        // admin: "https://admin.codata.cc/login",
        type: "Information Tech"
    },
    {
        name: "ALMUSAED",
        tech: "Laravel, MailService, WhatsappService, Zoom Integration",
        // admin: "http://almosaaed.com/en/admin/login",
        // professorDashboard: "https://almosaaed.com/en/professor/login",
        // app: "https://play.google.com/store/apps/details?id=com.almusaed.wecan",
        type: "LMS"
    }
  ],
  internshipProjects: [
    { name: "E-commerce-PHP", tech: "Native PHP, MVC, Hyper pay", github: "https://github.com/Mina-Emad234/E-commerce-PHP" },
    { name: "E-commerce-Laravel", tech: "Laravel, Multitenancy, MyFatoorah, Repository Pattern", github: "https://github.com/Mina-Emad234/E-commerce-Laravel" },
    { name: "comments-api", tech: "Native PHP, JWT", github: "https://github.com/Mina-Emad234/comments_api" },
    { name: "Blog", tech: "CodeIgniter", github: "https://github.com/Mina-Emad234/Blog" },
    { name: "CI4_comments_api", tech: "CodeIgniter, JWT", github: "https://github.com/Mina-Emad234/CI4_comments_api" },
    { name: "Ghran", tech: "Laravel, MyFatoorah, Google Recaptcha v3, Sanctum", github: "https://github.com/Mina-Emad234/Ghran" },
    { name: "Traders", tech: "Laravel, Multitenancy, Multiple Databases", github: "https://github.com/Mina-Emad234/Traders" },
    { name: "livewire-task-list", tech: "Laravel Livewire", github: "https://github.com/Mina-Emad234/livewire-task-list" },
    { name: "Blog-vue-Laravel", tech: "Laravel, Vue, Docker, Pusher", github: "https://github.com/Mina-Emad234/Blog-vue-laravel" },
    { name: "CHATAPP", tech: "Laravel Echo, Pusher", github: "https://github.com/Mina-Emad234/chat" },
    { name: "SOPIFY", tech: "Laravel, Shopify API", github: "https://github.com/Mina-Emad234/sellenvollc-task" }
  ]
};
