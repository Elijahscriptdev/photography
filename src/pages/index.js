import Head from 'next/head'
import Hero from '../component/Hero/Hero'
import Layout from '../component/Layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}
