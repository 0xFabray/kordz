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
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import ItemPreview from "../ItemPreview";

export default function Marketplace({ items }) {
  return (
    <Container maxW={"8xl"}>
      <Heading
        lineHeight={1.1}
        align="center"
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        py={{ base: 6, md: 12 }}
      >
        The{" "}
        <Text
          as={"span"}
          bgGradient="linear(to-r, #00d8c1,#5650C4)"
          bgClip="text"
        >
          Marketplace
        </Text>
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, md: 8 }}>
        {items.map((item) => (
          <ItemPreview key={item.id} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
