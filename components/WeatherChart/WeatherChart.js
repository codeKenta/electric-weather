import theme from '../../theme'

const WeatherChart = (props) => {
  const { colors, spacing, fontSize } = theme
  return (
    <>
      <div className='chart'>
        <span className='degree-label'>Avarage temperature</span>
        <div className='degree-wrapper'>
          <span className='degree'>10</span>
          <span
            className='degree-sign'
            dangerouslySetInnerHTML={{ __html: '&#176;' }}
          />
        </div>
      </div>

      <style jsx>{`
        .chart {
          font-family: Silka;
          color: ${colors.white};
          padding: ${spacing.m};
          background: ${colors.black};
          text-align: center;
          line-height: 1.4;
        }
        .degree-label {
          font-size: ${fontSize.xs};
        }

        .degree {
          font-size: 64px;
        }
        .degree-sign {
          font-size: 64px;
        }
      `}</style>
    </>
  )
}

export default WeatherChart
