import theme from '../../theme'

const AnimatedTibber = () => {
  const { colors } = theme
  return (
    <div>
      <svg viewBox='0 0 24 31' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <g
          id='Page-1'
          stroke='none'
          strokeWidth='1'
          fill='none'
          fillRule='evenodd'
          strokeLinecap='round'
        >
          <g
            id='Group'
            transform='translate(1.000000, 1.000000)'
            stroke={colors.primary}
            strokeWidth='1.5'
          >
            <path
              className='draw-stroke'
              d='M12.9654903,8.94415065 C13.5916412,7.28416096 14.2030912,5.65717958 14.7998402,4.0632065 C15.3965893,2.46923341 15.6434713,1.42600698 15.5404861,0.933527192 C15.3757026,0.380163476 15.024422,0.072122834 14.4866441,0.00940526753 C13.9488663,-0.053312299 13.3951974,0.197636901 12.8256376,0.762252869 C4.89505877,9.85368486 0.783844109,14.57784 0.491993609,14.9347183 C0.0542178582,15.4700358 -0.0841928939,15.5992209 0.048050596,16.3868404 C0.125639217,16.8489449 1.28496191,16.7994865 1.92292954,16.8023024 C1.94201236,16.8023866 2.47066815,16.808329 2.65008226,16.808329 C2.96879809,16.808329 4.50897507,16.808329 9.56250768,16.808329 C10.2741844,16.808329 11.4473401,16.808329 13.0819748,16.808329'
              id='Path-2'
            ></path>

            <path
              className='draw-stroke delay'
              d='M19.4505769,20.9846855 C20.0767278,19.3246958 20.6881778,17.6977144 21.2849268,16.1037414 C21.8816759,14.5097683 22.1285579,13.4665418 22.0255728,12.9740621 C21.8607893,12.4206983 21.5095086,12.1126577 20.9717307,12.0499401 C20.4339529,11.9872226 19.880284,12.2381718 19.3107242,12.8027877 C11.3801454,21.8942197 7.26893072,26.6183749 6.97708022,26.9752532 C6.53930447,27.5105707 6.40089372,27.6397558 6.53313721,28.4273753 C6.61072583,28.8894797 7.77004852,28.8400214 8.40801615,28.8428373 C8.42709897,28.8429215 8.95575476,28.8488638 9.13516887,28.8488638 C9.4538847,28.8488638 10.9940617,28.8488638 16.0475943,28.8488638 C16.759271,28.8488638 17.9324267,28.8488638 19.5670614,28.8488638'
              id='Path-2'
              transform='translate(14.266698, 20.444699) rotate(-180.000000) translate(-14.266698, -20.444699) '
            ></path>
          </g>
        </g>
      </svg>
      <style jsx>
        {`
          .draw-stroke {
            animation-name: draw;
            animation-duration: 2.5s;
            animation-timing-function: linear;
            animation-direction: alternate-reverse;
            animation-iteration-count: infinite;
            animation-fill-mode: both;
            stroke-dasharray: 60;
            stroke-dashoffset: 20;
          }

          .delay {
            animation-delay: 0.4s;
          }

          @keyframes draw {
            0% {
              stroke-dashoffset: 60;
            }

            15% {
              stroke-dashoffset: 60;
            }

            30% {
              stroke-dashoffset: 5;
            }

            70% {
              stroke-dashoffset: 5;
            }

            85% {
              stroke-dashoffset: 60;
            }

            100% {
              stroke-dashoffset: 60;
            }
          }
        `}
      </style>
    </div>
  )
}

export default AnimatedTibber
