import NavBar from '@/components/NavBar/DesktopNavBar'
import PlannerCard from '@/components/PlannerCard/PlannerCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import VPBanner from '@/components/VPBanner/VPBanner'
import React from 'react'

const Vendors = () => {
  return (
    <>
        <NavBar/>
        <VPBanner/>
        <PlannerCard />
        <SearchBar/>
        
    </>
  )
}

export default Vendors