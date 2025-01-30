import React, { useState } from 'react';

function Login() {
    return ( 
        <div className="container p-5 all-frontend-hero-con">
        <div className="row d-flex justify-content-center">
          <div className="col-4 form-box">
            <h1 className="text-center">Login</h1>
            <form>
              <div class="mb-3">
                <label class="form-label">
                  Username or Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
              <label class="form-label">
                Password
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
              <div className="mt-4 d-flex justify-content-evenly">
              <a href='/signup' className='btn-link'>Don't have account ? Create a Account</a>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button type="button" class="btn btn-primary">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
     );
}

export default Login;