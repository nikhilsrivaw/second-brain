
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plusicon'

function App() {
 

  return (
    <>
     <Button startIcon={<PlusIcon/>} size ="sm" variant="primary" text="Share"/>
     <Button size = "lg" variant = "secondary" text="Add content"/>
    </>
  )
}

export default App
