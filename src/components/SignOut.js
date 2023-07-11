import React from 'react';
import { auth } from '../firebase.js';

function SignOut() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start', // Updated to 'flex-start'
            position: 'fixed',
            width: '100%',
            backgroundColor: '#FAFAFA',
            top: 0,
            borderBottom: 'solid 1px lightgray',
            zIndex: '0'
        }}>
            <button className='btn1'
                style={{
                    padding: '13px',
                    fontSize: '20px',
                    borderRadius: '10px',
                    fontWeight: '600',
                    borderColor: '#9c92cd',
                    color: '#000',
                }}
                onClick={() => auth.signOut()}
            >
                Sign Out
            </button>
        </div>
    );
}

export default SignOut;
