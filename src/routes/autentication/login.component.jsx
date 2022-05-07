import './login.styles.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
return(<div className="auth-wrapper">
<div className="auth-box">
    
        <div className="logo ">
            <div className="logo" >
            <img className = 'img-fluid' src={require('../../assets/images/logo-text.png')} width="150" height="40" alt="logo" />
            </div>
            <div className="centered">
            <h5>Bienvenido a Portal de Utilerias</h5>
            </div>
        </div>
       
            <Form className = 'form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <br></br>
              <Form.Control type="email" placeholder="Usuario" />
              <br></br>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            
            </Form.Group>
               <br/>
            <div className="d-grid gap-2">
                <Button className="primary" size="sm">
                    Aceptar
                </Button>
            </div>
            
          </Form>

    </div>
    </div>

);
}
export default Login