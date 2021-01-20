import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Weather</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>SILKA Silka</h1>
        <p>AVENIR Avenir</p>
      </main>

      <style jsx>{``}</style>

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
          padding: 0;
          margin: 0;
          font-family: Avenir, sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: Silka, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
