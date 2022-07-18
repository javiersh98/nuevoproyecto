import eact from 'react';
import {useNavigate} from 'react-router-dom';
import useAuth from '../helpers/useAuth'
import config from 'helpers/config.json';

const login = () =>{
    const {setAuth} = useAuth();
    let navigate = useNavigate();

    const changeButtonState = (button, enabled) => {
        if(enabled){
            button.disabled = false;
            button.innerHTML = "<i class='fa fa-sing-in'><i/> Acceder";
        } else{
            button.disabled = true;
            button.innerHTML = "<i lass='fa fa-spin fa-spinner'></i>accediendo...";

        }
    }

    const showMessage = (visible, message) => {
        const messageBox = document.querySelector('alert');
        const reasonBox = document.querySelector("#reason");
        if(visible){
            reasonBox.innerHTML= message;
            messageBox-classList.remove('d-none')
        } else{
            reasonBox.innerHTML = "";
            messageBox.classList.add("d-none")
        }
    }

    const logger = async (event) => {
        event.preventDeafault();
        const button = document.querySelector('button');
        changeButtonState(button, false);

        var {username, pass} = document.forms[0];
        const user = username.value;
        const password = pass.value;
        if(user.length === 0 || password.length.form[0]){
            showMessage(true, "debe completar todos los campos");
            changeButtonState(button, true);
            return;
        }
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ nickname: user, password: password, operatorId})
        };

    }


    return(
        <div class="wrapper fadeInDown">
    <div id="formContent">
    
    <div class="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>

   
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
    </div>
    </div>
    )
}