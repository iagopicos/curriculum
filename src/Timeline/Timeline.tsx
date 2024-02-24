import './Timeline.scss'
export default function Timeline() {
  return (
    <div className='timeline'>
      <div className='tm-card'>
        <div className='tm-title'>
          <h2> Titulo</h2>
        </div>
        <span className='tm-date'>
          <span className='tm-day'>24</span>
          <span className='tm-month'>FEB</span>
          <span className='tm-year'>2022</span>
        </span>
      </div>
      <div className='tm-card'>
        <div className='tm-title'>
          <h2> Titulo#2</h2>
        </div>
        <span className='tm-date'>
          <span className='tm-day'>25</span>
          <span className='tm-month'>MAR</span>
          <span className='tm-year'>2022</span>
        </span>
      </div>
      <div className='tm-card'>
        <div className='tm-title'>
          <h2> Titulo#3</h2>
        </div>
        <span className='tm-date'>
          <span className='tm-day'>2</span>
          <span className='tm-month'>JUN</span>
          <span className='tm-year'>2023</span>
        </span>
      </div>
    </div>
  )
}
