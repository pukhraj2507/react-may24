/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    {/* <figure classNameName="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img classNameName="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/206676/pexels-photo-206676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
      <div classNameName="pt-6 text-center space-y-4">
        <blockquote>
          <p classNameName="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption classNameName="font-medium">
          <div classNameName="text-sky-500 dark:text-sky-400">
            Sarah Dayan
          </div>
          <div classNameName="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
      </figcaption>
      </div>
    </figure> */}
    <Card username="Lorem" />
    <Card btnText = "Click here"/>
    </>
  )
}

export default App
