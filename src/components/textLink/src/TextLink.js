/**
 * Text Link
 */

import { forwardRef } from "react";

import { Box } from "components";

const TextLink = forwardRef(({ ...props }, ref) => {
  return (
    <Box
      data-component-id="textLink"
      ref={ref}
      as="span"
      color="link"
      {...props}
    />
  );
});

export default TextLink;
