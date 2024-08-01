import { useNavigate } from 'react-router-dom'

const AuthCheck = ({children}) => {
    const navigateToLogin = useNavigate()
    const isLogin = true

  if(isLogin){
    return children
  }

  if(!isLogin){
    navigateToLogin('/genzee/auth/login')
  }
}

export default AuthCheck
