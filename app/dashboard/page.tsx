import {NextPage} from "next";

import styles from '../styles/Dashboard.module.scss'
import {Header} from "@/app/components";


import '../styles/Dashboard.scss'
import CodeBlock from "@/app/components/Codeblock";
import Link from "next/link";

const Dashboard: NextPage = () => {


    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.container}>
                <div>
                    <ul>
                        <li>
                            Hello
                        </li>
                        <li>
                            Horizontal Scroll
                        </li>
                        <li>
                            Custom cursor
                        </li>
                    </ul>
                </div>
                <div className={styles.content}>
                    <h1>
                        Horizontal Scroll
                    </h1>
                    <pre>
                        <span>
                            Create high performance scroll-linked animations.
                        </span>
                        <span>
                            scroll() creates scroll-linked animations. It uses the ScrollTimeline API for best performance, including hardware-accelerated animations when possible.
                        </span>
                        <span>
                            Note: scroll() is a new function in active development based on upcoming browser APIs. React users are recommended to use useScroll() for currently missing features like element tracking.
                        </span>
                    </pre>
                    <CodeBlock language={'JavaScript'} value={`scroll(animate("div", { transform: ["none", "rotate(90deg)"] })  )`} />
                    <h2>HTML</h2>
                    <CodeBlock language={'html'}
                               value={`<div className="container p-14 ">
                  <div className="flex flex-col items-center justify-center">
                      <h1 className='text-5xl text-center mb-12'>
                          Hello there s some animations from
                          Framer Motion and GSAP
                      </h1>
                      <Link href={'/dashboard'}>
                          Look!
                      </Link>
                  </div>
              </div>`} />

                </div>
            </div>
        </div>
    )
}

export default Dashboard;