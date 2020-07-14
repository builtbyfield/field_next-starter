import { forwardRef } from "react";
import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { compose, variant } from "styled-system";

import { Box } from "../../box";
import {
  COMMON,
  BORDER,
  TYPOGRAPHY,
  LAYOUT,
  POSITION,
  FLEX,
  GRID,
} from "../../systemProps";

const StyledElement = styled("span", { shouldForwardProp })(
  variant({
    prop: "size",
    scale: "headings",
  }),
  compose(COMMON, BORDER, TYPOGRAPHY, LAYOUT, POSITION, FLEX, GRID)
);

const Heading = forwardRef(
  ({ children, ellipsis, clamp, size, ...rest }, ref) => {
    return (
      <StyledElement
        data-component-id={`typography.heading.${size}`}
        ref={ref}
        size={size}
        {...rest}
      >
        <Box
          data-component-id={`typography.heading.${size}.content`}
          as="span"
          children={children}
          css={[
            clamp > 0 && {
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              MozBoxOrient: "vertical",
              WebkitLineClamp: clamp,
            },
            ellipsis && {
              display: "block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
          ]}
        />
      </StyledElement>
    );
  }
);

Heading.defaultProps = {
  display: "block",
  size: 700,
  color: "label.0",
};

export default Heading;
