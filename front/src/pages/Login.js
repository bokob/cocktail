import login from "../css/Login.module.css";

export default function Login() {
  return (
    <div className={login.login_box}>
      <h2>Login</h2>
      <form>
        <div className={login.user_box}>
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className={login.user_box}>
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
