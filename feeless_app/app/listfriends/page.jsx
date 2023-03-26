import Link from 'next/link'

export default function ListfriendsPage() {
  return (
    <div>
      <main>
      <br/> <br/> <br/>
      <nav>
      FeeLess &nbsp; &nbsp; &nbsp;
          <Link href="start">Home</Link>&nbsp;&nbsp;
          <Link href="signup">Sign Up</Link>&nbsp;&nbsp;
          <Link href="login">Login</Link>&nbsp;&nbsp;
          <Link href="/">Exit</Link>&nbsp;&nbsp;
          <Link href="settings">Settings</Link>&nbsp;&nbsp;
          <Link href="profile">Profile</Link>&nbsp;&nbsp;
        </nav>
        <br/><br/>
        <h1>List Friends</h1>
        <br/>
        <Link href="sendcash">Send Cash</Link>&nbsp;&nbsp;
        <Link href="viewreceivedcashtxns">View Received Cash Txns</Link>&nbsp;&nbsp;
        <Link href="listfriends">List My Friends</Link>&nbsp;&nbsp;
        <Link href="viewallcashtransactions">View All Cash Transactions</Link>&nbsp;&nbsp;

        <br/><br/>
        <li>John johnlucia@gmail.com</li>
        <li>Nikita nikita_pragg@gmail.com</li>
        <li>Adam adam_pragg@gmail.com</li>
        <li>Artem artem_pragg@gmail.com</li>
        <li>Eugene eugene_pragg@gmail.com</li>
        <li>Benson benson_nyc@gmail.com</li>

        <button><Link href="start">Done</Link></button>        
        </main>
    </div>
  )
}