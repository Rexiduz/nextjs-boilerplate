export default function SvgFB({ color = '#fff' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="103"
      height="103"
      viewBox="0 0 103 103"
    >
      <defs>
        <filter
          id="a"
          x="0"
          y="0"
          width="103"
          height="103"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="6.5" result="b" />
          <feFlood floodColor={color} />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(19.5 16.5)">
        <g fill={color} transform="matrix(1, 0, 0, 1, -19.5, -16.5)">
          <path
            fill={color}
            d="M57.143,2.25H6.857A6.857,6.857,0,0,0,0,9.107V59.393A6.857,6.857,0,0,0,6.857,66.25H26.464V44.491h-9V34.25h9V26.444c0-8.879,5.286-13.783,13.381-13.783a54.524,54.524,0,0,1,7.931.691v8.714H43.31c-4.4,0-5.774,2.731-5.774,5.533v6.65h9.826L45.79,44.491H37.536V66.25H57.143A6.857,6.857,0,0,0,64,59.393V9.107A6.857,6.857,0,0,0,57.143,2.25Z"
            transform="translate(19.5 14.25)"
          />
        </g>
      </g>
    </svg>
  )
}
