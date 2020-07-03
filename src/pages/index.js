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

function IndexPage() {
  return (
    <>
      <Head>
        <title>Field Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper pt={{ _: "layout.5", md: "layout.6" }}>
        <VStack space={{ _: "layout.5", md: "layout.6" }} dividers={true}>
          <Paragraph size={600} maxWidth={960 / 1.25}>
            Opinionated starter by Field for the Next.js framework. Using
            dependencies like Emotion, styled-system, and Polished to deliver
            high quality and performant interfaces with a great developer
            experience.
          </Paragraph>
          <Columns space="layout.3">
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <VStack space="layout.1">
                <Heading size={600} ellipsis>
                  Who we are
                </Heading>
                <Paragraph size={400} maxWidth={960 / 2.5} color="label.1">
                  Field is a Calgary-based technology and design consultancy
                  with an eye for design and mind for strategic execution. We
                  focus on making great new digital experiences and helping
                  existing companies refocus on digital. For more information,
                  please{" "}
                  <Box
                    as="a"
                    href="https://builtbyfield.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="link"
                  >
                    visit our website
                  </Box>
                  .
                </Paragraph>
              </VStack>
            </Column>
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <VStack space="layout.1">
                <Heading size={600}>What we do</Heading>
                <Paragraph size={400} maxWidth={960 / 2.5} color="label.1">
                  We see the opportunity to approach digital products as
                  experiences. A well built digital experience is the outcome of
                  equal parts design, engineering, and strategy, and isn't just
                  websites. We consult on technology, build websites and web
                  apps, design interfaces, and create design systems.
                </Paragraph>
              </VStack>
            </Column>
          </Columns>
          <ColorMode mode="light">
            <Columns space="layout.1">
              <Column width={{ _: 1 / 1, md: 1 / 2 }}>
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
              </Column>
              <Column width={{ _: 1 / 1, md: 1 / 2 }}>
                <Link href="/styles" passHref>
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
                      <Heading size={700}>Styles</Heading>
                    </VStack>
                  </Card>
                </Link>
              </Column>
            </Columns>
          </ColorMode>
        </VStack>
      </Wrapper>
    </>
  );
}

export default IndexPage;
