import Link from "next/link";
import { useRouter } from "next/router";

export default function IndexPage(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div>
      <h1>about</h1>
    </div>
  );
}
