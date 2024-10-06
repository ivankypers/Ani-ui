import {motion, AnimatePresence} from 'framer-motion';

import {Header} from './components'
import Link from "next/link";

export default function Home() {
  return (
      <AnimatePresence>
          <div
              className="home h-screen">
              <Header />
              <div className="container p-14 ">
                  <div className="flex flex-col items-center justify-center">
                      <h1 className='text-5xl text-center mb-12'>
                          Hello there&#39;s some animations from <br/> Framer Motion and GSAP
                      </h1>
                      <Link href={'/dashboard'}>
                          Look!
                      </Link>
                  </div>
              </div>
          </div>
      </AnimatePresence>

  );
}
