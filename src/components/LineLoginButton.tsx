import Link from "next/link";

const LineLoginButton = () => {
    const login = () => {
        window.location.assign('https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656797734&redirect_uri=http://localhost:3000/callback&scope=profile%20openid&nonce=09876xyz&state=22assas322123')
    }
    return(
       <button className="h-20 w-20 place-self-center" onClick={()=>login()}>LOGIN WITH LINE</button>
    )
}

export default LineLoginButton
