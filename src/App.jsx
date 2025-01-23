  export function CodeIntroduction() {
	return (
	  <div className="mockup-code w-[75vw] mx-auto text-[1.3vw] leading-[2.2rem] text-text-dark">
		<pre data-prefix="$">
			<code>You can call me <span className="text-accent-1-dark">Aziz</span> </code>
		</pre>
		<pre data-prefix="$">
			<code>I'm a Software Engineer with <span className="text-accent-1-dark">3 years </span> 
			of work experience in <span className="text-accent-2-dark">Banking & Finance</span> Industry</code>
		</pre>
		<pre data-prefix="$">
			<code>Specialized in <span className="text-accent-1-dark">Back End Development</span>
			, also interested in <span className="text-accent-2-dark">Machine Learning</span></code>
		</pre>
		<pre data-prefix="$">
			<code>My approach is pragmatic & methodical; problem solving first, code later</code>
		</pre>
		<pre data-prefix="$">
			<code>Experienced in developing<span className="text-accent-2-dark"> high performance</span> back end systems</code>
		</pre>
		<pre data-prefix="$">
			<code>Projects includes but not limited to:&nbsp;
				<span className="text-accent-1-dark">Pos Giro Cash (Bansos) & BCA Syariah</span></code>
		</pre>
	  </div>
	);
  }
  
  export default function App() {
	// const [isLight, setisLight] = useState(false);

	// const toggleTheme = () => {
	// 	setisLight(!isLight);
	// 	if (!isLight) {
	// 	  document.documentElement.classList.add("light");
	// 	} else {
	// 	  document.documentElement.classList.remove("light");
	// 	}
	//   };

	return (
	  <div className="bg-background-dark min-h-screen">
		<h1 className="flex justify-center text-[5vw] md:text-[3rem] pt-[10vw] pb-[5vw] font-bold text-center text-white">
		  <span className="text-accent-3-dark">#</span>
		  Raden Abdul Aziz Rahmat
		  {/* <span className="text-[#F1D70A]">&nbsp;| Ethelone</span> */}
		</h1>
		<CodeIntroduction />
	  </div>
	);
  }
  