import { useQuery } from '@apollo/client'
import theme from '../../theme'
import { getWeather } from '../../GraphQL/queries'
import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

import AnimatedTibber from '../AnimatedTibber'

const WeatherChart = () => {
  const { error, data } = useQuery(getWeather)
  const weather = data?.me?.home?.weather ?? null
  const [entries, setEntries] = useState(null)
  const [avarage, setAvarage] = useState(null)
  const [isReady, setIsReady] = useState(false) // Is used instead of "loading" from "useQuery()""

  useEffect(() => {
    if (weather) {
      setIsReady(false)
      let { entries } = weather

      let sumOfTemperatures = 0

      const newEntries = entries.reduce(
        (acc, entry) => {
          let formatedTime = new Date(entry.time)

          formatedTime = formatedTime.getHours()

          sumOfTemperatures = sumOfTemperatures + entry.temperature
          acc.push({ ...entry, formatedTime })

          return acc
        },
        [weather]
      )

      const avarage = Math.ceil(sumOfTemperatures / entries.length)

      setEntries(newEntries)
      setAvarage(avarage)
      setIsReady(true)
    }
  }, [weather])

  const ticks = [0, 6, 12, 18, 23]

  const { colors, spacing, fontSize, mediaQueries } = theme
  return (
    <>
      <div className='chart'>
        {!isReady && (
          <div className='center-child'>
            {!error && (
              <div className='animation-wrapper'>
                <AnimatedTibber />
              </div>
            )}
            {error && <p className='error'>We could not get your data</p>}
          </div>
        )}

        {isReady && avarage && (
          <div>
            <span className='degree-label'>Avarage temperature</span>
            <div className='degree-wrapper'>
              <span className='degree'>{avarage}</span>
              <span
                className='degree-sign'
                dangerouslySetInnerHTML={{ __html: '&#176;' }}
              />
            </div>
          </div>
        )}

        {isReady && entries && (
          <div className='chart-component-wrapper'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                data={entries}
                margin={{
                  top: 10,
                  right: 0,
                  left: -40,
                  bottom: 0,
                }}
              >
                <XAxis
                  dataKey='formatedTime'
                  ticks={ticks}
                  style={{
                    fontFamily: 'Silka',
                  }}
                />
                <YAxis
                  dataKey='temperature'
                  style={{
                    fontFamily: 'Silka',
                  }}
                />
                <Bar dataKey='temperature' fill='white' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <style jsx>{`
        .chart {
          font-family: Silka;
          color: ${colors.white};
          padding: ${spacing.s};
          background: ${colors.black};
          text-align: center;
          line-height: 1.4;
          min-height: 300px;
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

        .chart-component-wrapper {
          height: 150px;
          width: 99%; /* 100% makes the container behave very strange */
          margin: 0 auto;
          transition: height 500ms ease-in;
        }

        .center-child {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .animation-wrapper {
          width: 100px;
        }

        .error {
          color: ${colors.error};
        }

        @media screen and (min-width: 500px) {
          .chart-component-wrapper {
            height: 200px;
          }
        }

        @media screen and (${mediaQueries.m}) {
          .chart {
            padding: ${spacing.m};
          }
          .chart-component-wrapper {
            height: 300px;
          }
        }
      `}</style>
    </>
  )
}

export default WeatherChart
