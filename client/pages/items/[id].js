import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useEagerConnect } from "../../utils/hooks";
import {
  getItem,
  getMarketplaceContract,
  getTokenContract,
} from "../../utils/state";
import ItemDetail from "../../components/ItemDetail";

export default function ItemDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const triedEager = useEagerConnect();
  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React();
  const [item, setItem] = useState({});
  const [tokenContract, setTokenContract] = useState(null);
  const [marketplaceContract, setMarketplaceContract] = useState(null);
  useEffect(() => {
    const init = async () => {
      try {
        setItem(await getItem(id));
        setTokenContract(await getTokenContract(chainId, library));
        setMarketplaceContract(await getMarketplaceContract(chainId, library));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (active) {
      init();
    }
  }, [id, library, active]);

  return (
    <ItemDetail
      {...item}
      tokenContract={tokenContract}
      marketplaceContract={marketplaceContract}
    />
  );
}
