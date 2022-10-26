import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel, impedit accusamus animi saepe labore esse consequuntur sit officia quisquam magni fugit repellat molestias cupiditate repudiandae fuga nam id ea.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vel, impedit accusamus animi saepe labore esse consequuntur sit officia quisquam magni fugit repellat molestias cupiditate repudiandae fuga nam id ea.</p>
      <Link href="/items">See Item list</Link>
      {/* <Footer/> */}
    </div> 
  );
}
