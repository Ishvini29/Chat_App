import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'
import image1 from "./image1.png"




function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <center><img src={image1} style={{ height: "400px", width: "400px" }} /></center>
            <div style={{ display: 'flex', justifyContent: 'center', height: '20vh', alignItems: 'center' }}>
                <button
                    style={{
                        padding: '20px',
                        fontSize: '20px',
                        borderRadius: '10px',
                        fontWeight: '600',
                        backgroundColor: '#9c92cd',
                        borderColor: '#9c92cd',
                        color: '#000',
                    }} onClick={signInWithGoogle}>Sign In With Google</button>
            </div></div>
    )
}

export default SignIn