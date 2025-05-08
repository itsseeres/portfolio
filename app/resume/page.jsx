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
          <div className="min-h-[70vh] w-full">content</div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume