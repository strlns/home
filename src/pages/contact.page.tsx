import Box from "@app/components/Atoms/Box";
import IconLink from "@app/components/Atoms/IconLink";
import CollapseSnippet from "@app/components/CollapseSnippet";
import {
  Card,
  Description,
  Divider,
  Note,
  Snippet,
  Spacer,
  Tag,
  Text,
} from "@geist-ui/core";
import { Download } from "@geist-ui/icons";

const PGP_KEY_BODY = `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
CbAuLzdI =IBiB`;

const Contact = () => {
  return (
    <>
      <Text h2 mb={2}>
        Contact and PGP Public key
      </Text>
      <Text p>
        Contact me at:{" "}
        <Tag type="secondary" style={{ margin: "0 1ex" }}>
          dev (at) &lt;This domain name&gt;
        </Tag>
      </Text>
      <Note label={false}>
        I am not available for hire in the forseeable future.
      </Note>
      <Spacer />
      {/**@todo: Extract repeated card pattern into a component */}
      <Card>
        <Card.Content>
          <Text h4>OpenPGP Public Key</Text>
          <Text p>
            I'm not a regular PGP user, but feel free to contact me using PGP
            encryption using this public key, which is also valid for PGP
            signatures with my name and the e-mail address above.
          </Text>
        </Card.Content>
        <Divider my={0} />
        <Card.Body>
          <Text p>
            <IconLink
              arrowRight={false}
              iconLeft={<Download />}
              href="/0xB458F1372C53B267.public.asc"
            >
              Download OpenPGP public key
            </IconLink>
          </Text>
          <Box horizontal flexWrap="wrap" gap={6}>
            <Box>
              <Description title="OpenPGP" content="Fingerprint" />
              <Snippet symbol="" width="100%" style={{ overflow: "auto" }}>
                C645 D2DE BA91 8BFB 44CF 98C1 B458 F137 2C53 B267
              </Snippet>
            </Box>
            <Box>
              <Description title="OpenPGP" content="Long ID" />
              <Snippet symbol="">B458F1372C53B267</Snippet>
            </Box>
            <Box>
              <Description title="OpenPGP" content="Short ID" />
              <Snippet symbol="">2C53B267</Snippet>
            </Box>
            <Box>
              <Description title="OpenPGP" content="Public key" />
              <CollapseSnippet
                text={[
                  "-----BEGIN PGP PUBLIC KEY BLOCK-----",
                  PGP_KEY_BODY,
                  "-----END PGP PUBLIC KEY BLOCK-----",
                ]}
              />
            </Box>
          </Box>
        </Card.Body>
      </Card>
    </>
  );
};

export const documentProps = {
  title: `${__PAGE_TITLE__}: Contact and PGP`,
  description: `${__PAGE_TITLE__}: Contact Moritz and/or view his PGP public key.`,
};

export default { Page: Contact };
