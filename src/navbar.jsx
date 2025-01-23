export function Navbar({ activeSection, setActiveSection }) {
	return (
	  <div className="btm-nav text-text-dark">
		<button
		  className={activeSection === "about" ? "active border-t-2 border-accent-2-dark" : ""}
		  onClick={() => setActiveSection("about")}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		  <span className="btm-nav-label">About</span>
		</button>
		<button
		  className={activeSection === "resume" ? "active border-t-2 border-accent-2-dark" : ""}
		  onClick={() => setActiveSection("resume")}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 6h8M8 10h8M8 14h4"
				/>
			</svg>
		  <span className="btm-nav-label">Resume</span>
		</button>
		<button
		  className={activeSection === "portfolio" ? "active border-t-2 border-accent-2-dark" : ""}
		  onClick={() => setActiveSection("portfolio")}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4 5h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8 21h8M12 17v4"
				/>
			</svg>

		  <span className="btm-nav-label">Portfolio</span>
		</button>
	  </div>
	);
}
