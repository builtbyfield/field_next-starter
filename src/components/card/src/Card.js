/**
 * Card
 *
 * Rather than nesting content in arbitrary ‘Box’ elements,
 * you may prefer to use standard ‘Card’ elements instead.
 */

import React from "react";
import { Box } from "components";

const Card = React.forwardRef(({ ...props }, ref) => {
  return (
    <Box
      data-component-id="card"
      ref={ref}
      bg="surface.background"
      {...props}
    />
  );
});

export default Card;
