import { useState } from 'react'
import './App.css'
import Modal from './Modal'
function App() {
  const [count, setCount] = useState(0)
const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <Modal
        header="Success!"
        body={<p>Employee has been successfully added.</p>}
        footer={<button onClick={()=>{setisOpen(false)}}>Close</button>}
        isOpen = {isOpen}
      >
      </Modal>
    </>
  )
}

export default App
