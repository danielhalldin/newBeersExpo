import React from "react";
import { Footer, UntappedLogo } from "./styles";
import untappdLogo from "../../assets/pbu_80_yellow.png";

export default function App() {
  return (
    <Footer>
      <UntappedLogo source={untappdLogo} resizeMode="contain" />
    </Footer>
  );
}
