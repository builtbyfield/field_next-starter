/**
 * Button
 */

import { useState, forwardRef } from "react";
import { useTheme } from "emotion-theming";

import { Box, Icon, Spinner, Text } from "components";

import buttonStyles from "./utils/buttonStyles";

const Button = forwardRef(
  (
    {
      as = "button",
      appearance = "default",
      intent = "default",
      children,
      height = 40,
      iconBefore,
      iconAfter,
      loading,
      round,
      theme,
      ...rest
    },
    ref
  ) => {
    const [isHovering, setIsHovering] = useState(false);

    const getTextSizeForControlHeight = (height) => {
      if (height <= 24) return 300;
      if (height <= 28) return 300;
      if (height <= 32) return 400;
      if (height <= 36) return 400;
      if (height <= 40) return 400;
      return 500;
    };

    const getIconSizeForButton = (height) => {
      if (height <= 28) return 12;
      if (height <= 32) return 12;
      if (height <= 40) return 16;
      if (height <= 48) return 18;
      return 20;
    };

    const ICON_SIZE = getIconSizeForButton(height);
    const PADDING = Math.round(height / 3) + "px";
    const TEXT_SIZE = getTextSizeForControlHeight(height);

    return (
      <Box
        data-component-id="button"
        ref={ref}
        as={as}
        className={isHovering === true ? "isHovering" : undefined}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        height={height + "px"}
        px={PADDING}
        borderRadius={round ? "round" : "corners.2"}
        overflow="hidden"
        // lineHeight={height + "px"}
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
        {iconBefore && (
          <Box
            data-component-id="button.iconBefore"
            as="span"
            pr="spacing.2"
            style={{ opacity: loading && 0 }}
          >
            <Icon symbol={iconBefore} size={ICON_SIZE} color="currentColor" />
          </Box>
        )}
        <Text
          data-component-id="button.content"
          as="span"
          size={TEXT_SIZE}
          fontWeight={600}
          color="currentColor"
          style={{ opacity: loading && 0 }}
        >
          {children}
        </Text>
        {iconAfter && (
          <Box
            data-component-id="button.iconAfter"
            as="span"
            pl="spacing.2"
            style={{ opacity: loading && 0 }}
          >
            <Icon symbol={iconAfter} size={ICON_SIZE} color="currentColor" />
          </Box>
        )}
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

export default Button;
