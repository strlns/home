import { Text } from "@geist-ui/core";

export default function About() {
  return (
    <>
      <Text h3 mt={2} mb={0}>
        About this page
      </Text>
      <Text p>
        This is my personal website, it has no commercial purpose. <br /> I do
        not sell any goods or services on this site, nor do I make money through
        affiliate links or similar things. There are no ads or tracking scripts
        on this site and no external resources are loaded without your consent.
      </Text>
      <Text p>
        I do not work as a freelance developer, only as an employee.
        <br />
        The content of this website is my own. This includes all images, unless
        otherwise noted. Liability and opinions are my own and not with any past
        or future employer.
      </Text>
    </>
  );
}
