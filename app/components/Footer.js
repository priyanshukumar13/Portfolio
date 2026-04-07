import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const sections = [
    {
      title: "Sitemap",
      links: [
        { name: "Home", dist: "/" },
        { name: "About", dist: "/about" },
        { name: "Projects", dist: "/projects" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Webinars", dist: "/resources/webinars" },
        { name: "Tutorials", dist: "/resources/tutorials" },
        { name: "Newsletter", dist: "/resources/newsletter" },
        { name: "GitHub", dist: "/resources/learning-resources" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Email Me", dist: "mailto:priyanshu84@gmail.com" },
        { name: "LinkedIn", dist: "https://www.linkedin.com/in/abhaypratapsingh62/" },
        { name: "GitHub", dist: "https://github.com/Abhay-Pratap-Singh01" },
        { name: "Location", dist: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a101f] py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {sections.map((section, index) => (
            <div className="flex justify-center items-center flex-col" key={index}>
              <h3 className="font-bold mb-6 text-center text-purple-400">{section.title}</h3>
              <ul className="space-y-4 text-center">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.dist} className="text-sm text-gray-400 hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-800">
          <p>© 2026 Priyanshu Kumar</p>
          <div className="flex justify-center space-x-4 mt-6">
            {[
              { href: "https://github.com/Abhay-Pratap-Singh01", icon: <FaGithub className="w-5 h-5" />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/abhaypratapsingh62/", icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn" },
              { href: "mailto:priyanshu84@gmail.com", icon: <MdEmail className="w-5 h-5" />, label: "Email" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-400 hover:text-purple-500 transition"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
