import IconLink from "@app/components/Atoms/IconLink";
import GitIcon from "@app/components/Atoms/Icons/Git";
import SudokuIcon from "@app/components/Atoms/Icons/Sudoku";
import German from "@app/components/Atoms/LanguageIcons/German";
import UnstyledList from "@app/components/Atoms/UnstyledList";
import listStyles from "@app/styles/ToyProjectListCard.module.css";
import { Card, Divider, Text } from "@geist-ui/core";
import { Box, Github, Infinity as InfinityIcon } from "@geist-ui/icons";

export default function ToyProjectList() {
  return (
    <Card my={2} shadow>
      <Card.Content>
        <hgroup>
          <Text h3 mt={0}>
            Toy projects
          </Text>
          <Text p small my={0} style={{ lineHeight: 1 }}>
            Projects I did to learn certain technologies, realize ideas, or just
            for fun.
          </Text>
        </hgroup>
      </Card.Content>
      <Divider my={0} />
      <Card.Body>
        <UnstyledList listType="ul">
          <li className={listStyles.item}>
            <IconLink
              href="https://strlns.github.io/ksuduo"
              iconLeft={<SudokuIcon />}
            >
              Play Sudoku
            </IconLink>
            <Text small p mt={0}>
              dated, was my learning project to learn React and TypeScript
            </Text>
          </li>
          <li className={listStyles.item}>
            <IconLink
              href="https://strlns.github.io/gitignore-patterns"
              iconLeft={<GitIcon />}
            >
              Validate .gitignore patterns
            </IconLink>
            <Text small p mt={0}>
              (desktop, terrible UX, no use except showing behaviour without CLI
              or IDE)
            </Text>
          </li>
          <li className={listStyles.item}>
            <IconLink
              href="https://moritzrehbach.de/mandelbrot/mandelbrot.html"
              iconLeft={<InfinityIcon />}
            >
              Mandelbrot
            </IconLink>
            <Text small p mt={0}>
              (desktop, experiment on iterating with different LLMs + some own
              code: unfinished)
            </Text>
          </li>
          <li className={listStyles.item}>
            <IconLink
              href="https://paperclip-factory.de/permutations"
              iconLeft={<Box />}
            >
              Latin squares / seatings
            </IconLink>
            <br />
            (<German />, desktop, just an illustration for a friend)
          </li>
        </UnstyledList>
      </Card.Body>
      <Card.Footer style={{ textAlign: "right", justifyContent: "flex-end" }}>
        <IconLink href="https://github.com/strlns" iconLeft={<Github />}>
          <Text small>Visit my GitHub profile</Text>
        </IconLink>
      </Card.Footer>
    </Card>
  );
}
