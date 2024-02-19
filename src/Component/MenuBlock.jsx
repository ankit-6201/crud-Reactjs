import React from 'react'
import style from "./findcoder.module.css"
import { Link } from 'react-router-dom'

const MenuBlock=()=> {
  return (
    <div id={style.menuBlock}>
<ol className={style.a}>
      <li><Link to="/explore">Explore Work</Link></li>
      <li><Link to="/hire">Hire Talents</Link></li>
      <li><Link to="/dev">Dev Board</Link></li>
      <li><Link to="/challenge">Challnges</Link></li>
</ol>
    </div>
  )
}

export default MenuBlock
