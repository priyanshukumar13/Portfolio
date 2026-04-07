"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  icons,
  Sun,
  X,
  Bug,
  BriefcaseBusiness,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Code2,
  BookOpen,
  MonitorSmartphone,
  Library,
  Video,
} from "lucide-react";
import { Code } from "lucide-react";

// Submenu data with icons
const resourcesSubmenu = [
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    name: "Learning Resources",
    href: "/resources/learning-resources",
    description:
      "My personal collection of technical notes, guides, and learning references.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    name: "Software Tools",
    href: "/resources/software-tools",
    description:
      "A curated list of development tools, IDEs, and frameworks for streamlined coding.",
  },
  {
    icon: <Library className="w-5 h-5" />,
    name: "Courses",
    href: "/resources/courses",
    description:
      "Comprehensive online courses covering technical skills, personal growth, and certifications.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    name: "Books",
    href: "/resources/books",
    description:
      "Handpicked books for professional development, technical expertise, and personal enrichment.",
  },
  {
    icon: <Video className="w-5 h-5" />,
    name: "Tutorials & Webinars",
    href: "/resources/webinars",
    description:
      "Access live and recorded sessions featuring industry experts, tutorials.",
  },
 
];

const aboutSubmenu = [
  {
    icon: <BriefcaseBusiness className="w-5 h-5" />,
    name: "Experience",
    href: "/about/journey",
    description:
      "My professional journey and experiences as a founder and technical leader",
  },
  {
    icon: <Code className="w-5 h-5" />,
    name: "Internships",
    href: "/about/interns",
    description:
      "My professional journey and experiences as a founder and technical leader",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);
  const [showBugMessage, setshowBugMessage] = useState(false);

  useEffect(() => {
    if (showBugMessage) {
      const timeout = setTimeout(() => {
        setshowBugMessage(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showBugMessage]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExpanded = (item) => {
    setExpandedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const isExpanded = (item) => expandedItems.includes(item);

  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add("dark");

    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed z-50 mb-10 w-full  max-w-screen bg-[#0a0e1a]/85 text-white py-4">
      <div className="lg:w-3/4 mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="text-xl font-semibold">
          <Link
            href="/"
            className="text-2xl flex items-baseline font-bold text-white"
          >
            abhay <span className="text-3xl">.</span>
            <span className="text-purple-400">dev</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <NavItem href="/home" isActive={pathname === "/home"}>
            Home
          </NavItem>

          <NavItem href="/about" isActive={pathname === "/about"} hasDropdown>
            About
          </NavItem>

          <NavItem href="/projects" isActive={pathname === "/projects"}>
            Projects
          </NavItem>

          <NavItem href="/achievement" isActive={pathname === "/achievement"}>
            Achievement
          </NavItem>

          <NavItem
            href="/resources"
            isActive={pathname === "/resources"}
            hasDropdown
          >
            Resources
          </NavItem>

          <NavItem href="/contact" isActive={pathname === "/contact"}>
            Contact
          </NavItem>
        </nav>

        <div className="flex items-center">
          <button
            onClick={() => {
              setshowBugMessage(true);
            }}
            className="p-2 rounded-full bg-gray-800 text-white"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5" />
          </button>
          {showBugMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 mt-2 w-48 bg-gray-800 text-white p-3 rounded-md shadow-lg text-xs z-50"
            >
              <div className="flex items-center gap-2">
                <Bug className="h- w-7 text-amber-500" />
                <span>Light attracts bugs! Good Devs Never use Light Mode</span>
              </div>
            </motion.div>
          )}

          {/* Mobile menu button */}
          <button
            className="ml-4 md:hidden p-2 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0e1a] z-50 md:hidden overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="text-xl font-semibold">
                <Link
                  href="/"
                  className="text-2xl flex items-baseline font-bold text-white"
                >
                  abhay <span className="text-3xl">.</span>
                  <span className="text-purple-400">dev</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-800 text-white"
                  aria-label="Toggle theme"
                >
                  <Sun className="h-5 w-5" />
                </button>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <nav className="px-4 py-2">
              <ul className="space-y-1">
                <MobileNavItem href="/home" isActive={pathname === "/home"}>
                  Home
                </MobileNavItem>

                <MobileNavItem
                  href="/about"
                  isActive={pathname.startsWith("/about")}
                  hasDropdown
                  isExpanded={isExpanded("about")}
                  onToggleExpand={() => toggleExpanded("about")}
                >
                  About
                </MobileNavItem>

                {isExpanded("about") && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-6 space-y-1 mt-1"
                  >
                    {aboutSubmenu.map((item) => (
                      <MobileNavItem
                        key={item.href}
                        href={item.href}
                        isActive={pathname === item.href}
                        isSubmenu
                      >
                        {item.name}
                      </MobileNavItem>
                    ))}
                  </motion.div>
                )}

                <MobileNavItem
                  href="/projects"
                  isActive={pathname.startsWith("/projects")}
                >
                  Projects
                </MobileNavItem>

                <MobileNavItem
                  href="/achievement"
                  isActive={pathname.startsWith("/achievement")}
                >
                  Achievement
                </MobileNavItem>

                <MobileNavItem
                  href="/resources"
                  isActive={pathname.startsWith("/resources")}
                  hasDropdown
                  isExpanded={isExpanded("resources")}
                  onToggleExpand={() => toggleExpanded("resources")}
                >
                  Resources
                </MobileNavItem>

                {isExpanded("resources") && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-6 space-y-1 mt-1"
                  >
                    {resourcesSubmenu.map((item) => (
                      <MobileNavItem
                        key={item.href}
                        href={item.href}
                        isActive={pathname === item.href}
                        isSubmenu
                      >
                        {item.name}
                      </MobileNavItem>
                    ))}
                  </motion.div>
                )}

                <MobileNavItem
                  href="/contact"
                  isActive={pathname === "/contact"}
                >
                  Contact
                </MobileNavItem>
              </ul>
            </nav>

            <div className="p-4 mt-8 bg-[#111827] rounded-lg mx-4">
              <p className="text-gray-300 text-sm">
                Explore my curated collection of digital resources that enhance
                productivity and workflow.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, children, isActive, hasDropdown }) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className={cn(
          "flex items-center relative",
          isActive && "border-b-2 border-purple-500"
        )}
      >
        <span
          className={cn(
            "hover:text-gray-300 transition-colors",
            isActive && "text-white"
          )}
        >
          {children}
        </span>
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </Link>

      {hasDropdown && children === "About" && (
        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="bg-[#0a0e1a] rounded-xl border border-gray-800 p-4 w-[500px] grid grid-cols-2 gap-4 shadow-xl">
            {aboutSubmenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 rounded-lg hover:bg-[#1a2035] transition-colors flex gap-3 items-start"
              >
                <div className="text-sm">{item.icon}</div>
                <div>
                  <div className="font-medium text-sm mb-1">{item.name}</div>
                  <div className="text-sm text-gray-400">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {hasDropdown && children === "Resources" && (
        <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="bg-[#0a0e1a] rounded-xl border border-gray-800 p-4 w-[500px] grid grid-cols-2 gap-4 shadow-xl">
            {resourcesSubmenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 rounded-lg hover:bg-[#1a2035] transition-colors flex gap-3 items-start"
              >
                <div className="text-sm">{item.icon}</div>
                <div>
                  <div className="font-medium mb-1">{item.name}</div>
                  <div className="text-sm text-gray-400">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  href,
  children,
  isActive,
  hasDropdown,
  isExpanded,
  onToggleExpand,
  isSubmenu,
}) {
  return (
    <li>
      <div className="flex items-center">
        <Link
          href={href}
          className={cn(
            "flex-1 py-3 px-2 rounded-md text-white",
            isActive && "bg-[#1a2035]",
            isSubmenu && "py-2 text-sm"
          )}
          onClick={(e) =>
            hasDropdown &&
            onToggleExpand &&
            (e.preventDefault(), onToggleExpand())
          }
        >
          {children}
        </Link>

        {hasDropdown && (
          <button onClick={onToggleExpand} className="p-2 text-white">
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isExpanded && "transform rotate-180"
              )}
            />
          </button>
        )}
      </div>
    </li>
  );
}
