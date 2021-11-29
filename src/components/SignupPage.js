import Signup from "./Signup";


export default function SignupPage({
    signup,
    signedUp,
    setSignedUp,
    facade
     }) {
    return ( 
        <div>
            {!signedUp ? (<Signup signup={signup} setSignedUp={setSignedUp}/>) : (
            <div>
            <h1>Congratulations!!</h1>
            <h3>You have officially signed up. You may now login and use the features only registered users has access to.</h3>
            </div>
            )}
        </div>
     );
}
