import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

const SvgLungoLarge = (props) => (
  <Svg
    width={46}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path fill="#219653" d="M-1 0h48v46H-1z" />
        <Path d="M10 16h26l-4 33H14l-4-33Z" fill="#F2994A" />
        <Path
          d="M11 25h24l-.923 10H11.923L11 25ZM8 16h30l-2.77-5H10.77L8 16Z"
          fill="#FFFDFA"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h46v46H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Rect width={46} height={46} rx={23} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgLungoLarge
