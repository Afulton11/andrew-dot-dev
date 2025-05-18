"use client";

import Image, { ImageProps } from "next/image";
import { useTheme } from "next-themes";

const ThemedImage = ({
  darkSrc,
  src,
  ...props
}: ImageProps & { darkSrc: string }) => {
  const { theme } = useTheme();

  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- passthrough
    <Image
      {...props}
      src={theme === "dark" ? darkSrc : src}
      suppressHydrationWarning
    />
  );
};

export { ThemedImage };
