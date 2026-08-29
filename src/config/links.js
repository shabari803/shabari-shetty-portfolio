// Central place to edit all social / contact links.
// Update these values and every button across the site updates automatically.
export const LINKS = {
  github: "https://github.com/shabari803",
  linkedin: "https://www.linkedin.com/in/shabari-shetty-a79312300",
  email: "shabarishetty2006@gmail.com",
  resume: "/resume.pdf", // add resume.pdf to /public and this will work automatically
};

export const PROJECT_LINKS = {
  customerBehavior: { github: "https://github.com/shabari803/customer_behavior_analysis", demo: "" },
  diwaliSales: { github: "https://github.com/shabari803/Python_Diwali_Sales_Analysis", demo: "" },
  sentimentAnalysis: { github: "https://github.com/shabari803/AI-Sentiment-Analysis-tool", demo: "" },
  careerQuest: { github: "https://github.com/shabari803", demo: "" }, // TODO: add the CareerQuest repo URL
};

// Certifications — add real files to /public/certificates/ and update the
// certificateUrl below to match. Keep title/issuer/date accurate; leave
// certificateUrl pointing at the matching PDF filename.
export const CERTIFICATIONS = [
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 2026",
    description: "Covered core data analytics concepts including data collection, cleaning, and interpretation.",
    certificateUrl: "/certificates/certificate1.pdf",
  },
  {
    title: "SQL (Basic) Skill Certification",
    issuer: "HackerRank",
    date: "Aug 2026",
    description: "Verified proficiency in fundamental SQL querying and database concepts.",
    certificateUrl: "/certificates/certificate2.pdf",
  },
  {
    title: "The Basics of Google Cloud Compute",
    issuer: "Google",
    date: "2026",
    description: "Skill badge covering foundational Google Cloud compute services.",
    certificateUrl: "/certificates/certificate3.pdf",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    date: "Aug 2026",
    description: "Introductory certification covering core AI concepts and applications.",
    certificateUrl: "/certificates/certificate4.pdf",
  },
  {
    title: "CodeQuezt #33: Coding Challenge",
    issuer: "Naukri Campus",
    date: "Aug 2026",
    description: "Certificate of participation in a competitive coding challenge.",
    certificateUrl: "/certificates/certificate5.pdf",
  },
];
