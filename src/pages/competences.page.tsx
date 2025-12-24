import BulletList from "@app/components/Atoms/BulletList";
import English from "@app/components/Atoms/LanguageIcons/English";
import German from "@app/components/Atoms/LanguageIcons/German";
import iconStyles from "@app/styles/Icon.module.css";
import userSelectNoneStyles from "@app/styles/NonSelectableText.module.css";
import { Card, Collapse, Divider, Link, Text, Tooltip } from "@geist-ui/core";
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
          <Text
            h5
            my={0}
            style={{ display: "flex", alignItems: "center", gap: "1ch" }}
          >
            <MessageSquare />
            AI, blockchain, Web 3.0 and carbon-neutral superhuman robots
            <sup>1, 2</sup>
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <Text p small>
            Like many people, I am fascinated by the progress made in AI,
            especially Deep Learning and AI Language Models. I enjoy following
            the advancements and tinkering with publicly available tools.
          </Text>
          <Text p small>
            I am <em>not</em> an AI or machine learning expert. I have some
            surface-level knowledge about the workings of various AI
            technologies, but it's nothing I have studied deeply. Integrating AI
            tools into existing workflows is not beyond my knowledge, but also
            not my main area of expertise.
            <br />I try to be a generalist and learn as much as I can about many
            aspects of software <em>and the world we live in</em>, however, I
            would not claim to be a generalist in the sense of being an expert
            in multiple fields. Of course, I've also pondered some of the
            philosophical, artistic and ethical aspects of AI usage in the
            recent years.
            <br />I think that today, it is more important than ever to view
            technology as a means to an end, and not get lost in technology for
            it's own sake. Of course, I'm also a developer, so I sometimes have
            to remind myself of this :)
          </Text>
          <Text small p>
            When GPT-2 emerged in simple-to-use forms for the general public in
            2019, I was fascinated, and this experience repeated a couple of
            times since then.
            <br />I also was always interested in the digestible bits of news
            that came from AI research in the late 2010s, for example by Google
            and other research groups: from AlphaGo and AlphaZero to the image
            analysis insights, "deep dreams", etc etc.
            <br />
            "Interested" means just that: I read some interesting articles about
            these things, but I'm not a scientist.
            <br />
            When ChatGPT was released, and in the subsequent months, a plethora
            of other tools, including locally usable text and image generation
            models, arrived, I was also very much fascinated by these tools.
            <br />
            Three years later, my fascination has cooled down, but it still
            feels incredible what Artifical Neural Networks are capable of when
            being{" "}
            <Link
              href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html"
              color
            >
              fed enough data
            </Link>
            .
          </Text>
          <Text p small>
            As a "bird's-eye" introduction for people like me, I enjoyed the
            book "You look like a thing and I love you" by Janelle Shane.
          </Text>
          <Collapse scale={0.5} title="More...">
            <Text p>
              Ever since quantized down-scaled text LLMs{" "}
              <Link color href="https://simonwillison.net/2023/Mar/11/llama/">
                can run on laptop hardware,
              </Link>{" "}
              I've tried a lot of stuff on my own machines as well, and I like
              how self-hosted tools can be very viable alternatives to SaaS
              frontier models for many use cases, from experiments to commercial
              software. I think this is a very good development. I have no
              experience with fine-tuning, modifying or training models myself
              though. I've settled on{" "}
              <Link href="https://ollama.com/" color>
                ollama
              </Link>{" "}
              for fun experiments, and currently am not an active enthusiast or
              tinkerer anymore when it comes to the details of running local
              models: I only use what works :)
            </Text>
            <Text p>
              A random thing that blew my mind at the time (in 2023) was{" "}
              <Link href="https://www.riffusion.com/about" color>
                Riffusion
              </Link>
              , this really emphasizes the universality of "language" in some
              sense. Fast-forward a few years, and there are so many other
              things to explore again, it's really interesting.
              <br />
              However, when it comes to art, music, literature, I am not an AI
              enthusiast. We'll see whether creative (mis-)use of AI brings
              interesting art in the future, I guess. So far, I know none and I
              don't think there is a need for it. For this reason, Riffusion
              felt lot more "magical" to me than (for example) Suno, although
              the latter produces much more "impressive" results that seemed
              unthinkable when the former came out!
            </Text>
            <Text p>
              So: AI has been mostly a creative tool and toy for me. I use it a
              bit for work, however, it's not my most essential tool so far.
              <br />I learned a little bit about AI at university, even about
              neural networks (Perceptrons, gradient descent etc.), but did not
              finish that course at the time (it wasn't mandatory). Time flies,
              I can only imagine how popular such a lecture would be in a CS
              program today. When I went to university, I mainly liked
              theoretical CS, the basic maths classes and the projects where I
              could do some coding.
            </Text>
            <Text p>
              In recent years, I have tried coding assistance tools as well.
              They're not an integral part of my workflow as a developer, but I
              like to reach for them sometimes, when it seems suitable and they
              can save me some time. Useful AI assistance for me so far mostly
              consists of creating repetitive boilerplate code, saving a bit of
              time when implementing a well-known behavior that is easily
              described and verified, or when creating things like mocks in unit
              tests.
            </Text>
            <Text p>
              "Vibe coding", or coding driven by AI as the main tool for
              development has not really been my thing so far, except for{" "}
              <Link href="https://github.com/strlns/very-serious-vibecoding">
                silly experiments
              </Link>{" "}
              outside of work.
              <br />
              In short: I'm not really an AI enthusiast, but I certainly was an
              enthusiast for a while. I am still often fascinated by the many
              variants of generative AI, also by other uses like AI-supported
              information extraction, classification and analysis.
              <br />
              However, in practise, I'm more of a curious bystander than a fast
              adopter of AI products at this point. When it comes to private use
              of AI, I often find "failure modes" of the tools more interesting
              than talking to a chatbot. I am not very comfortable with the
              anthropomorphization of these tools that some companies seem to
              encourage (e.g. using AI chat bots as a doctor or information
              authority).
              <br />I think that people should approach generative AI from a
              non-serious stand point. My experiments with base models not
              trained to be an "assistant" have fascinated me more than ChatGPT
              did, although the latter certainly was a wow-moment, too.
            </Text>
          </Collapse>
        </Card.Body>
      </Card>
      <Card my={1}>
        <Card.Content>
          <Text h4 my={0}>
            Footnotes
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <Text small p style={{ lineHeight: 1 }}>
            <sup>1</sup> For eagle-eyed readers who read the headlines: I like
            AI too, I'm just not an AI expert.
          </Text>
          <Text small p style={{ lineHeight: 1 }}>
            <sup>2</sup> I do not own such a robot.
          </Text>
          <Text small p style={{ lineHeight: 1 }}>
            Editing this page and writing about my limited personal experience
            can hardly keep up with the developments there are, but this is not
            a website about AI, so...
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
