function Userboard(props){
  return(
    <Details user = {props.user} />
  );
}

function Details(props){
    console.log(props.user.name)
}

function App() {
  const user = {name:"pw skill"};
  return (
   <>
     <Userboard user={user} />
   </>
  )
}

export default App;
