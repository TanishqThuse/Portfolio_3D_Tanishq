export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "education", // ✅ add this
		title: "Education",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "AIML Enthusiast",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science(AI)",
    institution: "VIT Pune",
    icon: "/education/VIT-Pune-Logo.webp", // or any static image
    iconBg: "#E6DEDD",
    date: "2023 - 2027",
    points: [
      "Relevant coursework: Data Structures, Artificial Intelligence, Operating Systems",
      "CGPA: 8.9/10",
	  "Smart India Hackathon 2024 Finalist",
      "Open Source Co-Head at Team Quark",
	  "AIML Developer at MLSC VIT Pune",
    ]
  },
  {
    degree: "Class XII - HSC",
    institution: "Nowrosjee Wadia College, Pune",
	icon: "/education/wadia_college.jpg", 
    iconBg: "#E6DEDD",
    date: "2021 - 2023",
    points: [
      "Percentage: 80%",
      "PCM + Electronics",
	  "Developed a strong foundation in programming and problem-solving skills",
    ]
  },
  {
    degree: "Class X - ICSE",
    institution: "Hume Mc Henry School, Pune",
	icon: "/education/hume_mc_henry.png", 
    iconBg: "#E6DEDD",
    date: "2008 - 2021",
    points: [
      "Percentage: 92%",
	  "Achieved top 5 rank in the school"
    ]
  }
];


const experiences = [
	{
	title: "Data Science Intern",
	company_name: "Cognify Technologies",
	icon: "/company/cognifyz_techonologies_logo.jpg", // Make sure this image exists in your public/company folder
	iconBg: "#383E56",
	date: "May 2024 - Jun 2024",
	points: [
		"Worked on data preprocessing and ML model development, boosting performance by 15%.",
		"Created Python scripts for data cleaning and automation, reducing processing time by 30%.",
		"Performed data analysis and visualization using Pandas, NumPy, and Scikit-learn.",
	],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "LinkedIn",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/tanishq-thuse-32472b248/",
	},
	{
		id: 2,
		testimonial: "I consistently practice Data Structures and Algorithms on LeetCode to strengthen my problem-solving and coding interview skills.",
		name: "LeetCode",
		image: "/socialmedia/leetcode.webp",
		link: "https://leetcode.com/u/TanishqThuse/",
	},
	{
		id: 3,
		testimonial:
			"Explore my GitHub profile where I've shared projects, coding solutions, and contributions ranging from basic to advanced levels.",
		name: "GitHub",
		image: "/tech/github.webp",
		link: "https://github.com/TanishqThuse",
	},
	{
		id: 4,
		testimonial:
			"Follow me on X (formerly Twitter) where I occasionally share thoughts on tech, coding, and personal updates.",
		name: "X (Twitter)",
		image: "/socialmedia/x.avif", // make sure you have the X icon saved here
		link: "https://x.com/tanishq552005",
	},
	{
	id: 5,
	testimonial:
		"Check out my Codeforces profile where I regularly participate in contests and solve competitive programming problems.",
	name: "Codeforces",
	image: "/socialmedia/codeforces.png", // make sure you have this icon or use a placeholder
	link: "https://codeforces.com/profile/TanishqThuse",
	},
	{
		id: 6,
		testimonial:
			"Visit my CodeChef profile to explore my competitive programming journey and contest participation.",
		name: "CodeChef",
		image: "/socialmedia/codechef.jpg", // make sure you have this icon or use a placeholder
		link: "https://www.codechef.com/users/tanishq_thuse",
	},
	{
		id: 7,
		testimonial:
			"Explore my GeeksforGeeks profile where I share solutions, practice coding problems, and expand my DSA knowledge.",
		name: "GeeksforGeeks",
		image: "/socialmedia/gfg.jpg", // make sure you have this icon or use a placeholder
		link: "https://www.geeksforgeeks.org/user/tanishqtma6q/",
	},

];

