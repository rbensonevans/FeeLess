import Link from 'next/link'

export default function ViewallpaymentsPage() {
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
        <h1>View All Payments</h1>
        <br/>
        <Link href="paybill">Pay Bill</Link>&nbsp;&nbsp;
        <Link href="viewallpayments">View All Payments</Link>&nbsp;&nbsp;
        <Link href="listmerchants">List Merchants</Link>&nbsp;&nbsp;
        <Link href="addmerchants">Add Merchants</Link>&nbsp;&nbsp;
        <Link href="deletemerchants">Delete Merchants</Link>&nbsp;&nbsp;

        <br/><br/>
        Paid Bills<br/><br/>
        <li>Electric Bill $400 3/1/2023</li>
        <li>Water Bill $55 3/1/2023</li>
        <li>Mortgage $3100 3/1/2023</li>
        <li>Cell $33 3/1/2023</li>
        <li>Macy's Credit Card $100 3/1/2023</li>
        <li>Capital One $300 3/1/2023</li>
        <br/>
        <button><Link href="start">Done</Link></button>        
        </main>
    </div>
  )
}