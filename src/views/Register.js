import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div>
                <h3>Register</h3>
                <hr />
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <form action="{{ url_for('auth.register') }}" method="POST">
                            <div class="form-group">
                                <input type="text" class="form-control" name="first_name" placeholder="First Name" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="last_name" placeholder="Last Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" />
                            </div>
                            <button class="btn btn-info btn-block">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
