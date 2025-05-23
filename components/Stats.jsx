"use client";
import CountUp from "react-countup";
const stats =[
    {
        num: 5,
        text: "Certifications",
    },
    {
        num: 2,
        text: "Years of experence",
    },
    {
        num: 12,
        text: "Tools mastered",
    },
    {
        num: 2,
        text: "Industries Worked In",
    },
]
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[80vw] mx-auto xl:max-w-none gap-y-6">
      {stats.map((items, index) => (
        <div
          className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
          key={index}
        >
          <CountUp
            end={items.num}
            duration={5}
            delay={2}
            className="text-4xl xl:text-6xl font-extrabold"
          />
          <p
            className={`${
              items.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
            } leading-snug text-white/80`}
          >
            {items.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

export default Stats