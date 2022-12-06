import { Text, Box, Skeleton } from "native-base";
import useBalance from "../hooks/useBalance";
import useSpends from "../hooks/useSpends";
export default function SpendCard() {
  const { spends, isLoaded: isSpendsLoaded } = useSpends();

  return (
    <Box>
      <Skeleton h="10" isLoaded={isSpendsLoaded}>
        <Text fontSize="4xl">₹ {spends}</Text>
      </Skeleton>
    </Box>
  );
}
