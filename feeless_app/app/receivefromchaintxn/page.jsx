import Link from "next/link"

export default function receivefromchaintxnPage() {
  return (
    <div>
    <main>
    <br/> <br/> <br/>
    <nav>
          <Link href="start">Home</Link>&nbsp;&nbsp;
          <Link href="signup">Sign Up</Link>&nbsp;&nbsp;
          <Link href="/">Exit</Link>&nbsp;&nbsp;
          <Link href="settings">Settings</Link>&nbsp;&nbsp;
          <Link href="profile">Profile</Link>&nbsp;&nbsp;
    </nav>
    <br/><br/>
    <h1>Receive From Chain Txn Request</h1>
    <br/>
       <label for="network">Your Network: </label> Ethereum <br/><br/>
       <label for="addresslabel">Your On Chain Address: </label>
       <label for="address">0xouaosdfaosdfpausdfasdf</label> <br/><br/>
       <label for="sendersemail" name="sendersemailaddress"></label><br/><br/>
       <button><Link href="start"><h3>Request Sent</h3></Link></button>
    </main>
  </div>
  )
}