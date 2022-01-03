import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  LinkOverlay,
  IconProps,
  Icon,
} from "@chakra-ui/react";

export default function JoinOurTeam() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"6xl"}
        align={"center"}
        // columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 40 }}
      >
        <Stack spacing={{ base: 10, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "7xl" }}
          >
            The NFT Marketplace Powered By{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, #00d8c1,#5650C4)"
              bgClip="text"
            >
              $METIS
            </Text>
          </Heading>
          <Text
            as={"span"}
            fontSize={{ base: "1xl", sm: "1xl", md: "2xl", lg: "2xl" }}
            bgGradient="linear(to-r, gray.500, gray.500)"
            bgClip="text"
            fontStyle="italic"
          >
            metis.market aims to connect creators and users in a decentralized
            manner, all experiencing the blazing speed and low gas fees of Metis
            L2! Discover, collect and trade NFTs on the very first fully-fledged
            NFT marketplace on Metis.
          </Text>
          <Stack
            flex={{ base: 1, md: 0 }}
            direction={"row"}
            spacing={6}
            justify={"center"}
          >
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"xl"}
              fontWeight={600}
              color={"white"}
              bgGradient="linear(to-r, #00d8c1,#5650C4)"
              // bg={"#00d8c1"}
              href="/items"
              size="lg"
              _hover={{
                bg: "pink.300",
              }}
            >
              <LinkOverlay href="/items">Go to Marketplace</LinkOverlay>
            </Button>
          </Stack>
        </Stack>
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
