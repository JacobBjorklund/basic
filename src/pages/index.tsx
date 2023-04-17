import style from '../styles/home.module.css'
import { Inter } from 'next/font/google'
import Box from '@/components/Box/Box'
import Form from '@/components/Form/Form'
import { log } from 'console'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  function runLog() {
    console.log('hej')
  }

  return (
    <div className='flex h-screen items-center justify-center flex-col'>
      <h1>Links</h1>
      <link rel="stylesheet" href="/about" />
      <link rel="stylesheet" href="/contact" />
    </div>
  )
}
