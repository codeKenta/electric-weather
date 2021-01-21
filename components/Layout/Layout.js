import theme from '../../theme'

const Layout = ({ children }) => {
  const {
    fontSize,
    colors,
    spacing,
    mediaQueries,
    utils: { pageContentMaxWidth },
  } = theme
  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='content-max-width'>
          <img src={'logo.svg'} />
        </div>
      </nav>

      <main>
        <div className='content-max-width'>{children}</div>
      </main>

      <style jsx>{`
        .navbar {
          padding: ${spacing.s} ${spacing.m};
          background: ${colors.white};
        }
        .content-max-width {
          max-width: ${pageContentMaxWidth};
          margin: 0 auto;
        }
        main {
          padding: ${spacing.s};
        }
        @media screen and (${mediaQueries.m}) {
          .navbar {
            padding: ${spacing.s} ${spacing.l};
            background: ${colors.white};
          }
          main {
            padding: ${spacing.l};
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: 'Avenir';
          src: url('/fonts/avenir-next-regular.ttf') format('truetype');
          font-style: normal;
          font-weight: 400;
        }

        @font-face {
          font-family: 'Silka';
          src: url('/fonts/silka-semibold.ttf') format('truetype');
          font-style: normal;
          font-weight: 600;
        }

        html,
        body {
          font-size: ${fontSize.s};
          padding: 0;
          margin: 0;
          font-family: Avenir, sans-serif;
          background: ${colors.background};
          line-height: 1.6;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Silka, sans-serif;
          line-height: 1.2;
          margin-top: 0;
        }

        h1 {
          font-size: ${fontSize.headings.h1};
        }
        h2 {
          font-size: ${fontSize.headings.h2};
        }

        p {
          line-height: inherit;
        }

        picture {
          line-height: 0;
          font-size: 0;
          display: block;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Layout
