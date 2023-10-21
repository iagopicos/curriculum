import { Link } from 'react-router-dom'
import { SidebarData, SidebarItem } from './SidebarData'
export default function Sidebar() {
  return (
    <div className="Sidebar">
        <img
          className='sb-profileImg'
          alt='Profile Image'
          src='https://unavatar.io/iagofernandez94'
        />
        <nav>
          <ul>
            {SidebarData.map(
              (val: SidebarItem, key: number) => {
                return (

                  <li key={key}>
                    <Link to={val.link} className={val.className}>
                      <div className='icon'>{val.icon}</div>
                      <div className='text'>{val.title}</div>
                    </Link>
                  </li>

                )
              })}
          </ul>
        </nav>
    </div>
  )
}
