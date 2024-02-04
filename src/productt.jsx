import Price from "./priceofproduct";


export default function Product({ title="NULL", about="NULL"}) {
  let styles={
    textAlign:"center",
border:"1px solid black",
margin:"1rem",
width:"16rem",    
            };
  return (
    <div style={styles}>
      <h3>{title}</h3>
      <h4>{about}</h4>
       <Price/>
    </div>
  );
}
