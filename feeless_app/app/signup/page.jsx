import Link from "next/link"

export default function SignupPage() {
  return (
    <div>
    <main>
    <br/> <br/> <br/>
      <h1>FeeLess</h1>
      <br/>
        <nav>
          <Link href="start">Home</Link>&nbsp;&nbsp;
          <Link href="login">Login</Link>&nbsp;&nbsp;
          <Link href="/">Exit</Link>&nbsp;&nbsp;
          <Link href="settings">Settings</Link>&nbsp;&nbsp;
          <Link href="profile">Profile</Link>&nbsp;&nbsp;
        </nav>
        <br/> <br/>
        <h2>Sign Up</h2><br/>
        Email:<br/>
        Password:<br/>
        Password Hint:<br/><br/>

        <h4>Enter a 4 numeric passcode to unlock device </h4> 

        Lock:<br/>
        Lock Hint: <br/><br/>

        <h6>Hints will be emailed to the sign-up email.</h6><br/>

        <input type="submit" name="signup"></input><br/><br/>

      </main>
  </div>
  )
}