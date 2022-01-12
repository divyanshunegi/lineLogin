import Link from "next/link";
import Image from 'next/image'
import Images from "../../public/images";

const LineLoginButton = () => {
    const login = () => {
        window.location.assign('https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656797734&redirect_uri=https://line.divd.xyz/callback&scope=profile%20openid&nonce=09876xyz&state=22assas322123')
    }
    return(
        <>
            <div onClick={()=> login()} className="w-40 h-10 bg-emerald-700 rounded flex flex-row hover:bg-emerald-600 hover:cursor-pointer">
                <div className='ml-1 mr-1 flex items-center justify-center'>
                    <Image src={Images.LINE_WHITE_ICON} width={33} height={33} layout='fixed' className="" />
                </div>
                <div className="bg-emerald-800 w-1 h-auto"/>
                <div className="flex h-auto w-screen items-center justify-center">
                    <p className="text font-bold text-cyan-50">Log In</p>
                </div>
            </div>
            {/*<button className="h-20 w-20 place-self-center" onClick={() => login()}>LOGIN WITH LINE</button>*/}
        </>
    )
}

export default LineLoginButton
