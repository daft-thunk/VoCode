import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

/**
 * STATELESS COMPONENT
 */
const Banner = props => {
  return (
    <ParallaxBanner
    className="your-class"
    layers={[
        {
            image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-0.3.5&s=c1058ecb478c4833b4cbf3133d7d10f1&auto=format&fit=crop&w=2550&q=80',
            amount: 0.5,
            slowerScrollRate: false,
        }
    ]}
    style={{
        height: '400px',
    }}
>
</ParallaxBanner>
  )
}

export default Banner


