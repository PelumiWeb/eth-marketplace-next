import { Hero, Keypoints, Lectures, Modal } from "@components/ui/course"
import { BaseLayout } from "@components/ui/layout"
import { getAllCourse } from "content/courses/fetcher"

export default function Course(props) {

    const lectures = [
      "How to init App",
      "How to get a help",
      "Introduction to Solidity",
      "Programing in C++",
      "How to write For Loops",
      "Safe operator",
    ]

    console.log(props)
 
    return (
      <BaseLayout>
      <div className="py-4"> 
      <p>{props.course.title}</p>
      <Hero
      title={props.course.title}
      description={props.course.description}
      image={props.course.coverImage}
      />
      </div>
        <Keypoints 
        points={props.course.wsl}
        />
        <Lectures lectures={lectures} locked/>
         <Modal />
      </BaseLayout>
    )
  }

  export function getStaticPaths() {
    const {data} = getAllCourse()
    return {
      paths: data.map(course => ({
        params: {
          slug: course.slug,
        }
      })),
      fallback: false
    }
  }

  export function getStaticProps({params}) {
    const {data} = getAllCourse()
    const course = data.filter(course => course.slug === params.slug)[0]
    return {
      props: {
        course,
      }
    }
  }