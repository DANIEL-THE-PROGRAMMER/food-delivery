
import { Header } from "./components/views/header";
import { DeliveryImage } from "./components/views/deliveryimage";
import { HowAppWorks } from "./components/views/howsection/howsection";
import { Download } from "./components/views/download";

export default function Home() {
  return (
    <>
      <Header />
      <DeliveryImage />
      <HowAppWorks />
      <Download />
    </>
  );
}
