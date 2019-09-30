import React from 'react';
import logopizza from '../assets/images/logopizza.png';
import dexpress from '../assets/images/dexpress.png';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        alert('A name was submitted: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <main id="login" className="fixed-background">
                <div className="container">
                    <div className="row h-100">
                        <div className="m-auto col-12 col-md-10">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="image-side dark col-lg-4 d-flex justify-content-center align-items-center">
                                        <img src={logopizza} alt="logo2" className="logo-shop" />
                                    </div>
                                    <div className="content-side col-lg-8">
                                        <div className="card-body">
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="logo mb-3 mb-md-4">
                                                    <img src={dexpress} className="d-inline-block align-top" alt="Dexpress" />
                                                </div>
                                                <div className="mb-4 card-title">Iniciar sesión</div>
                                                <div className="form-group has-float-label form-group">
                                                    <label className=""><span>Email</span></label>
                                                    <input name="username" className="form-control" type="email" required value={this.state.username} onChange={this.handleInputChange}/>
                                                </div>
                                                <div className="form-group has-float-label form-group">
                                                    <label className=""><span>Contraseña</span></label>
                                                    <input name="password" className="form-control" required type="password" value={this.state.password}  onChange={this.handleInputChange}/>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <a href="/forgot-password"><span>¿Olvido su contraseña?</span></a>
                                                    <button className="btn-shadow btn-multiple-state  btn btn-primary btn-lg" >
                                                        <span className="label">
                                                            <span>Iniciar sesión</span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Footer;