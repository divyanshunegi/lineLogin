import Head from 'next/head'
import LineLoginButton from "../src/components/LineLoginButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-700">
        <h1 className="text-3xl font-extrabold place-self-center m-5">LINE Login Testing</h1>
        <LineLoginButton />
    </div>
  )
}
