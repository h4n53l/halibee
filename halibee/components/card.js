const Card = (props) => {
  return (
    
    <div className="column p-2 size-4">
    <div className="card outset-neomo">
      <div className="card-content text-center">
        <img src="" alt="Freelancer Image" />{" "}
      </div>
      <div className="card-content">
        <h4>{props.name}</h4>
        <h5>{props.skill}</h5>
        <p>
          {props.description}
        </p>
        <h5>Clients Served: {props.clientsServed}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rating: {props.rating}</h5> 
         

      </div>
    </div>
  </div>

  );
};

export default Card;
