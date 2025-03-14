import Image from "next/image";
import { useDispatch } from "react-redux";

import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import { goToStep } from "@/store/slice/setup.slice";
import { AppDispatch } from "@/config/store.config";

const Welcome = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center rounded-lg border bg-background px-8 py-12 shadow-sm sm:px-10">
      <div className="flex items-center gap-3">
        <Image
          src={siteConfig.favicon}
          alt={siteConfig.title}
          width={32}
          height={32}
          priority
          quality={100}
          className="object-contain"
        />
        <Image
          src="/svg/logo.svg"
          alt={siteConfig.title}
          width={120}
          height={30}
          priority
          quality={100}
          className="object-contain"
        />
      </div>

      <div className="mx-auto mt-14 flex w-full flex-col text-center sm:max-w-[491px]">
        <h1 className="text-3xl font-semibold tracking-tighter">
          Welcome to {siteConfig.title}
        </h1>
        <p className="mt-1 text-base font-medium">
          Decentralized Escrow. Simplified.
        </p>

        <Button
          size={"lg"}
          onClick={() => dispatch(goToStep(2))}
          className="mt-10 w-full font-medium tracking-tight"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
