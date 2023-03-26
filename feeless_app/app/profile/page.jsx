import Link from "next/link"

export default function ProfilePage() {
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
        <h2>Profile</h2><br/>
        <button>Photo</button><br/><br/>
        <button>Birthdate (mm/yyyy)</button><br/><br/>
      </main>
  </div>
  )
}