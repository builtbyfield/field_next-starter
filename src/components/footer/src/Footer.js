import { Box } from "components";

function Footer() {
  return (
    <Box
      data-component-id="footer"
      as="footer"
      mt="auto"
      pt={{ _: "layout.5", md: "layout.6" }}
    >
      <Box height="4px" bg="border.0" />
    </Box>
  );
}

export default Footer;
