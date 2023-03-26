import Link from 'next/link'

export default function StartPage() {
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
        <h1>FeeLess Wallet</h1>
        <br/>
        <Link href="sendtochain">Send To Chain</Link>&nbsp;&nbsp;
        <Link href="receivefromchain">Receive From Chain</Link>&nbsp;&nbsp;
        <Link href="friends">Friends</Link>&nbsp;&nbsp;
        <Link href="billpayment">Bill Payment</Link>&nbsp;&nbsp;
        <br/>

          <br/><br/>
          {/*}
          <h6>You do not have an account, please sign up.</h6><br/>
          <h6>Your login is not active, please log in.</h6><br/>

          <h6>Your no-logins period expires in 10 days</h6><br/>
  */}

          <h3>My Account Balances</h3>
          <select multiple name="my_balances">
            <option value="USD">USD 100</option>
             <option value="EUR">EUR 50</option>
              <option value="BTC">BTC 5</option>
            <option value="ETH">ETH 50</option>
              <option value="LTC">LTC 5</option>
          </select><br />


        
        </main>
    </div>
  )
}