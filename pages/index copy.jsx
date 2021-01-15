import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export default function IndexPage(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const WELCOME = locale === "ja" ? "ようこそ" : "Welcome";

  return (
    <div>
      <h1>Index page</h1>
      <p>{WELCOME}</p>
      <Link href="/about">
        <a>To /en/about</a>
      </Link>
      <br />
      <Box
        m={2}
        n={2}
      >
        test
      </Box>
    </div>
  );
}
