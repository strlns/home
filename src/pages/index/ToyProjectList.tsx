import IconLink from "@app/components/Atoms/IconLink";
import GitIcon from "@app/components/Atoms/Icons/Git";
import SudokuIcon from "@app/components/Atoms/Icons/Sudoku";
import German from "@app/components/Atoms/LanguageIcons/German";
import UnstyledList from "@app/components/Atoms/UnstyledList";
import { Card, Divider, Text } from "@geist-ui/core";
import { Box, Github } from "@geist-ui/icons";

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
          <li>
            <IconLink
              href="https://strlns.github.io/ksuduo"
              iconLeft={<SudokuIcon />}
            >
              Play Sudoku
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://strlns.github.io/gitignore-patterns"
              iconLeft={<GitIcon />}
            >
              Validate .gitignore patterns
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://paperclip-factory.de/permutations"
              iconLeft={<Box />}
            >
              Experiment with permutations, practical application for Latin
              Squares (language: <German />)
            </IconLink>
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
