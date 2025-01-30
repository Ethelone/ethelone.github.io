export function CodeIntroduction() {
	return (
    <div className="pb-[10vw]">
        {/* <h1 className="flex justify-center text-[5vw] md:text-[3rem] pt-[5vw] pb-[5vw] font-bold text-center text-text-dark"> */}
        <div className="avatar flex justify-center pt-[4vw] pb-[4vw]">
            <div className="w-[14vw] rounded-full ring-accent-3-dark ring ring-offset-base-100 ring-offset-2">
                <img src="/pp.jpg" />
            </div>
        </div>
	    <div className="mockup-code w-[75vw] mx-auto text-[1vw] leading-[2rem] text-text-dark">
            <pre data-prefix="$">
                <code>Hello, my name is <span className="text-accent-2-dark">Raden Abdul Aziz Rahmat. </span> 
                You can call me <span className="text-accent-1-dark">Aziz.</span>
                </code>
            </pre>
            <pre data-prefix="$">
                <code>I am a Software Engineer with <span className="text-accent-1-dark">3 years </span> 
                of work experience in <span className="text-accent-2-dark">Banking & Finance</span> Industry</code>
            </pre>
            <pre data-prefix="$">
                <code>My specialization is in <span className="text-accent-1-dark">Back-end Development</span>
                , I'm also interested in <span className="text-accent-2-dark">Machine Learning</span></code>
            </pre>
            <pre data-prefix="$">
                <code>My passion is making things work, my approach is problem-solving first, development later</code>
            </pre>
            <pre data-prefix="$">
                <code>I am experienced in developing<span className="text-accent-2-dark"> high performance</span> back end systems</code>
            </pre>
            <pre data-prefix="$">
                <code>My project includes but not limited to:&nbsp;
                    <span className="text-accent-1-dark">Pos Giro Cash (Bansos) & BCA Syariah</span></code>
            </pre>
	  </div>
    </div>
	);
  }