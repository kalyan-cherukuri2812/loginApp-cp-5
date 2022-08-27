import './index.css'

const Message = props => {
  const {login} = props
  const msg =
    login === false ? (
      <h1 className="heading">Please Login</h1>
    ) : (
      <h1 className="heading">Welcome user</h1>
    )

  return msg
}

export default Message
