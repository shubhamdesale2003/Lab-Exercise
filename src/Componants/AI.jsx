import React from 'react'
import './Tabs.scss'
import BFS from '../Assets/ai/bfs.png'
import DFS from '../Assets/ai/dfs.png'
const AI = () => {
  return (
    <div className='tabs-img'>
      <img src={BFS} alt="" />
      <img src={DFS} alt="" />
    </div>
  )
}

export default AI