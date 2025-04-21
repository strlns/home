import { routePaths } from "@app/routes";
import { Link, Text } from "@geist-ui/core";
import SpotifyPlaylists from "../../components/SpotifyPlaylists/SpotifyPlaylists";
import About from "./About";
import ToyProjectList from "./ToyProjectList";
import Water from "./Water";
const Home = () => {
  return (
    <>
      <Text h2 mb={2}>
        Hi
      </Text>
      <Text p>I'm Moritz Rehbach, a web developer from Cologne, Germany.</Text>
      <Text p>
        I love full-stack development as well as modern frontend development,
        above all I like to learn from others, grow my skills, and sometimes
        even help others when I can.
      </Text>
      <Text p>
        If you have received an e-mail with a PGP signature from me or if you
        want to send me encrypted e-mail, please visit my&nbsp;
        <Link color href={routePaths["Contact me"]} icon>
          Contact page
        </Link>
      </Text>
      <About />
      <ToyProjectList />
      <Water />
      <SpotifyPlaylists shuffleOrder={true} maxItems={9} id="spotify" />
    </>
  );
};

export const documentProps = {
  description: `${__PAGE_TITLE__}: A web developer from Cologne, Germany. Personal homepage (non-commercial).`,
};

export default { Page: Home };
