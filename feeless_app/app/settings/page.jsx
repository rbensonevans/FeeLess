import Link from "next/link"

export default function SettingsPage() {
  return (
    <div>
    <main>
    <br/> <br/> <br/>
      <h1>FeeLess</h1>
      <br/>
        <nav>
          <Link href="start">Home</Link>&nbsp;&nbsp;
          <Link href="signup">Sign Up</Link>&nbsp;&nbsp;
          <Link href="/">Exit</Link>&nbsp;&nbsp;
          <Link href="settings">Settings</Link>&nbsp;&nbsp;
          <Link href="profile">Profile</Link>&nbsp;&nbsp;
        </nav>
        <br/> <br/>
        <h2>Settings</h2><br/>
        <button>Name</button><br/><br/>
        <button>Phone</button><br/><br/>
        <button>Address</button><br/><br/>
        <p>If this account belongs to a merchant click "Add to Merchant List"</p>
        <button>Add to Merchant List</button><br/><br/>
              
      </main>
  </div>
  )
}