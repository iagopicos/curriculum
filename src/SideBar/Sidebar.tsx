import { Link } from 'react-router-dom'
import { SidebarData, SidebarItem } from './SidebarData'
export default function Sidebar() {
  return (
    <div className="Sidebar">
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
//  return (
//    <div className='sb-main'>
//      <header>
//        <img
//          className='sb-profileImg'
//          alt='This didnt load'
//          src='https://unavatar.io/iagofernandez94'
//        />
//        <h1 className='sb-name'>Iago Fernández Picos</h1>
//        <h2 className='sb-profession'>Backend Developer</h2>
//      </header>
//     <div sb-extraInfo>
//        <nav>
//          <ul>
//            <li>
//              <Link to="/">Home</Link>
//              <Link to="/resumee">CV</Link>
//            </li>
//          </ul>
//        </nav>
//      </div>
//      <div className='sb-social-networks'>Linkedin Gmail Github Gitlab </div>
//    </div>
//
//  )
//}
