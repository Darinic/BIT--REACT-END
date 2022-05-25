import { Card } from "react-bootstrap";

const Comment = (props) => {
    return (  
       <Card className="col-sm-3 mt-3" style={{ width:'22rem', maxHeight:'22rem', padding:'0', lineHeight:'2rem'}}>
           <Card.Header style={{padding:'0', width:'22rem'}}>
               {props.title}
           </Card.Header>
           <Card.Body>
               <img style={{height:'13rem', width:'14rem'}} src={props.url} alt={props.title}/>
               <br/>
               <p style={{paddingTop:'1rem'}}>{props.description}</p>
           </Card.Body>
       </Card>
        

    );
}
 
export default Comment