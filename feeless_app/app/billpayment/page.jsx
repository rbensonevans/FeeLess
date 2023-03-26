import Link from 'next/link'

export default function BillpaymentPage() {
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
        <h1>Bill Payment Network</h1>
        <br/>
        <Link href="paybill">Pay Bill</Link>&nbsp;&nbsp;
        <Link href="viewallpayments">View All Payments</Link>&nbsp;&nbsp;
        <Link href="listmerchants">List Merchants</Link>&nbsp;&nbsp;
        <Link href="addmerchants">Add Merchants</Link>&nbsp;&nbsp;
        <Link href="deletemerchants">Delete Merchants</Link>&nbsp;&nbsp;
        
        <br/><br/>
        Current Bills<br/><br/>
        <li>Electric Bill $400</li>
        <li>Water Bill $55</li>
        <li>Mortgage $3100</li>
        <li>Cell $33</li>
        <li>Macy's Credit Card $100</li>
        <li>Capital One $300</li>
        <br/>
        <button><Link href="start">Done</Link></button>  
        </main>
    </div>
  )
}