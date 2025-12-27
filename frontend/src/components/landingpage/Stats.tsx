"use client"

import CountUp from "../motion/CountUp"

const STATS = [
  { id: 1, value: 96, suffix: "%", label: "Zdawalności matur", duration: 1 },
  { id: 2, value: 230_324, suffix: "", label: "Przeprowadzonych lekcji", duration: 0.12 },
  { id: 3, value: 100, suffix: "%", label: "Zadowolonych uczniów", duration: 0.5 },
]

export default function Stats() {
  return (
    <div className="w-full">
      <div className="h-64 w-full bg-wave-transition bg-repeat-x hc:bg-wave-transition-hc rotate-180" />

      <div className="bg-primary">
        <div className="text-xl sm:text-3xl md:text-5xl text-center font-semibold flex justify-center items-center flex-col gap-4 py-4 sm:py-8">
          <h1 className="text-secondary ">Jesteśmy już dla was od ponad</h1>
          <span className="text-white text-4xl md:text-6xl ">80 lat</span>
        </div>

        <div className="flex justify-center flex-col sm:flex-row gap-16  p-18">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <span className="text-secondary text-4xl md:text-6xl font-semibold">
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  direction="up"
                  duration={stat.duration}
                  className="count-up-text"
                />
                {stat.suffix}
              </span>
              <p className="text-xl sm:text-2xl text-secondary text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-64 w-full bg-lines-transition bg-bottom bg-repeat-x hc:bg-lines-transition-hc rotate-180" />
    </div>
  )
}
