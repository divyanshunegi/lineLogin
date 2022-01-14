import Head from 'next/head'
import LineLoginButton from "../src/components/LineLoginButton";

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-white justify-items-center items-center">
        <Head>
            <title>Simple LINE login test app</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="h-96 w-96 bg-white shadow-2xl flex flex-col m-auto">
            <h1 className="text-2xl font-extrabold place-self-center mt-10 text-gray-700">LINE Login Test</h1>
            <p className="place-self-center mt-1 text-gray-400 p-3 text-sm text-center">Please try login on LINE using Desktop browser and Mobile Browser</p>
            <div className={"m-auto"}>
                <LineLoginButton />
            </div>

        </div>
    </div>
  )
}
