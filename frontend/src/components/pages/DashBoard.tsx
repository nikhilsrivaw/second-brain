
import { useState } from 'react'






import { Button } from '../Button'
import { Sidebar } from '../Sidebar'
import { PlusIcon } from '../../icons/Plusicon'
import { ShareIcon } from '../../icons/ShareIcon'
import { Card } from '../Card'
import { CreateMdoel } from '../CreateModel'

function DashBoard() {
    const [modalOpen, setModalOpen] = useState(false);


  return (
  
    <>
    <Sidebar/>
      <div  className='p-4 ml-72 min-h-screen bg-gray-100 '>
        <CreateMdoel open ={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        <div className="flex justify-end gap-4">
        <Button onClick={()=>{setModalOpen(true)}} startIcon={<PlusIcon size={"md"} />} size="sm" variant="primary" text="Share Brain" />
        <Button startIcon={<ShareIcon size={"md"} />} size="sm" variant="secondary" text="Add content" />
        </div>
        <div className="flex gap-4">
          <Card type={"twitter"} link="https://twitter.com/itsharshag/status/1927276497737273353" title="tweet of the day" />
          <Card type={"youtube"} link="https://www.youtube.com/watch?v=bo7kyy4ffN0" title="song of the day" />
        
        </div>
      </div>
    </>
  )
}

export default DashBoard
