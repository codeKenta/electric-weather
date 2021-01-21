import theme from '../../theme'

const PuffSection = () => {
  const { colors, spacing, mediaQueries } = theme

  return (
    <>
      <section className='puff-section'>
        <article className='puff'>
          <picture>
            <img src='images/tibber-branding-yard.jpg' />
          </picture>
          <div className='puff__body'>
            <h2>Direct mailing strategy buzz social proof</h2>
          </div>
        </article>

        <article className='puff'>
          <picture>
            <img src='images/tibber-branding-tesla-cat.png' />
          </picture>

          <div className='puff__body'>
            <h2>Hypotheses value proposition</h2>
          </div>
        </article>

        <picture className='big-picture'>
          {/* If we had the image in different solutions i would insert diffetent sources here */}
          <img src='images/tibber-shot-12.jpg' />
        </picture>
      </section>
      <style jsx>{`
        .puff-section {
          margin-top: ${spacing.m};
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: ${spacing.m};
        }

        .big-picture img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }

        .puff {
          /*
          It may look like a counterproductive solution to use flex
          to display the elements in the natural way of CSS-flowing.
          The flex is needed to make the item strech to the height of the current grid row.
       */
          display: flex;
          flex-direction: column;
        }

        .puff img {
          object-fit: cover;
          height: 200px;
          max-width: 100%;
          min-width: 100%;
        }

        .puff__body {
          background-color: ${colors.lightBackground};
          padding: ${spacing.xs};
          height: 100%;
        }

        @media screen and (${mediaQueries.m}) {
          .puff-section {
            grid-template-columns: 1fr 1fr;
            grid-gap: ${spacing.m};
          }

          .big-picture {
            grid-column: 1 / -1;
          }
        }

        @media screen and (${mediaQueries.l}) {
          .puff-section {
            margin-top: 80px;
            grid-template-columns: 1fr 265px 265px;
            grid-gap: ${spacing.m};
          }

          .big-picture {
            grid-column: 1 / 3;
            grid-row: 1;
          }

          .puff:nth-of-type(1) {
            grid-column: 3 / 4;
          }

          .puff:nth-of-type(2) {
            grid-column: 4 / 5;
          }
        }

        @media screen and (${mediaQueries.xl}) {
          .puff-section {
            grid-gap: ${spacing.xl};
          }
        }
      `}</style>
    </>
  )
}

export default PuffSection
