import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='flex flex-col w-full md:flex md:flex-row'>
            <Topbar />
            <LeftSidebar />

            <section className='flex flex-1 h-full'>
                <Outlet />
            </section>

            <Bottombar />
        </div>
    )
}

export default RootLayout

