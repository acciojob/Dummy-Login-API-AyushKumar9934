import React, { useState } from "react";
const data = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12",
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456",
  },
];

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError,setUserError]=useState("");
  const [passError,setPassError]=useState("");
 async function handleSubmit(e) {
    e.preventDefault();
    console.log("we are inside handle submit")
    let filterdata =
    data.filter((item) => {
      return item.email == email;
    })
    
    await new Promise(resolve=> setTimeout(resolve,3000));
        
    
      
        
        filterdata.length>0 ? (
          filterdata[0].password == password ? (
            console.log(filterdata[0])
          ) : (
            setPassError("Password Incorrect")
           
          )
        ) : (

            setUserError("User not found")
         
        );
   
  }


  return (
    <form>
      <input
        value={email}
        placeholder="email"
        type="text"
        id="input-email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
     { userError&& <div id="user-error">{userError}</div> }
      <input
        value={password}
        type="text"
        placeholder="password"
        id="input-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      {passError&& <div id="password-error">{passError}</div>}
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        id="submit-form-btn"
      >
        Submit
      </button>
    </form>
  );
}

export default App;
