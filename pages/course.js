import { Hero, Keypoints, Lectures, Modal } from "@components/course"
import { BaseLayout } from "@components/layout"

export default function Course() {

    const lectures = [
      "How to init App",
      "How to get a help",
      "Introduction to Solidity",
      "Programing in C++",
      "How to write For Loops",
      "Safe operator",
    ]
 
    return (
      <BaseLayout>
      <div className="py-4"> 
      <Hero />
      </div>
        <Keypoints />
        <Lectures lectures={lectures}/>
         <Modal />
      </BaseLayout>
    )
  }