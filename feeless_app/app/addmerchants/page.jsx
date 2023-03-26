import Link from 'next/link'

export default function AddmerchantsPage() {
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
        <h1>Add Merchants</h1>
        <br/>
        <Link href="paybill">Pay Bill</Link>&nbsp;&nbsp;
        <Link href="viewallpayments">View All Payments</Link>&nbsp;&nbsp;
        <Link href="listmerchants">List Merchants</Link>&nbsp;&nbsp;
        <Link href="addmerchants">Add Merchants</Link>&nbsp;&nbsp;
        <Link href="deletemerchants">Delete Merchants</Link>&nbsp;&nbsp;
        <br/>
        <br/><br/>

      <label for="merchantnamelabel">Search by Merchant's Name: </label>
       <input type="text" name="merchantname" value="Macy's Store"></input><br/><br/>
       <button> <Link href="findmerchant">Find Merchant By Name</Link></button><br/><br/>
       <br/><br/>
       Merchants Found<br/><br/>
       <li><button><Link href="addmerchant">Add</Link></button>&nbsp;Macy's NYC Store      <input type="text" name="merchantpayday" value="due date: 4/15/2023"></input>       <input type="amount" name="merchantpayamount" value="amount due: $300"></input> </li><br/><br/>          


        <li><button><Link href="addmerchant">Add</Link></button>&nbsp;Macy's NJ Store       <input type="text" name="merchantpayday" value="due date: 4/15/2023"></input>        <input type="amount" name="merchantpayamount" value="amount due: $300"></input> </li><br/><br/>        


        <li><button><Link href="addmerchant">Add</Link></button>&nbsp;Macy's Dubai Store       <input type="text" name="merchantpayday" value="due date: 4/15/2023"></input>        <input type="amount" name="merchantpayamount" value="amount due $300"></input> </li><br/><br/>         


        <li><button><Link href="addmerchant">Add</Link></button>&nbsp;Macy's London Store      <input type="text" name="merchantpayday" value="due date: 4/15/2023"></input>        <input type="amount" name="merchantpayamount" value="amount due: $300"></input> </li><br/><br/>         
 

        <li><button><Link href="addmerchant">Add</Link></button>&nbsp;Macy's Florida Store       <input type="text" name="merchantpayday" value="due date: 4/15/2023"></input>        <input type="amount" name="merchantpayamount" value="amount due: $300"></input> </li><br/><br/>          
             
        </main>
    </div>
  )
}