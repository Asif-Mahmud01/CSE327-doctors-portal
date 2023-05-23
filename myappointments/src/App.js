import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';

import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';
const App = () => {
  return (
    <div>
        <Navbar/>  {/*adding the navbar */}
        <br></br>
        
        <Sidebar />  {/*adding the drawer component */}
        <Table />     {/*adding the table component */}
    </div>
  )
}

export default App