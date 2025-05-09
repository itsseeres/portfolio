"use client";
import { FaGoogle, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGoogleanalytics, SiMailchimp, SiSemrush, SiHubspot } from "react-icons/si";

const about = {
  title: 'About me',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda dolore ea, nostrum rerum officia!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shirish Shrestha",
    },
    {
      fieldName: "Phone",
      fieldValue: "+977 azaz",
    },
    {
      fieldName: "Instagram",
      fieldValue: "@seeres_ay",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nepali",
    },
    {
      fieldName: "Email",
      fieldValue: "cerisstha@gmail.com",
    },
    {
      fieldName: "Digital Marketing",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Nepali, Newari",
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda dolore ea, nostrum rerum officia!",
  items: [
    {
      company: "Azaz Solutions",
      position: "Digital Marketer",
      duration: "2020-2022",
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda dolore ea, nostrum rerum officia!",
  items: [
    {
      institution: "Azaz Secondary School",
      degree: "SEE",
      duration: "2020-2022",
    },
    {
      institution: "Azaz College",
      degree: "+2",
      duration: "2020-2022",
    },
    {
      institution: "Kumari Jobs",
      degree: "Digital Marketing",
      duration: "April-Present",
    },
  ]
}

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda dolore ea, nostrum rerum officia!",
  skillList: [
    {
      icon: <FaGoogle />,
      name: "Google Ads/Search",
    },
    {
      icon: <FaFacebookF />,
      name: "Facebook Marketing",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram Marketing",
    },
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn Marketing",
    },
    {
      icon: <SiGoogleanalytics />,
      name: "Google Analytics",
    },
    {
      icon: <SiMailchimp />,
      name: "Email Marketing",
    },
    {
      icon: <SiSemrush />,
      name: "SEO & Keyword Research",
    },
    {
      icon: <SiHubspot />,
      name: "CRM & Inbound Marketing",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }, }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return (<li key={index} className="bg-[#232329] h-184px py-6 py-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1">
                        <span className="text-cyan-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-400"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>);
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return (<li key={index} className="bg-[#232329] h-184px py-6 py-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1">
                        <span className="text-cyan-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-400"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>);
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full"> 
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill,index)=>{
                      return (<li key={index} >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-cyan-400 transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>);
                    })}
                  </ul>
                </div>
            </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-7 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return (<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-cyan-400">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>

                      </li>);
                    })}
                  </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume