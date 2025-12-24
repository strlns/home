import BulletList, { BulletPoint } from "@app/components/Atoms/BulletList";
import { Card, Divider, Link, Text, useTheme } from "@geist-ui/core";
import { CSSProperties } from "react";

const Technologies = () => {
  const {
    layout: { pageWidth },
  } = useTheme();
  return (
    <>
      {/*At the moment, text-wrap: balance is an experimental feature only shipped by chrome.
       */}
      <Text
        h2
        style={
          {
            maxWidth: `calc(${pageWidth} / 2})`,
            textWrap: "balance",
          } as CSSProperties
        }
        mb={2}
      >
        Web technologies, languages and frameworks
      </Text>
      {/**@todo: Extract repeated card pattern into a component */}
      <Card my={2}>
        <Card.Content>
          <Text h3 my={0}>
            Frontend
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <BulletList>
            <BulletPoint>HTML, CSS, JavaScript</BulletPoint>
            <BulletPoint>TypeScript</BulletPoint>
            <BulletPoint>
              React{" "}
              <Text small>
                (used exclusively 16+, mainly "Hooks" API, also know basics
                working with class component API)
              </Text>
            </BulletPoint>
            <BulletPoint>
              Vue (2.7 mainly, but since pivoting to React, I became interested
              in Vue 3 too)
            </BulletPoint>
            <BulletPoint>next.js</BulletPoint>
            <BulletPoint>
              nuxt.js <small>(to a lesser extent)</small>
            </BulletPoint>
            <BulletPoint>
              CSS modules, TailwindCSS, styled components, styled JSX, vanilla
              CSS... even Bootstrap: use what fits best.
            </BulletPoint>
            <BulletPoint>
              Working with component libraries, UX-centric development process
            </BulletPoint>
            <BulletPoint>
              Respect and adapt to existing code conventions
            </BulletPoint>
            <BulletPoint>Webpack</BulletPoint>
            <BulletPoint>
              Vite, modern bundlers and their stack (ESBuild, swc)
            </BulletPoint>
            <BulletPoint>
              This site was generated using{" "}
              <Link color href="https://vike.dev">
                vike
              </Link>
              , an alternative to next.js
            </BulletPoint>
          </BulletList>
        </Card.Body>
      </Card>

      <Card my={2}>
        <Card.Content>
          <Text h3 my={0}>
            Backend / Full stack
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <Text h4 mb={1} mt={0}>
            Proficient
          </Text>
          <BulletList>
            <BulletPoint>Modern PHP</BulletPoint>
            <BulletPoint>Symfony PHP framework</BulletPoint>
            <BulletPoint>Relational databases: MySQL, Postgres</BulletPoint>
            <BulletPoint>Laravel PHP framework</BulletPoint>
            <BulletPoint>
              Node.js and full-stack TypeScript as well as
              "JAM-Stack"-approaches (such as this site).
            </BulletPoint>
          </BulletList>
          <Text h4 mb={1} mt={2}>
            Basic knowledge
          </Text>
          <BulletList>
            <BulletPoint>Apache</BulletPoint>
            <BulletPoint>Docker</BulletPoint>
            <BulletPoint>Read and write basic shell scripts</BulletPoint>
            <BulletPoint>NoSQL databases (MongoDB and others)</BulletPoint>
          </BulletList>
          <Text h4 mb={1} mt={2}>
            Basic knowledge from longer ago
          </Text>
          <BulletList>
            <BulletPoint>
              Java <small>(at the time using Swing or JavaFX for GUI)</small>
            </BulletPoint>
            <BulletPoint>Python</BulletPoint>
            <BulletPoint>C# and .NET</BulletPoint>
          </BulletList>
        </Card.Body>
      </Card>

      <Card my={2}>
        <Card.Content>
          <Text h3 my={0}>
            Developer's tools, CI
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <BulletList>
            <BulletPoint>git CLI and GUI</BulletPoint>
            <BulletPoint></BulletPoint>
            <BulletPoint>
              Basic to intermediate skills using Unix/Linux shell
            </BulletPoint>
            <BulletPoint>
              Basic skills configuring cloud technologies and servers (no deep
              admin knowledge so far)
            </BulletPoint>
            <BulletPoint>Cloud deployment</BulletPoint>
            <BulletPoint>Can write and read basic shell scripts.</BulletPoint>
            <BulletPoint>Security-aware</BulletPoint>
            <BulletPoint>Basic knowledge about Gitlab CI</BulletPoint>
            <BulletPoint>Basic knowledge about Docker</BulletPoint>
          </BulletList>
        </Card.Body>
      </Card>
    </>
  );
};

export const documentProps = {
  title: `${__PAGE_TITLE__}: Technology`,
  description: `${__PAGE_TITLE__}: Technologies Moritz is proficient with.`,
};

export default { Page: Technologies };
