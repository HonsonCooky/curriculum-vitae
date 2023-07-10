import { Oswald } from 'next/font/google'
import NavBar from './components/navbar'

const font = Oswald({ subsets: ['latin'] })
export default function Home() {



  return (
    <main className={`flex min-h-full min-w-full ${font.className}`} >
      <div className='absolute bg-dark-base w-full h-full'>
        <NavBar />
      </div>
    </main>
  )
}
