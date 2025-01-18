import styled from "styled-components"

export const BannerTitleContainer = styled.div`
width: 100%;
height: 200px;
background-color: #040439;
white-space: nowrap;
position: relative;
display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`
export const BannerTitleContent = styled.div`
max-width: 1394px;
width: 100%;
  @media (max-width: 1750px) {
    max-width: 965px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
  }
`

export const BannerTitle = styled.span`
color: #ffffff10;
font-size: 130px;
position: absolute;
left: 0;
top: 0;
`

export const BannerMainTitle = styled.h1`
color: #fff;
font-size: 54px;
font-weight: 500;
`