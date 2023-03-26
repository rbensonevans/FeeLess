import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import SignupPage from './signup/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main>
      <br/> <br/> <br/>
        <h1>FeeLess</h1>
        <p>Pay 0% for transactions</p>
        <br/>

          <h6>If first time use, click 'unlock', otherwise enter your pin then click 'unlock'</h6><br/>
          <nav>
          <button>1</button>&nbsp;&nbsp;
          <button>2</button>&nbsp;&nbsp;
          <button>3</button> <br/><br/>
          <button>4</button>&nbsp;&nbsp;
          <button>5</button>&nbsp;&nbsp;
          <button>6</button><br/><br/>
          <button>7</button>&nbsp;&nbsp;
          <button>8</button>&nbsp;&nbsp;
          <button>9</button><br/><br/>
            <button><Link href="start">Unlock</Link></button><br/>
          </nav><br/>
          <h6>Forgot? <button>Email hint</button></h6><br/>

        </main>
    </div>
  )
}
