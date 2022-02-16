import logo from './logo.svg';
import './App.css';
import profile from "./images/bx_bxs-user.png";
import sidepic from "./images/Side Design.png";
function App() {
  return (
    <div className="main">
         
         <img src={sidepic} />
    
      <div className="login-container">
        
          <div className ="imgs">
             
              <img src={profile} alt="profile" />
            
          </div>

          <div className="form">
            
            <h1> Administrator Login</h1>
            <div className="merg">
            <div className="un">
              <h3> Username</h3>
              <input type="text" id="uname" className="name"></input>
            </div>
            <div className="pw">
              <h3> Password</h3>
              <input type="password" id="uname" className="name"></input>
            </div>
            <br></br>

            <div>
            <table>
              <td>
              <input type="checkbox" name="rm" id="rmm"></input> Remember me 
              </td>
              <td>
                Forgot password?
              </td>
            </table>
            </div>

            <div className="login">
            <button>Login</button>
            </div>

            Don't have an account? Sign up
            
          
          
            </div>
          </div>
             
        </div>

      </div>
    
  );
}

export default App;
