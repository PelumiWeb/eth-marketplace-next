
import { useWeb3 } from "@components/provider"
import { useAccount } from "@components/hooks/web3/useAccounts"

import { Hero } from '@components/ui/common'
import { BaseLayout } from '@components/ui/layout'
import { Card } from '@components/ui/order'
import { EthRates, Walletbars } from '@components/ui/web3'
import { getAllCourse } from '@content/courses/fetcher'
import React from 'react'

function Marketplace({courses}) {
  const props = useWeb3()

  
  return (
    <>
    <BaseLayout>
    <div className="pt-10"> 

    <EthRates walletAdress/>
    <Card data={courses}/>
    </div>

    </BaseLayout>

    </>
  )
}

export default Marketplace

export function getStaticProps() {
    const {data} = getAllCourse()

    return {
        props: {
            courses: data
        }
    }
}