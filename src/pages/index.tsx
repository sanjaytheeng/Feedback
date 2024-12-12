import Footer from "@/components/Footer";
import HastagList from "@/components/HastagList";
import Container from "@/components/Container";

import React from "react";

export default function index() {
  return (
    <div className="relative flex justify-center h-[850px]">
      <Footer></Footer>
      <Container></Container>
      <HastagList></HastagList>
    </div>
  );
}
