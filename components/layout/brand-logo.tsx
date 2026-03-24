import Image from "next/image";

type BrandLogoProps = {
  priority?: boolean;
  variant?: "header" | "footer";
};

export function BrandLogo({
  priority = false,
  variant = "header"
}: BrandLogoProps) {
  const imageClassName =
    variant === "header"
      ? "h-16 w-auto md:h-[4.75rem]"
      : "h-14 w-auto md:h-16";

  return (
    <Image
      alt="KawanKerja AI logo"
      className={`${imageClassName} drop-shadow-[0_12px_30px_rgba(15,139,109,0.18)]`}
      height={1024}
      priority={priority}
      src="/kawankerja-logo.png"
      width={1536}
    />
  );
}

