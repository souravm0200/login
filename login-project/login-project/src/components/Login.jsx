import React from 'react'
import './Login.css'
export default function Login() {
    return (
        <div className='Vcenter'>
            <main className="login-form">
                <div className="cotainer">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    <form action="" method="">
                                        <div className="form-group row">
                                            <label htmlFor="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                            <div className="col-md-6">
                                                <input type="text" id="email_address" className="form-control" name="email-address" required autofocus />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-2">
                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                            <div className="col-md-6">
                                                <input type="password" id="password" className="form-control" name="password" required />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6 offset-md-4">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" name="remember" /> Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Register
                                            </button>
                                            <a href="#" className="btn btn-link">
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
