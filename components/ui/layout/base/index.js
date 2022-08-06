import { Web3provider } from '@components/provider'
import { Footer, Navbar } from '@components/ui/common'
import React from 'react'

function BaseLayout(props) {
  return (
    <Web3provider>
        <div className="relative max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">
            {props.children}
        </div>
        </div>
        <Footer />
    </Web3provider>
  )
}

export default BaseLayout