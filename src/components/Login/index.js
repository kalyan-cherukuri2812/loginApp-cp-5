import './index.css'

const Login = props => {
  const {login} = props
  const lgb = (
    <button className="btn" onClick={login} type="button">
      Login
    </button>
  )

  return lgb
}
export default Login
