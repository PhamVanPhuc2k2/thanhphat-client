"use client";

import React from "react";
import Lottie from "lottie-react";

type Props = {
  animationData: object;
  loop?: boolean;
  className?: string;
};

export const LottiePlayer = ({
  animationData,
  loop = true,
  className,
}: Props) => {
  return (
    <Lottie animationData={animationData} loop={loop} className={className} />
  );
};
