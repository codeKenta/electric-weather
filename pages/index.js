import Head from 'next/head'
import theme from '../theme'
import WeatherChart from '../components/WeatherChart'
import Button from '../components/Button'
import Fade from 'react-reveal/Fade'
import PuffSection from '../components/PuffSection'

const HomePage = () => {
  const { spacing, mediaQueries } = theme
  return (
    <>
      <Head>
        <title>Weather</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='page-content'>
        <Fade cascade>
          <WeatherChart />

          <div className='button-wrapper'>
            <Button type='primary' text='show me a trick' fullWidth={true} />
            <Button text='reset' fullWidth={true} />
          </div>
          <div className='text-wrapper'>
            <h1>Infrastructure supply chain seed lean startup technology</h1>
            <p>
              Assets traction angel investor user experience social media
              leverage value proposition startup success founders creative.
              Equity value proposition launch party business-to-consumer
              research & development freemium bandwidth stock scrum project
              analytics.
            </p>

            <p>
              Agile development backing business-to-consumer analytics burn rate
              leverage business-to-business market creative responsive web
              design graphical user interface.
            </p>
          </div>
        </Fade>
        <PuffSection />
      </div>
      <style jsx>{`
        .page-content {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: ${spacing.s};
        }

        .button-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: ${spacing.xxs};
          margin: 0 auto;
          max-width: 600px;
          width: 100%;
        }

        .text-wrapper {
          max-width: 600px;
          margin: 0 auto;
        }

        @media screen and (${mediaQueries.m}) {
          .page-content {
            grid-row-gap: ${spacing.l};
          }
          .button-wrapper {
            grid-template-columns: 1fr 1fr;
            grid-gap: ${spacing.xxs};
          }
        }
      `}</style>
    </>
  )
}

export default HomePage