const projects = [
	{
		name: "AI-Powered EdTech Platform",
		description:
			"An AI-powered platform that leverages RAG, Gemini AI, and LLMs to personalize learning through adaptive quizzes, intelligent tutoring, roadmap generation, and content summarization.",
		tags: [
			{
				name: "gemini-ai",
				color: "pink-text-gradient",
			},
			{
				name: "rag",
				color: "blue-text-gradient",
			},
			{
				name: "streamlit",
				color: "green-text-gradient",
			},
			{
				name: "firebase",
				color: "orange-text-gradient",
			},
			{
				name: "python",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/ai_edutech_platform_enhanced_image.png", // <-- You should replace this with your actual image path
		source_code_link: "https://github.com/TanishqThuse/Revolutionizing-EdTech-Through-AI",
		platform: "Web",
		deploy_link: "https://aitutor-anvg7mgqxwlz2gikt2xlbn.streamlit.app/", // <-- Replace with actual deployed site link
	},
	{
	name: "RealFake-Face-Liveness-Detection",
	description:
		"A deep learning project that ensures secure real-time face authentication using CNN-based liveness detection models with TensorFlow and ONNX, built with Streamlit and JavaScript. Finalist project at Smart India Hackathon 2024.",
	tags: [
		{
			name: "deep-learning",
			color: "green-text-gradient",
		},
		{
			name: "tensorflow",
			color: "orange-text-gradient",
		},
		{
			name: "onnx",
			color: "blue-text-gradient",
		},
		{
			name: "streamlit",
			color: "pink-text-gradient",
		},
		{
			name: "sih-2024",
			color: "purple-text-gradient",
		},
	],
	image: "/projectimg/face_liveness_project.png", // Replace with actual image path
	source_code_link: "https://github.com/TanishqThuse/RealFake-Face-Liveness-Detection", // Replace with actual repo
	platform: "Streamlit + JavaScript",
	deploy_link: "https://github.com/TanishqThuse/RealFake-Face-Liveness-Detection", // Replace if deployed
},
	{
	name: "MediReport Voice",
	description:
		"A desktop app that lets doctors create accurate, hands-free medical prescriptions using voice commands, which are then formatted as PDFs and sent to patients via email or WhatsApp.",
	tags: [
		{
			name: "python",
			color: "blue-text-gradient",
		},
		{
			name: "speech-recognition",
			color: "pink-text-gradient",
		},
		{
			name: "tkinter",
			color: "orange-text-gradient",
		},
		{
			name: "opencv",
			color: "green-text-gradient",
		},
		{
			name: "gTTS",
			color: "purple-text-gradient",
		},
	],
	image: "/projectimg/medireport_voice.png", // Replace with actual image path
	source_code_link: "https://github.com/TanishqThuse/MediReport-Voice", // Replace with your GitHub link
	platform: "Web",
	deploy_link: "https://github.com/TanishqThuse/MediReport-Voice", // Since it's a desktop app, use repo link as fallback
	},	
	{
	name: "Diabetes Prediction using Machine Learning",
	description:
		"A data science project that predicts the likelihood of diabetes using Random Forest with hyperparameter tuning, feature engineering, and insightful visual EDA.",
	tags: [
		{
			name: "machine-learning",
			color: "green-text-gradient",
		},
		{
			name: "random-forest",
			color: "orange-text-gradient",
		},
		{
			name: "eda",
			color: "blue-text-gradient",
		},
		{
			name: "feature-engineering",
			color: "pink-text-gradient",
		},
		{
			name: "jupyter-notebook",
			color: "purple-text-gradient",
		},
	],
	image: "/projectimg/diabetes-prediction.png", // Replace with actual image path
	source_code_link: "https://github.com/TanishqThuse/Diabetes-Prediction-ML", // Replace with actual repo
	platform: "Jupyter",
	deploy_link: "https://github.com/TanishqThuse/Diabetes-Prediction-ML", // No live model? GitHub repo is good fallback
}


	// other projects here...
];


// const projects :{
// 	name: string;
// 	description: string;
// 	tags: {
// 		name: string;
// 		color: string;
// 	}[];
// 	image: string;
// 	source_code_link?: string;
// 	deploy_link: string;
// 	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
// }[] = [
// 	{
// 		name: "A.V.M Auto Portfolio",
// 		description:
// 			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
// 		tags: [
// 			{
// 				name: "wordpress",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "google-translate",
// 				color: "green-text-gradient",
// 			},
// 		],
// 		image: "/projectimg/avm.webp",
// 		platform: "Wordpress",
// 		deploy_link: "https://avmauto.in/",
// 	},
// 	{
// 		name: "Sparkbright Engineering Portfolio",
// 		description:
// 			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
// 		tags: [
// 			{
// 				name: "next",
// 				color: "red-text-gradient",
// 			},
// 			{
// 				name: "Next UI",
// 				color: "orange-text-gradient",
// 			},
// 			{
// 				name: "tailwind",
// 				color: "blue-text-gradient",
// 			},
// 		],
// 		image: "/projectimg/sparkbright.png",
// 		source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
// 		platform: "Web",
// 		deploy_link: "https://sparkbright.in/",
// 	},
// 	{
// 		name: "HooBank",
// 		description:
// 			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
// 		tags: [
// 			{
// 				name: "next",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "tailwind",
// 				color: "blue-text-gradient",
// 			},
// 		],
// 		image: "/projectimg/hoobank.webp",
// 		source_code_link: "https://github.com/omunite215/hoobank",
// 		platform: "Vercel",
// 		deploy_link: "https://hoobankbyom.netlify.app/",
// 	},
// 	{
// 		name: "MERN Dashboard",
// 		description:
// 			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
// 		tags: [
// 			{
// 				name: "react",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "materialui",
// 				color: "orange-text-gradient",
// 			},
// 			{
// 				name: "MongoDB",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "Express",
// 				color: "pink-text-gradient",
// 			},
// 		],
// 		image: "/projectimg/mern.png",
// 		source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
// 		platform: "Web",
// 		deploy_link: "https://admin-frontend-r705.onrender.com/",
// 	},
// 	{
// 		name: "Metaverse Web 3.0",
// 		description:
// 			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
// 		tags: [
// 			{
// 				name: "react",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "tailwind",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "framer-motion",
// 				color: "orange-text-gradient",
// 			},
// 		],
// 		image: "/projectimg/metaverse.png",
// 		source_code_link: "https://github.com/omunite215/Project_Metaverse",
// 		platform: "Vercel",
// 		deploy_link: "https://project-metaverse-beta.vercel.app/",
// 	},
// 	{
// 		name: "Issue Tracker",
// 		description:
// 			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
// 		tags: [
// 			{
// 				name: "next",
// 				color: "blue-text-gradient",
// 			},
// 			{
// 				name: "tailwind",
// 				color: "green-text-gradient",
// 			},
// 			{
// 				name: "shadCN",
// 				color: "orange-text-gradient",
// 			},
// 			{
// 				name: "mySQL",
// 				color: "green-text-gradient",
// 			},
// 		],
// 		image: "/projectimg/issuetracker.png",
// 		source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
// 		platform: "Vercel",
// 		deploy_link: "https://project-issue-tracker.vercel.app/",
// 	},
// ];

export { services, technologies, experiences, testimonials, projects };
