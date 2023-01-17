import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0'>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* about */}
      <section id='about'  className='snap-center'> 
       <About />
      </section>

      {/* skills */}
      <section id='skills'  className='snap-center'> 
       Skills
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos recusandae ex voluptatem quaerat aperiam sapiente, quidem nemo architecto nihil, asperiores perspiciatis, esse non officia ducimus fugiat debitis labore expedita!
      </section>

      {/* projects */}

      {/* contact me */}

    </div>
  )
}
