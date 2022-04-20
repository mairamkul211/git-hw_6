function formatDate(date){
    return date.toLocaleDateString();
  }

function Commenet (props) {
return(
    <div className="Commenet">
    <div className='UserInfo'>
      <img className='Avata' src={props.author.avatarUrl} alt={props.author.name} />
      <div className='UserInfo-name'>{props.author.name}</div>
    </div>
    <div className='Comment-text'>{props.text}</div>
 </div>
)
}

export default Commenet