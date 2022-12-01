import React from 'react'
import {LeftBar,RightBar} from '../components'
function Layout() {
  return (
    <div className="flex flex-row">
        <LeftBar/>
        <div>Center screen</div>
        <RightBar/>
    </div>
  )
}

export default Layout