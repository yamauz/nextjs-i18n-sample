import Link from "next/link";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Box } from "@chakra-ui/react";

const Page: NextPage = () => {
  const router = useRouter();
  const { locale } = router;

  const WELCOME = locale === "ja" ? "ようこそ" : "Welcome";

  return (
    <Box
      m={2}
      n={2}
    >
      {WELCOME}
    </Box>
  );
};

export default Page;
