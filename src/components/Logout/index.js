import './index.css'

const Logout = props => {
  const {login} = props

  return (
    <button className="btn" onClick={login} type="button">
      Logout
    </button>
  )
}
export default Logout
