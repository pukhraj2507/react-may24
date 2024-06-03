import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormInReact from './FormInReactJs/FormInReact'
import PasswordCheck from './IsStrongPasswordOrNot/PasswordCheck'
import RollDice from './DiceRolling/RollDice'
import RockPaperScissor from './RockPaperScissorsInJs/RockPaperScissor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FormInReact /> */}
      {/* <PasswordCheck /> */}

      {/* <RollDice /> */}

      <RockPaperScissor />

    </>
  )
}

export default App
