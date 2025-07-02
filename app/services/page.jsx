"use client";
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num:'01',
    title: 'Content Creation',
    description: "I offer professional content creation services to help businesses and brands effectively communicate their message and engage their audience. From compelling social media posts and blog articles to website content, product descriptions, and video scripts, I craft high-quality, audience-focused content tailored to your brand’s voice and goals. Whether you're looking to build trust, educate your audience, or boost conversions, I ensure every piece of content is optimized for both readability and SEO. Consistent, creative, and strategic content is key to standing out online, and I’m here to help you make a lasting impression.",
    href: "mailto:itsseeres@gmail.com"
  },
  {
    num:'02',
    title: 'Social Media Marketing',
    description: "I provide expert social media marketing services to help businesses build a strong online presence and connect with their target audience across platforms like Instagram, Facebook, LinkedIn, and Twitter. From creating engaging content and eye-catching visuals to planning and scheduling posts, running ad campaigns, and analyzing performance metrics — I manage it all to grow your brand and boost engagement. Whether you're aiming to increase followers, drive website traffic, or generate leads, I tailor strategies that align with your brand’s goals and resonate with your audience. With a consistent and data-driven approach, I turn your social media into a powerful marketing tool.",
    href: "mailto:itsseeres@gmail.com"
  },
  {
    num:'03',
    title: 'Email Marketing',
    description: "I offer targeted email marketing services designed to nurture leads, retain customers, and drive conversions. From crafting compelling email copy and designing visually appealing templates to setting up automated campaigns and analyzing performance metrics, I handle every step of the process. Whether it's a welcome series, promotional offers, newsletters, or re-engagement campaigns, I create personalized content that resonates with your audience and encourages action. With a focus on segmentation, A/B testing, and performance optimization, my email marketing strategies help you build stronger relationships with your subscribers and achieve measurable business results.",
    href: "mailto:itsseeres@gmail.com"
  },
  {
    num:'04',
    title: 'SEO',
    description: "I provide SEO (Search Engine Optimization) services to help your website rank higher on search engines like Google, increase organic traffic, and attract the right audience. From conducting in-depth keyword research and optimizing on-page elements like titles, meta descriptions, and content structure to improving site speed, mobile responsiveness, and building quality backlinks — I use proven strategies to boost your online visibility. Whether you're a local business aiming to dominate local search results or a brand looking for national reach, my SEO approach is tailored to your goals and focused on long-term growth. With regular performance tracking and updates, I ensure your website stays optimized and competitive in an ever-changing digital landscape.",
    href: "mailto:itsseeres@gmail.com"
  },
]

import { motion } from "framer-motion";


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4,duration:0.4, ease:"easeIn"},}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service,index)=>{
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-cyan-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-400 teansition-all duaration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services