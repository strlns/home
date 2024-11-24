import BulletList from "@app/components/Atoms/BulletList";
import English from "@app/components/Atoms/LanguageIcons/English";
import German from "@app/components/Atoms/LanguageIcons/German";
import iconStyles from "@app/styles/Icon.module.css";
import userSelectNoneStyles from "@app/styles/NonSelectableText.module.css";
import {
  Card,
  Collapse,
  Divider,
  Link,
  Spacer,
  Text,
  Tooltip,
} from "@geist-ui/core";
import { HeartFill, MessageSquare } from "@geist-ui/icons";
import { CSSProperties } from "react";

const Competences = () => {
  return (
    <>
      <Text h2 mb={2}>
        Competences and interests
      </Text>
      {/**@todo: Extract repeated card pattern into a component */}
      <Card my={2}>
        <Card.Content>
          <Text h4 my={0}>
            Things that I like.
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <BulletList>
            <li>Implementing web applications using various technologies.</li>
            <li>Perfecting and iterating user experience in collaboration.</li>
            <li>
              Helping to determine requirements and user stories and how to
              implement them.
            </li>
            <li>
              Making users, stakeholders and designers content with the UX of{" "}
              <strong>their</strong> web application.
            </li>
            <li>Passionate about accuracy.</li>
            <li>
              Structuring complex data to achieve a simple and understandable
              result.
            </li>
            <li>
              Basic knowledge about algorithms, complexity theory and general
              computer science (studied at University of Bonn).
              <br />
              Know when to look things up and which data structures to use to
              avoid unneeded complexity.
            </li>
            <li>Love long debugging sessions with a happy end.</li>
            <li>
              Respect for page performance, maintainability and SEO from the
              start: good UX and DX is hard to add retroactively.
            </li>
            <li>
              Through working on web projects, I also can estimate when it is
              worth optimizing things and when it is not.
              <br />
              That being said, I am allergic to a certain threshold of unneeded
              complexity.
            </li>
            <li>
              Staying up to date with the latest developments in web technology
              and general IT.
            </li>
            <li>
              Taking care of frictionless development processes and web
              applications that are maintanable in the long-term.
            </li>
            <li>
              Learning from better developers to constantly improve my skills.
            </li>
            <li>…</li>
            <li style={{ "--icon-size": "1em" } as CSSProperties}>
              <Tooltip
                text="Life is short."
                style={{ width: "auto" }}
                placement="top"
                offset={-8}
              >
                I <HeartFill color="red" className={iconStyles.icon} /> music
                (especially electronic and classical),
                <HeartFill color="red" className={iconStyles.icon} /> nature,
                and <HeartFill color="red" className={iconStyles.icon} /> people
              </Tooltip>
            </li>
            <li>
              Languages:
              <div
                style={{ display: "inline" }}
                className={userSelectNoneStyles.selectNone}
              >
                {" "}
                <German /> and <English />
              </div>
            </li>
          </BulletList>
        </Card.Body>
      </Card>
      <Card my={2}>
        <Card.Content>
          <Text h5 my={0} style={{ display: "flex", alignItems: "center" }}>
            <MessageSquare />
            <Spacer inline />
            AI
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <Text p>
            Like many people, I am fascinated by the progress made in AI and
            especially the recent leaps in Deep Learning and Large Language
            Modeles. I enjoy following the advancements and tinkering with
            publicly available technologies.
          </Text>
          <Text p>
            That being said, I am <em>not</em> an AI or machine learning expert.
          </Text>
          <Text small p>
            I am mostly a curious and fascinated end user, especially of
            generative modeles, ever since GPT-2 emerged in simple-to-use forms
            for the general public in 2019. I still sometimes enjoy tinkering
            with pre-trained models that everyone can use and especially like
            the possibility to run models locally (StableDiffusion, locally
            installable text LLMs...)
          </Text>
          <Text p>
            As a "bird's-eye" introduction for people like me, I enjoyed the
            book "You look like a thing and I love you" by Janelle Shane.
          </Text>
          <Collapse scale={0.5} title="More...">
            <Text p>
              I use some spare time now and then to try and try various locally
              installable models, I enjoy their current emergence and
              improvement, from StableDiffusion to various text LLMs, also the
              self-contained and easy-to-use frontends for them.
              <br />
              An especially exciting new development are the quantized and
              otherwise down-scaled text LLMs that{" "}
              <Link color href="https://simonwillison.net/2023/Mar/11/llama/">
                can run on laptop hardware.
              </Link>
            </Text>
            <Text p>
              Another thing that blew my mind conceptually was{" "}
              <Link href="https://www.riffusion.com/about" color>
                riffusion
              </Link>
              , this really emphasizes the universality of "language" in some
              sense.
            </Text>
            <Text p>
              I also use OpenAI's products, although only rarely and mostly for
              fun so far.
            </Text>
            <Text>
              What LLMs and other ML developments will bring in the future –
              apart from humour, disruption, doomsday predictions – I think few
              people can already tell, if anyone at all.
              <br />
              There's quite a bit of crazy emergent behavior and capabilities
              that I didn't consider possible when first trying GPT-2 and GPT-3.
              <br />
              And of course the question of when something can be considered
              emergent behavior at all.
            </Text>
            <Text p>
              I can recommend AI research papers about newer LLL developments as
              they are often entertaining and accessible, and my interest in the
              topic tends to rise and fall periodically.
            </Text>
            <Text p>
              TL;DR:
              <br />
              AI has been mostly a creative tool and toy for me, and funny
              dialogues with AI have been helping me to find humor in dark
              times. I also like to test more useful capabilities and test
              unconventional prompts and contexts.
              <br />I learned a little bit about AI at university, even about
              neural networks, but unfortunately did not finish this course at
              the time.
            </Text>
            <Text p>
              On a darker note, re-reading{" "}
              <Link color href="https://qntm.org/mmacevedo">
                this great short story
              </Link>{" "}
              in light of the{" "}
              <Link
                color
                href="https://cdn.openai.com/papers/gpt-4-system-card.pdf"
              >
                actual release paper for GPT-4
              </Link>{" "}
              is quite a confusing experience after having spent too much time
              on the internet.
            </Text>
          </Collapse>
          <Text small p style={{ lineHeight: 1 }}>
            For eagle-eyed readers: I like AI too, I'm just not an AI expert.
            <br />
            By now, editing this page and writing about my limited personal
            experience can hardly keep up with the crazy-fast developments in
            generative AI.
          </Text>
        </Card.Body>
      </Card>
    </>
  );
};

export const documentProps = {
  title: `${__PAGE_TITLE__}: Competences`,
  description: "Moritz's competences and interests.",
};

export default { Page: Competences };
