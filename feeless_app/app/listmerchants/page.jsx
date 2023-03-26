import Link from 'next/link'

export default function ListmerchantsPage() {
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
        <h1>List Merchants</h1>
        <br/>
        <Link href="paybill">Pay Bill</Link>&nbsp;&nbsp;
        <Link href="viewallpayments">View All Payments</Link>&nbsp;&nbsp;
        <Link href="listmerchants">List Merchants</Link>&nbsp;&nbsp;
        <Link href="addmerchants">Add Merchants</Link>&nbsp;&nbsp;
        <Link href="deletemerchants">Delete Merchants</Link>&nbsp;&nbsp;
        <br/><br/>
        Current Merchants<br/><br/>
        <li>Electric Bill </li>
        <li>Water Bill </li>
        <li>Mortgage </li>
        <li>Cell </li>
        <li>Macy's Credit Card </li>
        <li>Capital One </li>
        <br/>
        <button><Link href="start">Done</Link></button>               
        </main>
    </div>
  )
}