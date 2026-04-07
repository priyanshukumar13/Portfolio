export const metadata = {
    title: "Abhay - Contact",
    description: "Connect with me on my social links and build a strong community.",
    openGraph: {
      title: "Abhay - Contact",
      description: "Connect with me on my social links and build a strong community.",
      url: "https://abhay.dev/contact",
      type: "website",
      images: [
        {
          url: "/images/portfolio-preview.png",
          width: 1200,
          height: 630,
          alt: "Abhay Contact",
        },
      ],
    },
  };
  
  export default function Contact({ children }) {
    return <>{children}</>;
  }
  