import React from 'react'
import { BannerMainTitle, BannerTitle, BannerTitleContainer, BannerTitleContent } from './styles'

interface BannerTitleSectionProps {
  behindText: string;
  mainText: string;
}
const BannerTitleSection = ({ behindText, mainText }: BannerTitleSectionProps) => {
  return (
    <BannerTitleContainer>
      <BannerTitle>
        {behindText}
      </BannerTitle>
      <BannerTitleContent>
        <BannerMainTitle>
          {mainText}
        </BannerMainTitle>
      </BannerTitleContent>
    </BannerTitleContainer>
  )
}

export default BannerTitleSection;
