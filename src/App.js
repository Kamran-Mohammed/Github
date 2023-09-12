import React, { useState, useEffect } from "react";
var veryWeak = false;
var weak = false;
var strong = false;

function App() {
  const [pass, setPass] = useState("");

  const check = () => {
    if (
      pass.includes("@") ||
      pass.includes("#") ||
      pass.includes("$") ||
      pass.includes("%") ||
      pass.includes("&") ||
      pass.includes("*") ||
      pass.includes("!") ||
      pass.includes("?") ||
      pass.includes("Q") ||
      pass.includes("W") ||
      pass.includes("E") ||
      pass.includes("R") ||
      pass.includes("T") ||
      pass.includes("Y") ||
      pass.includes("U") ||
      pass.includes("I") ||
      pass.includes("O") ||
      pass.includes("P") ||
      pass.includes("A") ||
      pass.includes("S") ||
      pass.includes("D") ||
      pass.includes("F") ||
      pass.includes("G") ||
      pass.includes("H") ||
      pass.includes("J") ||
      pass.includes("K") ||
      pass.includes("L") ||
      pass.includes("Z") ||
      pass.includes("X") ||
      pass.includes("C") ||
      pass.includes("V") ||
      pass.includes("B") ||
      pass.includes("N") ||
      pass.includes("M") ||
      pass.length >= 8
    ) {
      veryWeak = true;
    } else {
      veryWeak = false;
    }
    if (
      ((pass.includes("Q") ||
        pass.includes("W") ||
        pass.includes("E") ||
        pass.includes("R") ||
        pass.includes("T") ||
        pass.includes("Y") ||
        pass.includes("U") ||
        pass.includes("I") ||
        pass.includes("O") ||
        pass.includes("P") ||
        pass.includes("A") ||
        pass.includes("S") ||
        pass.includes("D") ||
        pass.includes("F") ||
        pass.includes("G") ||
        pass.includes("H") ||
        pass.includes("J") ||
        pass.includes("K") ||
        pass.includes("L") ||
        pass.includes("Z") ||
        pass.includes("X") ||
        pass.includes("C") ||
        pass.includes("V") ||
        pass.includes("B") ||
        pass.includes("N") ||
        pass.includes("M")) &&
        pass.length >= 8) ||
      (pass.length >= 8 &&
        (pass.includes("@") ||
          pass.includes("#") ||
          pass.includes("$") ||
          pass.includes("%") ||
          pass.includes("&") ||
          pass.includes("*") ||
          pass.includes("!") ||
          pass.includes("?"))) ||
      ((pass.includes("@") ||
        pass.includes("#") ||
        pass.includes("$") ||
        pass.includes("%") ||
        pass.includes("&") ||
        pass.includes("*") ||
        pass.includes("!") ||
        pass.includes("?")) &&
        (pass.includes("Q") ||
          pass.includes("W") ||
          pass.includes("E") ||
          pass.includes("R") ||
          pass.includes("T") ||
          pass.includes("Y") ||
          pass.includes("U") ||
          pass.includes("I") ||
          pass.includes("O") ||
          pass.includes("P") ||
          pass.includes("A") ||
          pass.includes("S") ||
          pass.includes("D") ||
          pass.includes("F") ||
          pass.includes("G") ||
          pass.includes("H") ||
          pass.includes("J") ||
          pass.includes("K") ||
          pass.includes("L") ||
          pass.includes("Z") ||
          pass.includes("X") ||
          pass.includes("C") ||
          pass.includes("V") ||
          pass.includes("B") ||
          pass.includes("N") ||
          pass.includes("M")))
    ) {
      weak = true;
    } else {
      weak = false;
    }
    if (
      pass.length >= 8 &&
      (pass.includes("Q") ||
        pass.includes("W") ||
        pass.includes("E") ||
        pass.includes("R") ||
        pass.includes("T") ||
        pass.includes("Y") ||
        pass.includes("U") ||
        pass.includes("I") ||
        pass.includes("O") ||
        pass.includes("P") ||
        pass.includes("A") ||
        pass.includes("S") ||
        pass.includes("D") ||
        pass.includes("F") ||
        pass.includes("G") ||
        pass.includes("H") ||
        pass.includes("J") ||
        pass.includes("K") ||
        pass.includes("L") ||
        pass.includes("Z") ||
        pass.includes("X") ||
        pass.includes("C") ||
        pass.includes("V") ||
        pass.includes("B") ||
        pass.includes("N") ||
        pass.includes("M")) &&
      (pass.includes("@") ||
        pass.includes("#") ||
        pass.includes("$") ||
        pass.includes("%") ||
        pass.includes("&") ||
        pass.includes("*") ||
        pass.includes("!") ||
        pass.includes("?"))
    ) {
      strong = true;
    } else {
      strong = false;
    }
  };
 
  return (
    <>
     
      <label htmlFor=''>Password:</label>
      <input
        type='password'
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);

          check();
        }}
      />
      { {strong === true ? (
        <h6>Strong Password</h6>
      ) : weak === true ? (
        <h6>Weak Password</h6>
      ) : veryWeak === true ? (
        <h6>Very Weak Password</h6>
      ) : (
        <h6>Enter a Strong password</h6>
      )} }
      <h4>Your password must contain:</h4>
      1.A Capital letter. 2.A special character[@,#,$,%,&,*,_,!,?]. 3.Must be
      atleast 8 characters long.
    </>
  );
}
export default App;
