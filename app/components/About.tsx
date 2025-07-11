// modify the code to fix deployment issues in Next.js 14 on vercel
"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<Tilt
			options={{ max: 45, scale: 1, speed: 450 }}
			className="xs:w-[250px] w-full"
		>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
			>
				<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<Image
						src={icon}
						width={64}
						height={64}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h2 className="sectionHeadText">Overview</h2>
			</motion.div>

			<motion.p
			variants={fadeIn("", "", 0.1, 1)}
			className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
		>
			I&apos;m a full-stack developer with a strong focus on backend engineering.
			I enjoy building scalable, high-performance systems using technologies
			like Node.js, Express, MongoDB, and Firebase. I&apos;m also passionate about
			Artificial Intelligence and Machine Learning, and actively explore
			problems in predictive modeling and data-driven solutions.
			<br />
			<br />
			I take pride in writing clean, maintainable code and designing systems with a clear architectural vision.
			I thrive in collaborative environments, enjoy breaking down complex problems, and value continuous learning &mdash;
			always looking for new ways to push the boundaries of what I can build.
		</motion.p>


			{/* <motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				I&apos;m a full-stack developer with a strong focus on backend engineering.
				I enjoy building scalable, high-performance systems using technologies
				like Node.js, Express, MongoDB, and Firebase. I&apos;m also passionate about
				Artificial Intelligence and Machine Learning, and actively explore
				problems in predictive modeling and data-driven solutions.
				<br />
				<br />
				Beyond web, I&apos;m excited by mobile app development and love creating
				user-friendly applications using modern frameworks. I thrive on
				problem-solving, clean architecture, and continuous learning &mdash; always
				looking for new ways to push the boundaries of what I can build.
			</motion.p> */}

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");


// "use client";

// import { SectionWrapper } from "./HigherOrderComponents";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Tilt } from "react-tilt";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "@/app/utils/motion";

// type ServiceCardProps = {
// 	index: number;
// 	title: string;
// 	icon: string;
// };

// const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
// 	return (
// 		<Tilt
// 			options={{ max: 45, scale: 1, speed: 450 }}
// 			className="xs:w-[250px] w-full"
// 		>
// 			<motion.div
// 				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
// 				className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
// 			>
// 				<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
// 					<Image
// 						src={icon}
// 						width={64}
// 						height={64}
// 						alt={title}
// 						className="w-16 h-16 object-contain"
// 					/>
// 					<h3 className="text-white text-[20px] font-bold text-center">
// 						{title}
// 					</h3>
// 				</div>
// 			</motion.div>
// 		</Tilt>
// 	);
// };

// const About = () => {
// 	return (
// 		<>
// 			<motion.div variants={textVariant()}>
// 				<p className="sectionSubText">Introduction</p>
// 				<h2 className="sectionHeadText">Overview</h2>
// 			</motion.div>

// 			<motion.p
// 				variants={fadeIn("", "", 0.1, 1)}
// 				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
// 			>
// 				I&apos;m a full-stack developer with a strong focus on backend engineering.
// 				I enjoy building scalable, high-performance systems using technologies
// 				like Node.js, Express, MongoDB, and Firebase. I&apos;m also passionate about
// 				Artificial Intelligence and Machine Learning, and actively explore
// 				problems in predictive modeling and data-driven solutions.
// 				<br />
// 				<br />
// 				Beyond web, I&apos;m excited by mobile app development and love creating
// 				user-friendly applications using modern frameworks. I thrive on
// 				problem-solving, clean architecture, and continuous learning — always
// 				looking for new ways to push the boundaries of what I can build.
// 			</motion.p>

// 			<div className="mt-20 flex flex-wrap gap-10">
// 				{services.map((service, index) => (
// 					<ServiceCard key={service.title} index={index} {...service} />
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default SectionWrapper(About, "about");



// "use client";

// import { SectionWrapper } from "./HigherOrderComponents";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Tilt } from "react-tilt";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "@/app/utils/motion";

// type ServiceCardProps = {
// 	index: number;
// 	title: string;
// 	icon: string;
// };

// const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
// 	return (
// 		<>
// 			<Tilt
// 				options={{ max: 45, scale: 1, speed: 450 }}
// 				className="xs:w-[250px] w-full"
// 			>
// 				<motion.div
// 					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
// 					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
// 				>
// 					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
// 						<Image
// 							src={icon}
// 							width={64}
// 							height={64}
// 							alt={title}
// 							className="w-16 h-16 object-contain"
// 						/>
// 						<h3 className="text-white text-[20px] font-bold text-center">
// 							{title}
// 						</h3>
// 					</div>
// 				</motion.div>
// 			</Tilt>
// 		</>
// 	);
// };

// const About = () => {
// 	return (
// 		<>
// 			<motion.div variants={textVariant()}>
// 				<p className="sectionSubText">Introduction</p>
// 				<h2 className="styles.sectionHeadText">Overview.</h2>
// 			</motion.div>

// 			<motion.p
// 				variants={fadeIn("", "", 0.1, 1)}
// 				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
// 			>
// 				Dynamic Full-Stack Developer with a passion for crafting innovative web
// 				applications. Proven expertise in React, Next.js, Node.js, and Python.
// 				Skilled in UI/UX design and DevOps (Docker). Proven ability to deliver high-quality,
// 				scalable solutions, as demonstrated by a strong portfolio of full-stack
// 				Next.js projects and modern UI/UX designs. Eager to leverage my
// 				technical prowess and problem-solving abilities to contribute to
// 				cutting-edge projects and drive innovation.
// 			</motion.p>
// 			<div className="mt-20 flex flex-wrap gap-10">
// 				{services.map((service, index) => (
// 					<ServiceCard key={service.title} index={index} {...service} />
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default SectionWrapper(About, "about");
