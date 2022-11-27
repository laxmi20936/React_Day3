import './App.css';

const img = "https://css-tricks.com/wp-content/uploads/2022/09/DO_CSSlogo.png"
const icon = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"

function App() {
  return (
    <div class="container-flex">
            <div class = "container1">
                <img src = {img}  class = "container1" style={{height:"100%",
    width:"100px"}} alt="noimageeeee"/>
            </div>
            <div >
                <input type="text" className="container2" style={{height:"55px",width:"700px"}} placeholder='Search'/>
            </div>
            <div class="container3">
                <img src = {icon} style={{height:"50px",width:"120px"}} alt="noimageeee"/>
            </div>
        </div>
  );
}

export default App;
