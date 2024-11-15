import React from 'react'
import Header from '../partials/Header'
import TaskListNumber from '../partials/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header />
            <TaskListNumber />
            <TaskList />
        </div>
    </div>
  )
}

export default EmployeeDashboard