import Link from 'next/link'

export default function ViewreceivedcashtxnPage() {
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
        <h1>View Received Cash Txns</h1>
        <br/>
        <Link href="sendcash">Send Cash</Link>&nbsp;&nbsp;
        <Link href="viewreceivedcashtxns">View Received Cash Txns</Link>&nbsp;&nbsp;
        <Link href="listfriends">List My Friends</Link>&nbsp;&nbsp;
        <Link href="viewallcashtransactions">View All Cash Transactions</Link>&nbsp;&nbsp;

        <br/><br/>

        <li>Txn-100: Recvd 0.123 eth from Alicia</li>
        <li>Txn-100: Recvd 0.1 eth from Nikita</li>
        <button><Link href="start">Done</Link></button> 
        </main>
    </div>
  )
}