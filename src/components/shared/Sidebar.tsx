import { useEffect, useRef, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { FcLinux } from 'react-icons/fc'
import SideBarData from '../../utils/SideBar.data'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const [hasOverflow, setHasOverflow] = useState(false)

    useEffect(() => {
        const element = contentRef.current
        if (element) {
            // Check if the content overflows
            setHasOverflow(element.scrollHeight > element.clientHeight)
        }
    }, [open])
    return (
        <div
            className={`bg-dark-purple h-screen p-5 pt-5 duration-300 ${open ? 'w-72' : 'w-20'} relative ${
                hasOverflow ? 'overflow-y-auto' : 'overflow-hidden'
            }`}
            ref={contentRef}
        >
            <BsArrowLeftShort
                className={`bg-white text-dark-purple text-2xl rounded-full ${
                    !open && 'rotate-180'
                }  cursor-pointer absolute -right-0 top-9 mt-2 border border-dark-purple }`}
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
                            className={`text-gray-300 text-sm-flex items-center gap-x-4 cursor-pointer p-2 ${
                                open && 'hover:bg-light-white rounded-md mt-4'
                            }`}
                        >
                            <span
                                className={`text-2xl block float-left ${
                                    !open &&
                                    'text-gray-300 text-sm-flex items-center gap-x-4 cursor-pointer hover:bg-light-white rounded-md mt-6'
                                }`}
                            >
                                {data.icon}
                            </span>
                            <span className={`text-base font-medium flex-1 duration- ml-3 ${!open && 'hidden'}`}>
                                {data.name}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
