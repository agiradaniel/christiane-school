import Link from 'next/link'
import styles from '../../page.module.css'

export default function Contacts() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul style={{textDecoration:"none", listStyle:"none", display:"flex"}}>
          <li style={{marginRight:"10px"}}><Link href="/next-test">Home</Link></li>
          <li style={{marginRight:"10px"}}><Link href="/next-test/about">About</Link></li>
          <li><Link href="/next-test/contacts">Contacts</Link></li>
        </ul>
        Contacts page
      </div>
    </main>
  )
}
