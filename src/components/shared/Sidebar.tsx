import React, { useState } from 'react'
import { FcLinux } from 'react-icons/fc'
import { RiDashboardFill } from 'react-icons/ri'
import { BsArrowLeftShort } from 'react-icons/bs'
import Avatar from './Avatar'
import SideBarData from '../../utils/SideBar.data'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    console.log(open)

    return (
        <div className={`bg-dark-purple h-screen p-5 pt-10 duration-300 ${open ? 'w-72' : 'w-20'} relative`}>
            <BsArrowLeftShort
                className={`bg-white text-dark-purple text-3xl rounded-full ${
                    !open && 'rotate-180'
                }  cursor-pointer absolute -right-3 top-9 border border-dark-purple }`}
                onClick={() => setOpen(!open)}
            />
            <div className="inline-flex">
                <FcLinux
                    fontSize={30}
                    className={`bg-amber rounded cursor-pointer float-left mr-2 duration-500 ${
                        open && 'rotate-[360deg]'
                    } `}
                />
                <h1 className={`text-neutral-100 text-lg pl-5 ${!open && 'scale-0'}`}> EasYgO </h1>
            </div>
            {/* <div className={`relative center pt-8 ${open && 'pl-14'} ${!open && 'hidden'}`}>
                <Avatar />
                <h3 className="pt-2 text-white center bold">Alice</h3>
            </div> */}
            <ul className="pt-2">
                    {SideBarData.map((data, id) => {
                        return (
                            <li
                                className={`text-gray-300 text-sm-flex items-center gap-x-4 cursor-pointer p-2 ${open && 'hover:bg-light-white rounded-md mt-4'}`}
                            >
                                <span className={`text-2xl block float-left ${!open && 'text-gray-300 text-sm-flex items-center gap-x-4 cursor-pointer hover:bg-light-white rounded-md mt-6'}`}>{data.icon}</span>
                                <span className={`text-base font-medium flex-1 duration- ml-3 ${!open && 'hidden'}`}>
                                    {data.name}
                                </span>
                            </li>
                        )
                    })}
            </ul>
            <div className="flex-1">
                <div> bottom </div>
            </div>
        </div>
    )
}

export default Sidebar
