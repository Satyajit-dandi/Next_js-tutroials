import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HEllo Welcpme to future</h1>
      <User name="Satyajit"></User>
       </main>
  )
}


const User = (props)=>{
return(
    <h4>I am Jarvis, assistant of Mr.{props.name}</h4>
)
}