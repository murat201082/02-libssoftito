import { useState } from "react";

export default function SituationComponent() {
    const [condition, setCondition] = useState(false);
  
    const getConditional = () => {
      if (condition) {
        return <div>Olumlu</div>;
      } else {
        return <div>Olumsuz</div>;
      }
    };
  
    const conditionChanged = (e) => {
      //setCondition(e.target.checked);
      setCondition(!condition)
    };
  
    return (
      <div>
        <h3>İçerisi</h3>
        <input type="checkbox" checked={condition} onChange={conditionChanged} />
        {getConditional()}
      </div>
    );
  } 