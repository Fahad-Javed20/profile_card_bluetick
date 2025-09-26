
import './App.css'
import Card from './components/BlueTickCard'

export type BlueTickCard = {
  image:string,
  name:string,
  role:string,
  verified:boolean,
}

function App() {

  const profile: BlueTickCard = {
  image:"https://images.unsplash.com/photo-1743701168206-bd617221b559?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  name:"Fahad Bin Javed",
  role:"UI/UX Designer",
  verified:true,
  }

  return (
    <>
      <Card image= {profile.image} name = {profile.name} role = {profile.role} verified = {profile.verified}/>
    </>
  )
}

export default App
