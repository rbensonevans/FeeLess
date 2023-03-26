import Link from 'next/link'

export default function FriendsPage() {
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
        <h1>Friends Network</h1>
        <br/>
        <Link href="sendcash">Send Cash</Link>&nbsp;&nbsp;
        <Link href="viewreceivedcashtxns">View Recieved Cash Txn</Link>&nbsp;&nbsp;
        <Link href="listfriends">List My Friends</Link>&nbsp;&nbsp;
        <Link href="viewallcashtransactions">View All Cash Transactions</Link>&nbsp;&nbsp;

        <br/><br/>
        <li>Txn-100: Sent 0.2 eth to Ethglobal</li>
        <li>Txn-100: Sent 0.1 eth to John</li>
        <li>Txn-100: Sent 0.012 eth to Starbucks</li>
        <li>Txn-100: Recvd 0.123 eth from Alicia</li>
        <li>Txn-100: Sent 0.005 eth to Artem</li>
        <li>Txn-100: Sent 0.001 eth to Adam</li>
        <li>Txn-100: Recvd 0.1 eth from Nikita</li>
        <li>Txn-100: Sent 0.0001 eth to CoffeeShop</li>
        <li>Txn-100: Sent 0.0003 eth to GoodBurgers</li>
        <li>Txn-100: Sent 0.06 eth to Flo ShoeStore</li><br/>
        <button><Link href="start">Done</Link></button>

        </main>
    </div>
  )
}