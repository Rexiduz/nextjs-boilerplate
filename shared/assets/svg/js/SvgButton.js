export default function SvgButton({
  opacity = 0.796,
  bg = '#fff',
  children = 'Example Button'
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="325"
      height="104"
      viewBox="0 0 325 104"
    >
      <defs>
        <filter
          id="a"
          x="0"
          y="0"
          width="325"
          height="104"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="6.5" result="b" />
          <feFlood floodColor="#fff" />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g opacity={opacity} transform="translate(-859.5 -483.5)">
        <g filter={'url(#a)'} transform="matrix(1, 0, 0, 1, 859.5, 483.5)">
          <rect
            fill={bg}
            width="286"
            height="65"
            rx="32.5"
            transform="translate(19.5 19.5)"
          />
        </g>
        <g transform="translate(904 525)">
          <text
            fontSize={'20px'}
            fontFamily={'Arial-BoldMT, Arial'}
            fontWeight={700}
            transform="translate(0 18)"
          >
            <tspan x="0" y="0">
              {children}
            </tspan>
          </text>
          <path
            d="M26.136,3.652l.764-.763a.824.824,0,0,1,1.167,0l6.691,6.674a.82.82,0,0,1,0,1.164l-6.691,6.677a.824.824,0,0,1-1.167,0l-.764-.763a.824.824,0,0,1,.014-1.178L30.3,11.521H.826A.823.823,0,0,1,0,10.7V9.6a.823.823,0,0,1,.826-.824H30.3L26.15,4.83A.818.818,0,0,1,26.136,3.652Z"
            transform="translate(202 1.353)"
          />
        </g>
      </g>
    </svg>
  )
}
