import './Timeline.scss'
import { TIMELINE_DATA } from '../example-timeline'

function formatTimelineDate(dateString: string): JSX.Element  {
  const [day, month, year] = dateString.split('-');

  return (
    <span className='tm-date'>
      <span className='tm-day'>{day}</span>
      <span className='tm-month'>{month}</span>
      <span className='tm-year'>{year}</span>
    </span>);
};
export const Timeline = () => {
  return (
    <div className='timeline'>
      {TIMELINE_DATA.map((card) => 
        <div className='tm-card'>
          <div className='tm-title'>
            <h2>{card.title}</h2>
          </div>
            {formatTimelineDate(card.date)}
        </div>
      )
      }
    </div>
  )
}
