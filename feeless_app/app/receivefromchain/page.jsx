import Link from "next/link"

export default function receivefromchainPage() {
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
    <h1>Receive From Chain</h1>
    <br/>
       <label for="network">Select Your Network: </label> Ethereum <br/> <br/>
       <label for="address">Generated On Chain Address: </label>
       <label for="address">0xouaosdfaosdfpausdfasdf</label> <br/> <br/>
       <label for="address">Sender's Email address: </label>
       <input type="text" name="sendersemailaddress"></input><br/><br/>

       <button><Link href="receivefromchaintxn">Email Sender My Generated On-chain Address</Link></button>
    </main>
  </div>
  )
}