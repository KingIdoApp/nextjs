import Head from 'next/head'
// import Image from 'next/image'
import { useRef, useState } from 'react'
import Intro from '../src/components/intro';
import Portfolio from '../src/components/portfolio';
import Services from '../src/components/services';
import Works from '../src/components/Works';
import Testimonials from '../src/components/Testimonials';
import Contact from '../src/components/Contact';
import Topbar from '../src/components/Topbar';
import Menu from '../src/components/Menu';
// import styles from '../styles/Home.module.css'

function Home({ services }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ศรีรัตน์ประกันภัย โดย บริษัท กรุงเทพประกันภัย จำกัด (มหาชน) : </title>
        <meta name="keywords"
          content="ศรีรัตน์ประกันภัย บึงกาฬ ประกันรถยนต์, ประกันภัยรถยนต์, ประกันภัย, ประกัน , ประกันออนไลน์, ประกันภัยทางอินเตอร์เน็ต,  ประกันการเดินทางต่างประเทศ, ประกันมะเร็ง, ประกันภัยมะเร็ง, ขอวีซ่า, ประกันอุบัติเหตุ, insurance, online insurance, Insurance in Thailand" />
        <meta name="author" content="" />
        <meta name="description"
          content="ศรีรัตน์ประกันภัย บึงกาฬ โดย บริษัทฯ กรุงเทพประกันภัย จำกัด (มหาชน) บริษัทประกันวินาศภัยที่มีการบริหารงานดีเด่น อันดับ 1 ติดต่อกัน 3 ปีซ้อน ประจำปี 2554, 2553 และ 2552 ปัจจุบันมีทุนจดทะเบียน 760.5 ล้านบาท ภายใต้การบริหารโดยนายชัย โสภณพนิช ประธานกรรมการและประธานคณะผู้บริหาร รวมทั้งคณะผู้บริหารและพนักงาน ที่พร้อมให้บริการแก่ลูกค้าให้ได้รับความพึงพอใจสูงสุด" />
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet" />
        <style>{`
        * {
        font-family: 'Sarabun', sans-serif;
        margin: 0;
        overflow-x: hidden;
    }
    `}</style>
      </Head>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Services data={services} />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>


    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/hello');
  const services = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      services: services.data || [],
    },
  }
}

export default Home