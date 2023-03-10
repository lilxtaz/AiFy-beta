import React from 'react'

import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'


export const SidebarData = [
    {

    title: 'Download',
    path: '/download',
    icon: <AiIcons.AiOutlineCloudDownload />,
    cName: 'nav-text'

    },

    {

        title: 'Usage',
        path: '/usage',
        icon: <AiIcons.AiOutlineTool />,
        cName: 'nav-text'
    
    },

    {

        title: 'API Key',
        path: '/api-key',
        icon: <IoIcons.IoKeyOutline />,
        cName: 'nav-text'
    
    }
]


