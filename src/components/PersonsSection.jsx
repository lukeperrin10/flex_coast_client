import React from 'react'
import { persons } from '../assets/testimonials'
import { useTranslation } from 'react-i18next'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import { EffectCoverflow } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

const PersonsSection = () => {
  const { t } = useTranslation()
  const isPhone = useMediaQuery('(max-width:460px)')
  const isTablet = useMediaQuery('(max-width:960px)')
  const isBig = useMediaQuery('(max-width:1280px)')

  const listOfPersonCards = persons.map((person, index) => (
    <>
      <SwiperSlide data-cy={`person-${index}-container`}>
        <div className='swiper-container'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div
                className={
                  person.employee ? 'testimonialBox-employee' : 'testimonialBox'
                }>
                <div className='details'>
                  <img
                    className='profile-image'
                    src={person.image}
                    alt='profile'
                  />
                  <h3>{person.name}</h3>
                  <h4 data-cy='person-position'>
                    {t(`persons.id_${index}.position`)}
                  </h4>
                </div>
                <div className='content'>
                  <p data-cy='person-text'>{t(`persons.id_${index}.text`)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </>
  ))

  SwiperCore.use([EffectCoverflow, Pagination, Navigation])
  return (
    <>
      <div className='testimonials-container-persons'>
        <Swiper
          slidesPerView={isPhone ? 1 : isTablet ? 1.5 : isBig ? 2 : 4}
          spaceBetween={30}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          loop={true}
          className='pagination'
          >
          <section>{listOfPersonCards}</section>
        </Swiper>
      </div>
    </>
  )
}

export default PersonsSection
