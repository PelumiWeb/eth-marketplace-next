import { Navbar, Footer, Hero, Breadcrumb } from "@components/common";
import { EthRates, Walletbars} from "@components/web3"
import { List} from "@components/course"
import { Card} from "@components/order"
import { BaseLayout } from "@components/layout";





export default function Home() {
  return (
    <BaseLayout>
        <Hero />
           <Breadcrumb />
          <EthRates />
            <Walletbars />
            <List />
            <Card />
    </BaseLayout>
  )
}