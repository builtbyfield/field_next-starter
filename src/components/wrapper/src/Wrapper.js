/**
 * Wrapper
 *
 * We use the Wrapper to center and max-out content so
 * that we maintain readable text and organized content
 * through the main spreads of the project.
 *
 * This controls the margins on each side of the content
 * so that content never bleeds into the edge of the
 * screen.
 */

import { Box, ContentBlock } from "components";

function Wrapper({
  as = "section",
  bg = "transparent",
  children,
  maxWidth,
  pb,
  pt,
  px = { _: "layout.1", md: "layout.3" },
  overflow = "hidden",
  ...rest
}) {
  return (
    <Box
      data-component-id="wrapper"
      as={as}
      px={px}
      pt={pt}
      pb={pb}
      overflow={overflow}
      bg={bg}
      {...rest}
    >
      <ContentBlock maxWidth={maxWidth}>{children}</ContentBlock>
    </Box>
  );
}

export default Wrapper;
