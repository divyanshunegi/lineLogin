import LineLoginButton from "../src/components/LineLoginButton";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import LineLoginService from "../src/services/LineLogin.service";

const Callback = () => {

    type LineProfile = {
        userId: string;
        displayName: string;
    }

    const [loginSuccess, setLoginSuccess] = useState<boolean>(false)
    const [error, setErrorMessage] = useState<string | null | string[]>(null)
    const [lineProfile, setLineProfile] = useState<LineProfile | null>(null)
    const router = useRouter()

    const getUserDetails = async (code: string | string[]) => {
        console.log('getUserDetails', code)
        const lineLoginService = LineLoginService.getInstance()
        const userProfile = await lineLoginService?.getUserProfile(code as string)
        setLineProfile(userProfile)
    }

    useEffect(() => {
       if(router.query.code){
           if(router?.query?.error){
               setErrorMessage(router.query.error)
           } else {
               alert(router.query.code)
               setLoginSuccess(!!router?.query?.code)
               getUserDetails(router.query.code as string)
           }
       }
    },[router.query.code])

    type Props = {

        success: boolean
    }

    const StatusView : React.FC<Props> = (props: Props) => {
        let successStatus = "Failed";
        let style = 'w-96 bg-red-600 opacity-30 pl-10 pr-10 pt-4 pb-4 rounded-2xl'
        if(props.success) {
            successStatus = "Success"
        }
        if(props.success) {
            style = 'w-96 bg-green-600 opacity-30 pl-10 pr-10 pt-4 pb-4 rounded-2xl'
        }
        return(<div className={style}>
                {successStatus}
            </div>
        )
    }

    return (
        <div className="flex w-screen h-screen bg-white justify-items-center items-center">
            <div className="h-auto w-auto bg-white shadow-2xl flex flex-col m-auto">
                <h1 className="text-2xl font-extrabold place-self-center mt-10 text-gray-700 p-3">Thanks for trying LINE Demo Login</h1>
                <p className="place-self-center mt-1 text-gray-400 p-3 text-sm text-center">Here are the stats for the login callback</p>
                <div className={"p-8"}>
                    <StatusView success={true} />
                    { error !== null ? <p className={"mt-5"}>Error: {error}</p> : null  }
                    { lineProfile !== null ? <>
                        <p className={"mt-5"}>Name: {lineProfile.displayName}</p>
                        <p className={"mt-5"}>Id: {lineProfile.userId}</p>
                    </> : null }

                </div>

            </div>
        </div>
    )

}

export default Callback;
