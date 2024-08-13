"use client"
import { getRandomInt } from "@/lib/utils"
import { ReactNode, useState } from "react"

export default function ShootEffect({
  children,
  image,
  amount,
  sparkle,
  sparkleAmount,
}: {
  children: ReactNode
  image: string | string[]
  amount: number
  sparkle?: boolean
  sparkleAmount?: number
}) {
  const [active, setActive] = useState(false)

  return (
    <span
      onMouseEnter={(e) =>
        hover(
          e,
          active,
          setActive,
          image,
          amount,
          sparkle ?? false,
          sparkleAmount ?? 0
        )
      }
    >
      {children}
    </span>
  )
}

interface rb {
  x: number
  y: number
  velocity: {
    x: number
    y: number
  }
  rotation: number
}

interface sparkle {
  elem: any
  rb: rb
  fade: fade
}

interface cap {
  elem: any
  rb: rb
}

interface fade {
  time: number
  maxTime: number
}

function hover(
  e: any,
  active: boolean,
  setActive: Function,
  src: string | string[],
  amount: number,
  sparkle: boolean,
  sparkleAmount: number
) {
  if (active) return

  const liveTime = 1500
  const cd = 300

  const caps: cap[] = []
  if (Array.isArray(src)) {
    for (let i = 0; i < amount; i++) {
      caps.push(createCap(e, src[i % src.length], i))
    }
  } else {
    for (let i = 0; i < amount; i++) {
      caps.push(createCap(e, src))
    }
  }

  const sparkles: sparkle[] = []
  if (sparkle) {
    for (let i = 0; i < sparkleAmount; i++) {
      sparkles.push(createSparkle(e, getRandomInt(-100, 60), liveTime))
    }
  }

  const update = setInterval(() => {
    sparkles.forEach((sparkle) => {
      move(
        sparkle.elem,
        sparkle.rb,
        false,
        getRandomInt(1, 10) / 200,
        -0.001,
        sparkle.fade
      )
    })
    caps.forEach((cap) => {
      move(cap.elem, cap.rb, true, 0.3, 0.02)
    })
  }, 10)

  setActive(true)
  setTimeout(() => {
    clearInterval(update)
    caps.forEach((cap) => {
      cap.elem.remove()
    })
    sparkles.forEach((sparkle) => {
      sparkle.elem.remove()
    })
  }, liveTime)
  setTimeout(() => {
    setActive(false)
  }, cd)
}

function move(
  object: HTMLDivElement,
  rb: rb,
  rotate: boolean,
  gravityScale: number,
  linearDrag: number,
  fade?: fade
) {
  if (rb.velocity.x < 0) {
    rb.velocity.x = rb.velocity.x + linearDrag
  } else if (rb.velocity.x > 0) {
    rb.velocity.x = rb.velocity.x - linearDrag
  }

  rb.velocity.y += gravityScale
  rb.x += rb.velocity.x
  rb.y += rb.velocity.y

  rb.rotation += rb.velocity.x

  object.style.left = rb.x + "px"
  object.style.top = rb.y + "px"
  if (rotate) object.style.transform = `rotate(${rb.rotation}deg)`
  if (fade) {
    object.style.opacity = `${1 - fade.time / fade.maxTime}`
    fade.time += 10
  }
}

function createCap(e: any, src: string, i?: number) {
  const elem = document.createElement("img")
  elem.src = src
  elem.className = "fixed pointer-events-none size-16 z-50"
  let rb: rb

  if (i! >= 0) {
    rb = {
      x: e.clientX + i! * 10 - 10,
      y: e.clientY,
      velocity: {
        x: i! * 5 - 8,
        y: -13,
      },
      rotation: getRandomInt(-45, 45),
    }
  } else {
    rb = {
      x: e.clientX + getRandomInt(-20, 0),
      y: e.clientY,
      velocity: {
        x: getRandomInt(-6, 7),
        y: -13,
      },
      rotation: getRandomInt(-45, 45),
    }
  }

  elem.style.left = rb.x + "px"
  elem.style.top = rb.y + "px"
  const cap = document.body.appendChild(elem)
  return {
    elem: cap,
    rb: rb,
  }
}

function createSparkle(e: any, x: number, maxTime: number) {
  const elem = document.createElement("img")
  elem.src = "/assets/sparkles.webp"
  elem.className = "fixed pointer-events-none size-12 z-40"
  const sparkle = {
    elem: document.body.appendChild(elem),
    rb: {
      x: e.clientX + x,
      y: e.clientY + getRandomInt(-50, 50),
      velocity: {
        x: getRandomInt(-1, 2),
        y: -getRandomInt(1, 6),
      },
      rotation: 0,
    },
    fade: {
      time: 0,
      maxTime: maxTime,
    },
  }
  return sparkle
}
