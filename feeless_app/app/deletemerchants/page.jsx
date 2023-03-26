import Link from 'next/link'

export default function DeletemerchantsPage() {
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
        <h1>Delete Merchants</h1>
        <br/>
        <Link href="paybill">Pay Bill</Link>&nbsp;&nbsp;
        <Link href="viewallpayments">View All Payments</Link>&nbsp;&nbsp;
        <Link href="listmerchants">List Merchants</Link>&nbsp;&nbsp;
        <Link href="addmerchants">Add Merchants</Link>&nbsp;&nbsp;
        <Link href="deletemerchants">Delete Merchants</Link>&nbsp;&nbsp;
        <br/>
        <br/><br/>
        Current Merchants<br/><br/>
        <li><button><Link href="deletemerchant">Delete</Link></button>&nbsp;Electric Bill $400 </li>       

        <li><button><Link href="deletemerchant">Delete</Link></button>&nbsp;Water Bill</li>
        <li><button><Link href="deletemerchant">Delete</Link></button>&nbsp;Mortgage</li>
        <li><button><Link href="deletemerchant">Delete</Link></button>&nbsp;Cell</li>
        <li><button><Link href="deletemerchant">Delete</Link></button>&nbsp;Macy's Credit Card</li>
        <li><button><Link href="deletemerchant">Delete</Link></button>&nbsp;Capital One</li>
        <br/>
        <button><Link href="start">Done</Link></button>        
        </main>
    </div>
  )
}