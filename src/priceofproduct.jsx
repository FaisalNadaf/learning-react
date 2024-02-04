export default function Price({oldrs="NULL",newrs="NULL"}){
    let styles1={margin:"0.3rem",}
    let styles2={backGroundColor:"black"}
    return(
        <div style={styles2}>
          <span style={styles1}>{oldrs}</span>
      <span style={styles1}>{newrs}</span>
        </div>
    );
}