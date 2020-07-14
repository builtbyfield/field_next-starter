/**
 * Button
 */

import React, { useState } from "react";
import { useTheme } from "emotion-theming";

import { Box, Icon, Spinner } from "components";

import buttonStyles from "./utils/buttonStyles";

const IconButton = React.forwardRef(
  (
    {
      as = "button",
      appearance = "default",
      intent = "default",
      height = 40,
      loading,
      symbol,
      round,
      theme,
      ...rest
    },
    ref
  ) => {
    const [isHovering, setIsHovering] = useState(false);

    const getIconSizeForButton = (height) => {
      if (height <= 24) return 16;
      if (height <= 28) return 18;
      if (height <= 32) return 20;
      if (height <= 40) return 24;
      if (height <= 48) return 24;
      return 24;
    };

    const ICON_SIZE = getIconSizeForButton(height);

    return (
      <Box
        data-component-id="iconButton"
        ref={ref}
        as={as}
        className={isHovering === true ? "isHovering" : undefined}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        width={height + "px"}
        height={height + "px"}
        borderRadius={round ? "round" : "corners.2"}
        overflow="hidden"
        fontWeight={500}
        css={{
          ...buttonStyles(appearance, intent, theme ? theme : useTheme()),
          userSelect: "none",
          whiteSpace: "nowrap",
          cursor: "pointer",
          "&:focus": { outline: 0 },
          "&:disabled": { opacity: 0.5, pointerEvents: "none" },
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        {...rest}
      >
        <Icon
          symbol={symbol}
          size={ICON_SIZE}
          color="currentColor"
          style={{ opacity: loading && 0 }}
        />
        {loading && (
          <Box
            data-component-id="button.spinner"
            position="absolute"
            top="50%"
            left="50%"
            css={{ transform: "translate(-50%, -50%)" }}
          >
            <Spinner size={height / 2} color="currentColor" />
          </Box>
        )}
      </Box>
    );
  }
);

export default IconButton;
