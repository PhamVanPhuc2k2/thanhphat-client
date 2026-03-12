"use client";

import React, { useState, useEffect } from "react";
import { BottomNavigation } from "../components/bottomNavigation/BottomNavigation";
import { MenuMobile } from "../components/menu/MenuMobile";
import { BackToTop } from "../components/backtotop/BackToTop";
import { ZaloFloat } from "../components/zalo/ZaloFloat";
import { Category } from "../types/category";

type Props = {
  categories: Category[];
};

export const ClientOverlayComponents = ({ categories }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <>
      <MenuMobile showMenu={showMenu} categories={categories} />
      <BottomNavigation handleShowMenu={handleShowMenu} />
      <BackToTop />
      <ZaloFloat />
    </>
  );
};
