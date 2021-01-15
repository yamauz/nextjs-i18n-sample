import { useRouter } from "next/router";
import { NextPage } from "next";
import { Text, Button } from "@chakra-ui/react";

const Page: NextPage = () => {
  const router = useRouter();
  const { locale } = router;

  const WELCOME = locale === "ja" ? "ようこそ" : "Welcome";
  const _locale = locale === "ja" ? "en" : "ja";

  return (
    <>
      <Text m={2}>{WELCOME}</Text>

      <Button
        colorScheme={"teal"}
        onClick={() => {
          router.push("/", "/", { locale: _locale });
        }}
      >
        Switch Locale
      </Button>
    </>
  );
};

export default Page;
