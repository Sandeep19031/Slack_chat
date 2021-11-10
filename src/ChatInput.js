import React,{useState} from 'react'
import './ChatInput.css';
import db from './firebase';
import {useStateValue} from './StateProvider';
import firebase from 'firebase';

import { Formik, Form, Field, ErrorMessage } from 'formik';
function ChatInput({channelName, channelId }) {

    
    const [{user}] =useStateValue(); 
    

    function sendMessage(input) {
        console.log(input);
        if(channelId && input != ""){
                db.collection('rooms').doc(channelId).collection('messages')
                .add({
                    message: input,
                    timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userimage: user.photoURL,
                })
        }   
       
        
    };
     

    return ( 
        <div className="chatInput">
            <Formik
          initialValues={{  msg: '' }}
       
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
           
             
              sendMessage(values["msg"]);
              resetForm();
              setSubmitting(false);
              
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form_input">           
              <Field type="text" name="msg"  placeholder= {`Message@# ${channelName?.toLowerCase()}`} />
              <ErrorMessage name="msg" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        </div>
    )
}

export default ChatInput;
