import { Navbar, Footer, Hero, Breadcrumb } from "@components/ui/common";
import { EthRates, Walletbars} from "@components/ui/web3"
import { List} from "@components/ui/course"
import { Card} from "@components/ui/order"
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "content/courses/fetcher";





export default function Home() {
  const {data} = getAllCourse()
  return (
    <BaseLayout>
        <Hero />
           <Breadcrumb />
          <EthRates />
            <Walletbars />
            <List />
            <Card data={data}/>
    </BaseLayout>
  )
} 