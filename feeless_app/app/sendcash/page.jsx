import Link from 'next/link'

export default function SendcashPage() {
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
        <h1>Send Cash</h1>
        <br/>
        <Link href="sendcash">Send Cash</Link>&nbsp;&nbsp;
        <Link href="viewreceivedcashtxns">View Received Cash Txns</Link>&nbsp;&nbsp;
        <Link href="listfriends">List My Friends</Link>&nbsp;&nbsp;
        <Link href="viewallcashtransactions">View All Cash Transactions</Link>&nbsp;&nbsp;

        <br/><br/>
      <label for="network">Select Your Token/Coin: </label> Ethereum <br/><br/>
      <label for="currentbalancelabel">Current Balance: 2</label>
      <label for="currentbalancetype"> eth</label> <br/><br/>
      <label for="sendamountlabel">Send Amount: </label>

       <input type="number" name="sendamount" value="0.2"></input><br/><br/>
       <label for="address">Select Friend's Email Address:</label>
       <input type="text" name="sendtoaddress"></input><br/><br/>
       <button> <Link href="sendtochainconfirm">Send</Link></button><br/>
     
        </main>
    </div>
  )
}