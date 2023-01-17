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
      <section id='skills'>
        Skills

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga explicabo rerum ipsum doloribus molestiae ab suscipit. Exercitationem, laborum fuga facilis et nisi laudantium id aperiam, sint a eligendi odio.
      </section>

      {/* projects */}
      <section id='projects'>
        Skills

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga explicabo rerum ipsum doloribus molestiae ab suscipit. Exercitationem, laborum fuga facilis et nisi laudantium id aperiam, sint a eligendi odio.
      </section>

      {/* contact me */}

    </div>
  )
}
