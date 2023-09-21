export default function Card({card}){
    return(
        <div className="card">
        <img src="http://placekitten.com/120/100"/>
        <ul className="stat.list">
           {card.stats.map((stat,index) =>(
           <li className="stat-list-item" key={index}>
                <span>{stat.name}</span>
                <span>{stat.value}</span>   

            </li>       
           ))}
        </ul>
            
        </div>
    );  
        








}