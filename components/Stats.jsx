"use client";
import CountUp from "react-countup";
const stats =[
    {
        num: 1,
        text: "Years of experence",
    },
    {
        num: 12,
        text: "Years of experence",
    },
    {
        num: 12,
        text: "Tools mastered",
    },
    {
        num: 12,
        text: "Industries Worked In",
    },
]
const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((items,index)=>{
                    return(
                            
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp end={items.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                            <p>{items.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats