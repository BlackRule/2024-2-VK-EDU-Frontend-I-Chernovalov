import {MessageWithIsNew} from 'screens/chat/types.tsx'
import styles from './Message.module.scss'


function Message({name, time, text, isNew}: MessageWithIsNew) {
  return <div className={styles.message + (name === 'Иван' ? ` ${styles.my}` : '') + (isNew ? ` ${styles.new}` : '')}>
    <div className={styles.top}>
      <div className={styles.name}>{name}</div>
      <div className={styles.time}>{time}</div>
    </div>
    <div className={styles.text}>{text}</div>
  </div>
}

export default Message