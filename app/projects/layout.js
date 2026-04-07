export const metadata = {
    title: "Abhay - Projects",
    description: "Explore Abhay's projects in web development, AI integration, and cloud applications.",
    openGraph: {
      title: "Abhay - Projects",
      description: "A showcase of Abhay's projects featuring web, serverless, and backend technologies.",
      url: "https://abhay.dev/projects",
      type: "website",
      images: [
        {
          url: "/images/portfolio-preview.png",
          width: 1200,
          height: 630,
          alt: "Abhay Projects",
        },
      ],
    },
  };
  
  export default function ProjectsLayout({ children }) {
    return <>{children}</>;
  }
  