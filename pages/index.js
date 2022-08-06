import { Navbar, Footer, Hero, Breadcrumb } from "@components/ui/common";
import { EthRates, Walletbars} from "@components/ui/web3"
import { List} from "@components/ui/course"
import { Card} from "@components/ui/order"
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "content/courses/fetcher";
import { useWeb3 } from "@components/provider";





export default function Home() {
  const {data} = getAllCourse()
  // const {test} = useWeb3()
 
  return (
    <App>
    {/* {test} */}
        <Hero />
           <Breadcrumb />
          <EthRates />
            <Walletbars />
            <List />
            <Card data={data}/>
    </App>
  )
} 

export function App (props) {
    return(
      <BaseLayout>
          {props.children}
      </BaseLayout>
    )
}