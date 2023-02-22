import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib'
import { motion} from "framer-motion/dist/framer-motion";

const SideNav = () => {

    const [sidebar, setSidebar] = useState(true);

    const showSidebar = ()=> {

        setSidebar(!sidebar);

    }

  return (
    <motion.div
    
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.8 }}
    
    >
        <IconContext.Provider value={{color:'#fff'}}>
        <div className='navbar'>

            {!sidebar && <Link to={'#'} className='menu-bars' style={{transition: 'ease'}}>

                <FaIcons.FaBars onClick={showSidebar}/>

            </Link>}
            <nav className={sidebar?'nav-menu active' : 'nav-menu' }>

                <ul className='nav-menu-items'  onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to={'#'} className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index)=>{

                        return(
                        <li key={index} className={item.cName}>

                            <Link to={item.path}>

                               {item.icon}
                               <span>{item.title}</span>               

                            </Link>

                        </li>
                        )

                    })}
                </ul>

            </nav>

            

        </div>
        </IconContext.Provider>

    </motion.div>
  )
}

export default SideNav