import "./myDetails.css";

function MyDetails({
  name = "NULL",
  college = "NULL",
  sem = "NULL",
  learning = "NULL",
  skill = "NULL",
  focus = "NULL",
}) {
  return (
    <>
      <p>
        {name}, a {sem}-semester student at {college} College, is currently
        immersed in learning {learning}. His primary focus is on {focus}, where
        he hones his skills. {name}'s dedication to mastering {learning} aligns
        with his broader goal of becoming proficient in {learning}, showcasing
        his commitment to advancing his {skill} abilities during his {learning}{" "}
        journey.
      </p>
      {/* <p>NAME :{name}</p>
      <p>COLLEGE :{college}</p>
      <p>SEMESTER :{sem}</p>
      <p>LEARNING :{learning}</p>
      <p>SKILL :{skill}</p>
      <p>FOCUS :{focus}</p> */}
    </>
  );
}

export default MyDetails;
