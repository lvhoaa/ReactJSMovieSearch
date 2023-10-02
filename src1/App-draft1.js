import "./App.css";

const Person = (props) =>{
  return (
    <>
      <h1>First Name: {props.firstName}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}
const App = () => {
  return (
    <div className="App">
      <Person firstName={'Hoa'} lastName = {'La'} age = {18}/>
      <Person firstName='Bin' lastName='Bom' age={4} />
      
    </div>
  );
};
export default App;
