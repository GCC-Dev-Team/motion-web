const regex = {
  userName: /^[a-zA-Z0-9]{1,8}$/,
  password: /^(?=.*[a-zA-Z])(?=.*\d).{9,16}$/
}

export default regex
