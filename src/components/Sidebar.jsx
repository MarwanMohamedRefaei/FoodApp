import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = ({links}) => {
    const location=useLocation()
    return (
        <div className='sidebar'>
            {links.map(({ name, path, icon }) => {
                return (
                    <Link className={location.pathname === path ? 'sidebar-link active' : 'sidebar-link' } to={path} key={name}>
                        <FontAwesomeIcon icon={icon} />
                        {name}
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidebar
