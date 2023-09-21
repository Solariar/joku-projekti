import Card from './assets/components/Card'
import './app.css'
const playerCard = {
    image: "http://placekitten.com/120/100",
    stats: [{name:'kitty power', value: 16},
    {name:'speed', value:56}]
        }

const opponentCard = {
    image: "http://placekitten.com/120/100",
    stats: [{name: 'kitty power', value: 15},
    {name:'speed', value: 55}]
    
}
           

export default function App(){
  function compareCards(){
    const playerStats = playerCard.stats[0];
    const opponentStats = opponentCard.stats[0];
    let result = '';

    if(playerStats.value === opponentStats.value){
        result = "draw";
    }
    else if(playerStats.value > opponentStats.value){
     result = "you win";
    }
    else{
        result = "you lost"
    }

    console.log(result);
    
    
    console.log("Button Destroyed!")
  }


    return(
    <> 
        <h1>hello world!</h1>
        <Card card={playerCard}></Card>
        <button type='button' onClick={compareCards}>Play</button>
        <Card card={opponentCard}></Card>
     </>   
    );
  
}