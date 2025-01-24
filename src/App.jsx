 import { CodeIntroduction } from "./introduction"; 
 import { Navbar } from "./navbar";
 import { useState } from "react";
 import { Resume } from "./resume";
 
 export default function App() {
	const [isLight, setisLight] = useState(false);
	const [activeSection, setActiveSection] = useState("about");

	const toggleTheme = () => {
		setisLight(!isLight);
		if (!isLight) {
		  document.documentElement.classList.add("light");
		} else {
		  document.documentElement.classList.remove("light");
		}
	  };

	return (
	  <div className="bg-background-dark min-h-screen font-code">
		{activeSection === "about" && (
		  <section id="about">
			<CodeIntroduction />
		  </section>
		)}
		{activeSection === "resume" && (
		  <section id="resume">
			<Resume/>
		  </section>
		)}
		{activeSection === "portfolio" && (
		  <section id="portfolio">
			<h1 className="flex justify-center text-[5vw]">Portfolio Section</h1>
		  </section>
		)}
		<Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
	  </div>
	);
  }
  