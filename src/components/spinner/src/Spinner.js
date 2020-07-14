/**
 * Spinner
 */

import { keyframes } from "@emotion/core";

import { Box } from "components";

const loadingKeyframes = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingCircleKeyframes = keyframes`
  0% {
    stroke-dashoffset: 600;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

function Spinner({ color, size, ...rest }) {
  return (
    <Box
      data-component-id="spinner"
      width={size}
      height={size}
      lineHeight={0}
      {...rest}
    >
      <Box
        data-component-id="spinner.svg"
        as="svg"
        x="0px"
        y="0px"
        viewBox="0 0 150 150"
        css={{ animation: `${loadingKeyframes} 2s linear infinite` }}
      >
        <Box
          data-component-id="spinner.circle"
          as="circle"
          cx="75"
          cy="75"
          r="60"
          color={color}
          css={{
            strokeDashoffset: 600,
            strokeDasharray: 300,
            strokeWidth: 12,
            strokeMiterlimit: 10,
            strokeLinecap: "round",
            animation: `${loadingCircleKeyframes} 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite`,
            stroke: "currentColor",
            fill: "transparent",
          }}
        />
      </Box>
    </Box>
  );
}

Spinner.defaultProps = {
  color: "fill.0",
  size: 40,
};

export default Spinner;
