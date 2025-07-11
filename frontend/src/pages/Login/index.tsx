import FormLogin from "../../components/Auth/FormLogin/index.tsx";
import CreateAccount from "../../components/Auth/CreateAccount/index.tsx";
import style from "./style.module.css";

function LoginPage() {
  return (
    <>
      <main className={style.main}>
        <div className={style.SingUpBox}>
          <div>
            <h1 className={style.title}>Login</h1>
          </div>
          <div>
            <FormLogin />
          </div>
          <div>
            <CreateAccount />
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
