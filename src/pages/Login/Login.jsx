import logo from '../../assets/Imgs/logo.png'
import { Link } from 'react-router-dom'
import './Login.css'

import { MoveRight } from 'lucide-react'

function Login() {
    return(
        <section className="login-page">
            <div className="login__container">
                <div className="login__container-right">
                    <div className="container__right-content">
                        <div className="container__right-content-head">
                            <div className="content__head-right">
                                <img src={logo} alt="" />
                            </div>
                            <div className="content__head-left">
                                <Link to='/'>Back to website <MoveRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login__container-left">
                    <div className="container__left-content">
                        <div className="container__left-content-head">
                            <h1>Create an account</h1>
                            <p>
                                Already have an account? <Link to='#'>Log in</Link>
                            </p>
                        </div>
                        <div className="container__left-content-middle">
                            <form action="">
                                <div className="name">
                                    <input type="text" placeholder='First name' />
                                    <input type="text" placeholder='Last name' />
                                </div>
                                <input type="email" placeholder='Email' className='inputAA' />
                                <input type="password" placeholder='Create your password' className='inputAA' />
                                <p>
                                    <input type="checkbox" className='confirm' />
                                    <span>
                                        I agree to the <Link>Terms & Conditions</Link>
                                    </span> 
                                </p>
                                <button className='form-btn'>Create account</button>
                            </form>
                        </div>
                        <div className="container-line">
                            <div className="right-line"></div>
                            <p>Or register with</p>
                            <div className="left-line"></div>
                        </div>
                        <div className="container__left-content-bottom">
                            <Link>
                                <img src="src/assets/Imgs/icons/7123025_logo_google_g_icon.svg" className='icon-google'/> Google
                            </Link>
                            <Link>
                                <img src="src/assets/Imgs/icons/104490_apple_icon.svg" className='icon-apple'/>Apple
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login