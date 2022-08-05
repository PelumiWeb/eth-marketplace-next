import { Footer, Navbar } from '@components/ui/common'
import React from 'react'

function BaseLayout(props) {
  return (
    <div>
        <div className="relative max-w-7xl mx-auto px-4">
        <Navbar />
        <div className="fit">
            {props.children}
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default BaseLayout