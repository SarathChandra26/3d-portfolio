

const base = import.meta.env.BASE_URL;

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const bentoSocialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sarath-chandra-ummadishetty-081426291",
    icon: `${base}images/linkedin.svg`,
  },
  {
    name: "GitHub",
    href: "https://github.com/SarathChandra26",
    icon: `${base}images/github.svg`,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/916305482898",
    icon: `${base}images/whatsapp.svg`,
  },
];

const iconsList = [
  { name: "html", image: `${base}images/html.svg` },
  { name: "css", image: `${base}images/css.svg` },
  { name: "javascript", image: `${base}images/js.svg` },
  { name: "react", image: `${base}images/react.svg` },
  { name: "python", image: `${base}images/python.svg` },
  { name: "n8n", image: `${base}images/n8n.svg` },
  
  { name: "github", image: `${base}images/github.svg` },
  { name: "gsap", image: `${base}images/gsap.svg` },
  { name: "threejs", image: `${base}images/threejs.svg` },
];

// 🔥 PROJECT SLIDES (FIXED IMAGE PATHS)
const slides = [
  {
    id: 1,
    title: "AI Automation for HR (WhatsApp)",
    img: `${base}images/hr-whatsapp-ai.png`,
    github:
      "https://github.com/SarathChandra26/AI-Automation-for-HR-Service-System-with-WhatsApp",
  },
  {
    id: 2,
    title: "Cloud Drive Document AI Agent",
    img: `${base}images/cloud-doc-ai.png`,
    github:
      "https://github.com/SarathChandra26/Cloud-Drive-Document-Management-AI-Agent",
  },
  {
    id: 3,
    title: "Categorize Email Notifier AI",
    img: `${base}images/email-categorizer-ai.png`,
    github:
      "https://github.com/SarathChandra26/Categorize-Email-Notifier-AI-Agent",
  },
  {
    id: 4,
    title: "AI Virtual Mouse (Hand Tracking)",
    img: `${base}images/ai-virtual-mouse.png`,
    github: "https://github.com/SarathChandra26/AI-Virtual-Mouse",
  },
  {
    id: 5,
    title: "Parking Space Picker",
    img: `${base}images/parking-space-picker.png`,
    github: "https://github.com/SarathChandra26/Parking-Space-Picker",
  },
];



const footerIconsList = [
  {
    name: "GitHub",
    href: "https://github.com/SarathChandra26",
    icon: `${base}images/github.svg`,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sarath-chandra-ummadishetty-081426291",
    icon: `${base}images/b-linked.svg`,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/916305482898",
    icon: `${base}images/b-whatsapp.svg`,
  },
];

export {
  navItems,
  bentoSocialLinks,
  iconsList,
  slides,
  footerIconsList,
};
