// import React, { useState, useEffect, useRef } from 'react'
// import { db, auth } from '../firebase'
// import SignOut from './SignOut'
// import SendMessage from './SendMessage'


// function Chat() {
//     const scroll = useRef()
//     const [messages, setMessages] = useState([])
//     useEffect(() => {
//         db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
//             setMessages(snapshot.docs.map(doc => doc.data()))
//         })
//     }, [])
//     return (
//         <div>
//             <SignOut />
//             <div className="msgs">
//                 {messages.map(({ id, text, photoURL, uid }) => (
//                     <div>
//                         <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
//                             <img src={photoURL} alt="" width="25px" />
//                             <p>{text}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <SendMessage scroll={scroll} />
//             <div ref={scroll}></div>

//         </div>
//     )
// }

// export default Chat


import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} className='img1' alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat