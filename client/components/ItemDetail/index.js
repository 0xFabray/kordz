import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  Link,
  SimpleGrid,
  StackDivider,
  Divider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { ethers } from "ethers";

export default function ItemDetail(props) {
  const {
    id,
    seller,
    title,
    description,
    price,
    image,
    token,
    tokenContract,
    marketplaceContract,
  } = props;

  const purchaseNFT = async () => {
    console.log("Purchase NFT");
    const priceInWei = ethers.utils.parseEther("" + price);
    console.log(priceInWei);
    const tx1 = await marketplaceContract.buyItem(id, {
      gasLimit: 3000000,
      value: priceInWei,
    });
    console.log(tx1);
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "300px", lg: "400px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {price} METIS
            </Text>
          </Box>

          <Divider borderColor={useColorModeValue("gray.200", "gray.600")} />
          <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("#5650C4", "#5650C4")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                DETAILS
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Token ID:
                  </Text>{" "}
                  #{id}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Token Link:
                  </Text>{" "}
                  <Link
                    href={token}
                    color={useColorModeValue("#5650C4", "#5650C4")}
                  >
                    {token}
                  </Link>
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Description:
                  </Text>{" "}
                  {description}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Seller:
                  </Text>{" "}
                  {seller}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            fontFamily={"heading"}
            mt={8}
            w={"full"}
            bgGradient="linear(to-r, #00d8c1,#5650C4)"
            color={"white"}
            size={"lg"}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={purchaseNFT}
          >
            Purchase NFT
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
