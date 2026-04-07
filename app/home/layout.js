export const metadata = {
    title: "Abhay Pratap Singh - Home",
    description: "Showcasing my portfolio. Explore my projects, journey, and contact details.",
    openGraph: {
      title: "Abhay Pratap Singh - Home",
      description: "Showcasing my portfolio, projects, achievements, and journey.",
      url: "https://abhaypratapsingh.dev/contact",
      type: "website",
      images: [
        {
          url: "/images/portfolio-preview.png",
          width: 1200,
          height: 630,
          alt: "Abhay Pratap Singh Home",
        },
      ],
    },
  };
  
  export default function Home({ children }) {
    return <>{children}</>;
  }
  