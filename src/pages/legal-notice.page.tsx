import { Card, Link, Text } from "@geist-ui/core";

const LegalNotice = () => {
  return (
    <Card>
      <Card.Content>
        <Text h2 mb={2}>
          Angaben gemäß § 5 TMG
        </Text>
        <Text p>Moritz Rehbach</Text>
        <Text p>
          <Link href="mailto:kontakt@moritzrehbach.de">
            kontakt@moritzrehbach.de
          </Link>
        </Text>
        <Text p>
          Diese Website enthält keine gewerblichen Inhalte, Affiliate-Links oder
          sonstige Inhalte, die mich gemäß Telemediengesetz zu einer
          vollständigen Veröffentlichung meiner privaten Kontaktdaten
          verpflichten würden.
          <br />
          Ich arbeite ausschließlich in Festanstellung und vertreibe keine
          Dienstleistungen auf dieser Website.
        </Text>
        <Text p>
          Bei Fragen zu den Inhalten auf dieser Website wenden Sie sich bitte an
          die oben genannte E-Mail-Adresse.
        </Text>
        <Text p>
          Externe Links auf dieser Seite haben zum Zeitpunkt der Verlinkung in
          keinem Fall auf rechtswidrige Inhalte verwiesen. Das Öffnen von Links
          liegt in der Verantwortung des Benutzers. Ich bin nicht verantworlich
          für die Inhalte externer Websites.
        </Text>
      </Card.Content>
      <Card.Content>
        <Text h2>Legal notice</Text>
        <Text h4 my={0}>
          according to German law, TMG § 5
        </Text>
        <Text p>Moritz Rehbach</Text>
        <Text p>
          <Link href="mailto:kontakt@moritzrehbach.de">
            kontakt@moritzrehbach.de
          </Link>
        </Text>
        <Text p>
          This website does not contain any commercial content, affiliate links
          or other content that would oblige me to provide my private address.
        </Text>
        <Text p>
          I work exclusively in permanent employment and do not sell any
          services on this website.
        </Text>
      </Card.Content>
    </Card>
  );
};

export const documentProps = {
  title: `${__PAGE_TITLE__}: Legal notice`,
  description: `Contact information according to German law, § 5 TMG`,
  additionalMetaTags: [{ name: "robots", content: "noindex" }],
};

export default { Page: LegalNotice };
