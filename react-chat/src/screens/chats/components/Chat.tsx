import cn from 'classnames'
import {Message, SwitchScreenTo} from '@/types.ts'
import MaterialSymbol from 'components/MaterialSymbol/MaterialSymbol.tsx'
import styles from './Chat.module.scss'


type ChatProps = Omit<Message,'text'>&{
    count?: number,
    image: string,
    state: string,
    switchScreenTo: SwitchScreenTo,
} & (
    { text: string }
    |
    { image_attachment_alt: string }
    )

function Chat({name, time, state, image, count, switchScreenTo, id, ...props}: ChatProps) {
  let badge = null
  switch (state) {
  case 'new':
    badge = <div className={cn(styles.badge, styles.new)}>{count}</div>
    break
  case 'unread':
    badge = <MaterialSymbol symbol='done_all' className={cn(styles.badge, styles.unread)}/>
    break
  case 'read':
    badge = <MaterialSymbol symbol='check' className={cn(styles.badge, styles.read)}/>
    break
  case 'mention':
    badge = <div className={cn(styles.badge,styles.mention)}>{count}</div>
  }
  let text
  if ('image_attachment_alt' in props)
    text = <><MaterialSymbol symbol='photo_camera' hoverable={false} className={styles.photo_camera}/> {props.image_attachment_alt}</>
  else text = props.text
  return <>
    <a className={styles.chat} onClick={(e) => {
      switchScreenTo('chat')
      e.preventDefault()
    }}>
      <img src={image} alt="avatar"/>
      <div className={styles.body}>
        <div className={styles.top}>
          <div className={styles.name}>{name}</div>
          <div className={styles.time}>{time}</div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.text}>{text}</div>
          {badge}
        </div>
      </div>
    </a>
  </>
}

export default Chat