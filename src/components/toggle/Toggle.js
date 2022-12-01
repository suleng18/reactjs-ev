import React, { useState } from 'react';
import './Toggle.css';
// stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// // stateful functional component: component có sử dụng state
// function Toggle2() {
//   // const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);

  const handleToggle = () => {
    setOn((on) => !on);
  };

  return (
    <div>
      <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
        <div className={`spinner ${on ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}
export default Toggle;
