import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import  {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from "../hoc"
const About = () => {
  const ServiceCard = ({index,title,icon}) => {
    return(
      <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt="icon " className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

      </div>

        </motion.div>
      </Tilt>
    )
  }
  return (
      <>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p viewport={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I,m a skilld software developer with experience in c++ ,c#,python and javaScript
      , and expertise in React and three.js ,and also in arduino.
      I,m a quick learner and collaborate closely with clients to create
      efficent , scalable ,and user-frindly solutions that solve real-world problems
      .lets work togethor to bring your ideas to life ! 
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">

        {services.map((service,index) => (
      <ServiceCard key={service.title} index={index}  {...service}/>
        ))}
      </div>
      </>
    )
}

export default SectionWrapper(About, "about");