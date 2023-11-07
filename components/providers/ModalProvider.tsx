"use client";

import React from "react";

import SettingsModal from "../modals/SettingsModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) null;

  return (
    <>
      <SettingsModal />
    </>
  );
};

export default ModalProvider;
