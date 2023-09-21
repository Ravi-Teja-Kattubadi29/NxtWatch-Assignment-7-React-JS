import {IoIosClose} from 'react-icons/io'

import {
  BannerContainer,
  BannerLogoContainer,
  NxtWatchLogo,
  BannerText,
  GetItNow,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const NxtWatchBanner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {removeBannerFunction} = value

      return (
        <BannerContainer data-testid="banner">
          <BannerLogoContainer>
            <NxtWatchLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <IoIosClose
              style={{
                height: 30,
                width: 30,
                cursor: 'pointer',
                outline: 'none',
              }}
              data-testid="close"
              type="button"
              onClick={removeBannerFunction}
            />
          </BannerLogoContainer>
          <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
          <GetItNow> GET IT NOW </GetItNow>
        </BannerContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NxtWatchBanner
