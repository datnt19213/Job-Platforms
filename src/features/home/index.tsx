import { FlexLayout } from '@/components/customs/FlexLayout'
import React from 'react'
import { Hero, PopularJobCategories, ProfessionalCv, JobsLatest, RegisterCards, TopCompanies, Plans, DownloadApp, Brands } from './components'


export const HomePage = () => {
  return (
    <FlexLayout direction='col' className='w-full' >
      <Hero />
      <PopularJobCategories />
      <ProfessionalCv />
      <JobsLatest />
      <RegisterCards />
      <TopCompanies />
      <Plans />
      <DownloadApp />
      <Brands />
    </FlexLayout>
  )
}
