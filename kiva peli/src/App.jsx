import Card from './assets/components/Card'
import './app.css'
const playerCard = {
    image: "http://placekitten.com/120/100",
    stats: [{name:"kitty power", value: 10}]
}
export default function App(){
    return(
    <> 
        <h1>hello world!</h1>
        <Card card={playerCard}>

        </Card>
     </>   
    );
  
}