import Head from "next/head";
import Link from "next/link";

import {
  Box,
  Card,
  ColorMode,
  Column,
  Columns,
  Heading,
  Paragraph,
  Text,
  VStack,
  Wrapper,
} from "components";

function StylesPage() {
  return (
    <>
      <Head>
        <title>Styles - Field Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper pt={{ _: "layout.5", md: "layout.6" }}>
        <VStack space={{ _: "layout.5", md: "layout.6" }} dividers={true}>
          <Heading size={800}>Styles</Heading>
          <Paragraph size={600} maxWidth={960 / 1.25}>
            Our method for styling elements in this project uses{" "}
            <Box
              as="a"
              href="https://emotion.sh/"
              target="_blank"
              rel="noopener noreferrer"
              color="link"
            >
              Emotion
            </Box>
            , a library designed for writing css styles with JavaScript. It
            provides powerful and predictable style composition in addition to a
            great developer experience with features such as source maps,
            labels, and testing utilities. Both string and object styles are
            supported.
          </Paragraph>
          <Columns space="layout.3">
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <VStack space="layout.1">
                <Heading size={600}>Labeling</Heading>
                <Paragraph size={400} maxWidth={960 / 2.5} color="label.1">
                  Because Emotion abstracts away most traditional CSS classes,
                  we use HTML <code>data-*</code> attributes to label components
                  so that editors can easily identify what elements are what
                  components in the DOM. We do this by assigning components{" "}
                  <code>data-component-id="componentName"</code> attributes.
                  These are great for element-associated metadata and have{" "}
                  <Box
                    as="a"
                    href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="link"
                  >
                    little to no performance overhead
                  </Box>
                  .
                </Paragraph>
              </VStack>
            </Column>
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <VStack space="layout.1">
                <Heading size={600}>Extending</Heading>
                <Paragraph size={400} maxWidth={960 / 2.5} color="label.1">
                  To expand upon Emotion, we use{" "}
                  <Box
                    as="a"
                    href="https://styled-system.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="link"
                  >
                    styled-system
                  </Box>{" "}
                  which provides us with "style props for rapid UI development."
                  We're able to assign most of the typically styles we use to a
                  component called <code>Box</code> which we can then use as a
                  starting point for new components. This allows us to write
                  shorthand CSS and access our <code>Theme.js</code> variables
                  providing consistent spacing, colours, fonts, type styles, and
                  breakpoints. Style prop definitions automatically generate
                  into CSS classes that are assigned to their components.
                </Paragraph>
              </VStack>
            </Column>
          </Columns>
          <Columns space="layout.1">
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <ColorMode mode="light">
                <Link href="/pages" passHref>
                  <Card
                    as="a"
                    display="block"
                    p={{ _: "layout.1", md: "layout.3" }}
                    bg="tint.yellow"
                  >
                    <VStack space="layout.5">
                      <Text size={300} color="label.1">
                        How it works
                      </Text>
                      <Heading size={700}>Pages</Heading>
                    </VStack>
                  </Card>
                </Link>
              </ColorMode>
            </Column>
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <Link href="/" passHref>
                <Card
                  as="a"
                  display="block"
                  p={{ _: "layout.1", md: "layout.3" }}
                  bg="groupedBackground.0"
                >
                  <VStack space="layout.5">
                    <Text size={300} color="label.1">
                      Index
                    </Text>
                    <Heading size={700}>Home</Heading>
                  </VStack>
                </Card>
              </Link>
            </Column>
          </Columns>
        </VStack>
      </Wrapper>
    </>
  );
}

export default StylesPage;
