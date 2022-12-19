import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Skill({title, percentage, animate}) {
  return (
    <div>
      <p className="mb-2 my-monospaced">{title}</p>
      <ProgressBar className="mb-2 my-bg-secondary my-progress" now={percentage} />
    </div>
  )
}
