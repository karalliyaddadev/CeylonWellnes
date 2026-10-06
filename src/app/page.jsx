import React from 'react'
import style from './page.module.css'
import Hero from '@/components/Hero/Hero'
import Herovideo from '@/components/Herovideo/Herovideo'
import Comparison from '@/components/Home/Comparison/Comparison'
import RegionGrid from '@/components/Home/RegionGrid/RegionGrid'
import CorporateAdventuresHighlight from '@/components/Home/CorporateAdventuresHighlight/CorporateAdventuresHighlight'
import Testimonial from '@/components/Home/Testimonial/Testimonial'
import Cta from '@/components/Cta/Cta'

export default function Home() {
  return (
    <div>
      <Hero id="hero" />
      <Herovideo />
      <Comparison/>
      <RegionGrid/>
      <CorporateAdventuresHighlight />
      <Testimonial/>
      <Cta />
    </div>
  )
}
