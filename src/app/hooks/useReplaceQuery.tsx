// @packages
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const useReplaceUrl = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const replaceUrl = (name: string, term: string) => {
    if (term) {
      params.set(name, term);
    } else {
      params.delete(name);
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return { replaceUrl };
};

export default useReplaceUrl;
