import NavBar from '@/components/NavBar/DesktopNavBar'
import PlannerCard from '@/components/PVCard/PVCard'
import VPBanner from '@/components/VPBanner/VPBanner'
import React from 'react'

const PartyPlanners = () => {
  
  // let page = {
  //   "vendor",
  //   "partyPlanner"
  // }
  return (
    <>
        <NavBar/>
        <VPBanner />
        <PlannerCard/>
    </>
  )
}

export default PartyPlanners