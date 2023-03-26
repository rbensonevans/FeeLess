import Link from "next/link"

export default function SendtochainPage() {
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
    <h1>Send to an Address on Chain</h1>
    <br/>
    
      <label for="network">Select Your Network: </label> Ethereum <br/><br/>
      <label for="currentbalancelabel">Current Balance: 2</label>
      <label for="currentbalancetype"> eth</label> <br/>
      <label for="sendamountlabel">Send Amount: </label>

       <input type="text" name="sendamount" value="0.2"></input><br/><br/>
       <label for="address">Paste in the On-Chain Address:</label>
       <input type="text" name="sendtoaddress"></input><br/><br/>
       <button> <Link href="sendtochainconfirm">Send</Link></button><br/>


    </main>
  </div>
  )
}