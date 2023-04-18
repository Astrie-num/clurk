import {useState} from 'react'
import styles from '../styles'
import Search from './Search'
import { Divider } from '@mui/material'

const ChatsBar = () => {
  return (
    <div className={`${styles.flexColStart} gap-[2rem] w-[100%] h-[100%]`}>
      <div className={`${styles.flexCenter} w-[100%] h-[10%]`}>
        <Search />
      </div>

      <div className={`${styles.flexColCenter} gap-[1rem] w-[100%] overflow-y-scroll`}>
        {/* we will map here all the chats of a user */}
      </div>
    </div>
  )
}

export default ChatsBar