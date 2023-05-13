import React from "react";
import "../../App.css";
import PasswordBox from "../PasswordBox/PasswordBox";

function Register({email}) {


    const onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    const onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    const onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }


    const onSubmitSignIn = (e) => {
        // debugger
        e.preventDefault();
        fetch('https://smartbrainappbackend.onrender.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                entries: this.state.entries
            })
        })

            .then(res => res.json())
            .then(user => {
                console.log("In fetch on Buttom Submit")
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                } else {
                    this.setState({errMessage: user})
                }
            })
    }


        return (
            <div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <form className="measure" onSubmit={this.onSubmitSignIn}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <PasswordBox/>
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </form>
                </main>
            </article>
            </div>
                );
}

export default Register