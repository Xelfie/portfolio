'use client';

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const interests = [{ icon: null, text: "Traveling" }, { icon: null, text: "Drawing" }, { icon: null, text: "Hiking" }, { icon: null, text: "Photography" }, { icon: null, text: "Music" }, { icon: null, text: "Video Games" },]
const skills = [{ icon: null, text: "ReactJS" }, { icon: null, text: "NodeJS" }, { icon: null, text: "TypeScript" }, { icon: null, text: "SQL" }]

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 text-normal">
      <div className="flex flex-col gap-8 px-2 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
        <div className='flex items-center gap-8 w-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]' >
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
            src="/marine_dp2.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <p>Hello! My name is Marine, but I like to go by Xelfie as my online persona :D</p>
        </div>

        {/* CREATIONS */}
        <div className='w-full'>
          <h2 className='text-center text-2xl p-4'>Check out some of my work!</h2>
          <div className='flex flex-row gap-8'>
            <div className='w-1/2 p-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] border-2 rounded-lg'>
              My art
            </div>
            <div className='w-1/2 p-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] border-2 rounded-lg cursor-pointer' onClick={() => {
              router.push("/photography")
            }}>
              My photos
            </div>
            <div className='w-1/2 p-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] border-2 rounded-lg'>
              Some web pages
            </div>
          </div>
        </div>

        {/* SKILLS & HOBBIES */}
        <div>
          <div className='text-center text-2xl p-4'>
            <h2 className='text-2xl'>I'm a Jack of all trades, master of none</h2>
            <p className='text-sm pt-2'>...but oftentimes better than a master of one!</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p>
              My professional skills include:
              {
                skills.map((skill) => <span key={skill.text}><br /> • {skill.text}</span>)
              }
            </p>
            <p>
              A non-exhaustive list of my interests because I have wayyy to many:
              {
                interests.map((interest) => <span key={interest.text}><br /> • {interest.text}</span>)
              }
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
