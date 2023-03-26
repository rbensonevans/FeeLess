import Link from "next/link"

export default function SendtochainconfirmPage() {
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
    <h1>Confirm Send to Chain</h1>
    <br/>
       <label for="txnid">Txn Id: eth-chain-3403-04-23092</label> <br/> <br/>
       <label for="amountlabel">Amount: </label>
       <label for="amount">0.2 eth</label> <br/> <br/>
       <label for="networklabel">Network: </label>
       <label for="network">Ethereum</label> <br/> <br/>
       <label for="addresslabel">On Chain Address: </label>
       <label for="address">0x9u343pisefouse89u29ur309qur</label> <br/> <br/>
       <button><Link href="sendtochaintxn">Confirm</Link></button><br/> <br/>

    </main>
  </div>
  )
}