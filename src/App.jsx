import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Room from './Room'
import Web from './Web'

const App = () => {
  return (
    
    <Router>
      <Routes>
       <Route path="/" element={<Web/>}/>
       <Route path='/room/:id' element={<Room/>}/>
      </Routes>
    </Router>

  )
}

export default App;