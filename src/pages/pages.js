import Head from "next/head";
import Link from "next/link";

import {
  Card,
  ColorMode,
  Column,
  Columns,
  Heading,
  Paragraph,
  Text,
  TextLink,
  VStack,
  Wrapper,
} from "components";

function PagesPage() {
  return (
    <>
      <Head>
        <title>Pages - Field Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper pt={{ _: "layout.5", md: "layout.6" }}>
        <VStack space={{ _: "layout.5", md: "layout.6" }} dividers={true}>
          <Heading size={900}>Pages</Heading>
          <Paragraph size={600} maxWidth={960 / 1.25}>
            Pages are very simple to create. Any JavaScript file with an export
            should create a new page within Next.js. Hot tip: use a underscore
            (_) to have that file ignored. Manual file creation is just one way
            of creating new pages though.
          </Paragraph>
          <Columns space="layout.3">
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <VStack space="layout.1">
                <Heading size={600}>Sources</Heading>
                <Paragraph size={400} maxWidth={960 / 2.5} color="label.1">
                  We can use any number of{" "}
                  <TextLink
                    as="a"
                    href="https://www.gatsbyjs.org/tutorial/part-five/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sources
                  </TextLink>{" "}
                  to grab content from all over the web and use that content to
                  create new pages. Examples of sources might be a content
                  management system (CMS) like Wordpress or Prismic, or more non
                  traditional sources like Airtable.
                </Paragraph>
              </VStack>
            </Column>
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <VStack space="layout.1">
                <Heading size={600}>Templates</Heading>
                <Paragraph size={400} maxWidth={960 / 2.5} color="label.1">
                  Generated pages uses templates to display their content.
                  Templates are assigned for each page type. A template can be
                  configured to display content from a source on the web or an
                  internal piece of data like a markdown (.md) file or JSON.
                  There's a lot of flexibility available here.
                </Paragraph>
              </VStack>
            </Column>
          </Columns>
          <Columns space="layout.1">
            <Column width={{ _: 1 / 1, md: 1 / 2 }}>
              <ColorMode mode="light">
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

export default PagesPage;
