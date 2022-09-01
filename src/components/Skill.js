import { useState, useEffect } from 'react';

// React Bootstrap Components
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skill(props) {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(props.percentage);
  }, [props.percentage]);

  return (
    <div>
      <p className="mb-2">{props.title}</p>
      <ProgressBar className="mb-2" now={value} />
    </div>
  )
}
