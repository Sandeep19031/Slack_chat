import React from 'react'
import './Login.css';
import {Button} from '@material-ui/core';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [state, dispatch] =useStateValue();
    const signIn = () => {
        auth 
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className="login">
             <div className="login_container">
                 <img
                    src="https://brandfolder.com/slack/attachments/pl546j-7le8zk-btwjnu/slack-slack-rgb-genericfile.png?dl=true&resource_key=pl53se-o7edc-2zw45a&resource_type=Collection"
                 />
                 <h1>Sign into the Slack-clone chat</h1>
                 <p>slack-clone.chat.com</p>
                 <Button onClick={signIn}>Sign in with google</Button>
              </div>
        </div>
    )
}

export default Login
