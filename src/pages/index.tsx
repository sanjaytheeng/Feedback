import Container from "@/components/Container";
import FeedbackItemsContextProvider from "@/components/context/FeedbackItemsContextProvider";
import Footer from "@/components/Footer";
import HastagList from "@/components/HastagList";

export default function Home() {
  return (
    <div className="relative flex justify-center h-[850px]">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
        <HastagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}
