"use client";

import React from "react";

import SettingsModal from "../modals/SettingsModal";
import CoverImageModal from "../modals/CoverImageModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) null;

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};

export default ModalProvider;
