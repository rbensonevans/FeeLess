import Link from "next/link"

export default function LoginPage() {
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
        <h2>Login</h2><br/>
        Email:<br/>
        Password:<br/>
        Keep me logged in for 30 days <input type="checkbox" name="30days"></input><br/><br/>
        <h6>Forgot? <button>Email hint</button></h6><br/>


      </main>
  </div>
  )
}