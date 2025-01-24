export function ResumeItem(company, location, position, date_in, date_out, description, stacks){
    return (
        <div className="card p-[1.5vw]">
            <div className="flex justify-between">
            <span className="text-left font-bold text-accent-2-dark">{company},&nbsp; 
                <span className="text-accent-2-dark font-normal italic">{location}</span>
            </span>
            <span className="text-right text-accent-1-dark">{date_in} - {date_out}</span>
            </div>
            <span className="text-accent-3-dark">{position}</span>
            <br></br>
            <span className="block text-justify mt-2 flex-wrap">{description}</span>
            <br></br>
            <span className="text-left text-accent-1-dark font-bold">Stacks: <span className="italic font-normal">{stacks}</span></span>
        </div>
    )
}

export function ResumeEducation(college, location, degree, courses){
    return (
        <div className="card p-[1.5vw]">
            <div className="flex justify-between">
            <span className="text-left font-bold text-accent-2-dark">{college},&nbsp; 
                <span className="text-accent-2-dark font-normal italic">{location}</span>
            </span>
            <span className="text-right text-accent-1-dark">{degree}</span>
            </div>
            <br></br>
            <span className="text-left ">Relevant Courses: <span className="italic font-normal">{courses}</span></span>
        </div>
    )
}

export function Resume() {
	return (
    <>
    <h1 className="flex justify-center text-[5vw] md:text-[3rem] pt-[5vw] font-bold text-center text-text-dark">
        Raden Abdul Aziz Rahmat
    </h1>
    <div className="divider bg-accent-2-dark h-[2px] w-[60%] mx-auto my-[2vw]"></div>
    <h2 className="flex justify-center text-[1.5vw] md:text-[1.8rem] pb-[5vw] text-center text-accent-1-dark">
        Software Engineer
    </h2>

    <div className="flex-col bg-background-dark w-[75vw] mx-auto text-[1.3vw]">   
        <h3 className="text-[1.5vw] md:text-[1.8rem] pb-[1vw] text-left text-text-dark">
            Work Experience
        </h3>
    </div>
    <div className="pb-[5vw]">
        <div className="flex-col bg-secondary-dark w-[75vw] mx-auto text-[1.3vw] text-text-dark rounded-md">
            {ResumeItem(
                "PT. Pos Indonesia (Persero)",
                "Bandung", 
                "Back-end Developer | Fulltime", 
                "Nov 2022", 
                "Present",
                "Maintain and enhance the backend of a nation-wide, high-performance, and high-availability cash distribution app for the Bansos (Social Assistance) program, ensuring seamless operation and adding new features to support over 13 million weekly transactions. Enabling business worth over Rp. 2 Trillion in revenue",
                "Python, PSQL, AWS, AIOHTTP, TxSwitch"
            )}
            <div className="divider"></div>
            {ResumeItem(
                "Upwork",
                "Remote", 
                "Back-end Developer | Freelance", 
                "Mar 2023", 
                "Present",
                "Responsible for developing and maintaining the backend for multiple Sharia Core Banking Systems for leading Indonesian banks, enabling businesses with over Rp.100B in net income.",
                "Python, NginX, AIOHTTP, TxSwitch, ISO-8583, Golang, Oracle, gRPC, Docker"
            )}
            <div className="divider"></div>
            {ResumeItem(
                "PT. Pos Indonesia (Persero)",
                "Bandung", 
                "Machine Learning Engineer | Seasonal", 
                "Feb 2023", 
                "Aug 2023",
                "Implementing State of the Art Machine Learning models of House Detection for the Bansos Program, achieving in excess of 50FPS and saving 150k Man Hour of work",
                "PyTorch, Python, FastAPI, Computer Vision, AWS, YOLO"
            )}
            <div className="divider"></div>
            {ResumeItem(
                "PT. Pos Indonesia (Persero)",
                "Bandung", 
                "Product Manager | Fulltime", 
                "Jul 2022", 
                "Nov 2022",
                "Streamlined communications between teams as Pospay Superapp's tribe members, perform business analysis, create process diagrams, and lead the scrum team to ensure efficient project execution.",
                "Tableau, Bizagi, Trello, Miro"
            )}
            <div className="divider"></div>
            {ResumeItem(
                "PT. Pos Indonesia (Persero)",
                "Bandung", 
                "Data Analyst | Fulltime", 
                "Jan 2022", 
                "Jul 2022",
                "Created data dashboards that optimize hiring effi ciency by analyzing transaction trends and sales figures to allocate resources at peak time and locations",
                "Tableau, PDI, MS SQLServer, Python, PSQL"
            )}
            <div className="divider"></div>
            {ResumeItem(
                "Bank Indonesia (BI)",
                "Jakarta", 
                "Data Analyst | Internship", 
                "Jun 2019", 
                "Aug 2019",
                "Visualize internal data, enabling Bank Indonesia to analyze and audit their national and international assets and calculate its depreciation",
                "IBM Cognos Analytics, IBM Datastage & Qualitystage, Oracle DB, Toad for Oracle"
            )}
        </div>
    </div>


    <div className="flex-col bg-background-dark w-[75vw] mx-auto text-[1.3vw]">   
        <h3 className="text-[1.5vw] md:text-[1.8rem] pb-[1vw] text-left text-text-dark">
            Education
        </h3>
    </div>
    <div className="pb-[10vw]">
        <div className="flex-col bg-secondary-dark w-[75vw] mx-auto text-[1.3vw] text-text-dark rounded-md">
            {ResumeEducation(
                "Universitas Indonesia",
                "Jakarta", 
                "Bachelor of Science in Computer Science (B.Sc. CS)", 
                "Software Engineering, Web development, Data Science, Machine Learning, Advanced Database"
            )}
        </div>
    </div>
    </>
	);
    
  }