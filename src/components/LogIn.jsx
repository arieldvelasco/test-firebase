// REACT
import { useState } from "react";

// FIREBASE
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// BOOTSTRAP
import { Button, Form } from "react-bootstrap";


const LogIn = () => {

    const [ userName, setUserName ] = useState('');
    const [ userPass, setUserPass ] = useState('');

    console.log(auth?.currentUser?.email);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, userName, userPass);
        } catch(err) {
            console.error(err);
        }

        setUserName('');
        setUserPass('');

        alert(`user: ${auth?.currentUser?.email} Loged In`);
    }

    const signInWithGoogle = async (e) => {
        e.preventDefault();

        try {
            await signInWithPopup(auth, googleProvider);
        } catch(err) {
            console.error(err);
        }

        setUserName('');
        setUserPass('');

        alert(`user: ${auth?.currentUser?.email} Loged In`);
    }

    const logOut = (e) => {
        e.preventDefault();
        try {
            signOut(auth);
        } catch(err) {
            console.error(err);
        }

        alert(`user Loged Out`);
    }

    return (
        <Form style={{maxWidth: 500, margin:"0 auto"}}>
            <Form.Control type="text" placeholder="EMail" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <Form.Control type="password" value={userPass} onChange={(e) => setUserPass(e.target.value)} />
            <Button variant="primary" onClick={(e) => handleSubmit(e)} >Log In</Button>
            <Button variant="primary" onClick={(e) => signInWithGoogle(e)} >Google</Button>
            <Button variant="danger" onClick={(e) => logOut(e)} >Log Out</Button>
        </Form>
    )
}

export default LogIn