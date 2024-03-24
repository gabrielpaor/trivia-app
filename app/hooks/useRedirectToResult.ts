import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRedirectToResult = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/result");
  }, [router]);
};

export default useRedirectToResult;
