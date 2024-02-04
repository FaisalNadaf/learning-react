import Product from "./productt"

export default function ProductTab(){
    let styles={
        display:"flex",
        
                };
    return(
     
        <div style={styles}>
        <Product />
        <Product/>
        <Product/>
        <Product/>
        </div>
    );
}