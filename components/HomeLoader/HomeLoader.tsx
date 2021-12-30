import { useEffect } from 'react'
import anime from 'animejs'

import LoaderIcon from './LoaderIcon/LoaderIcon'
import { Container, Line, Text } from './HomeLoader.styles'

type Props = {
  finishLoading: Function
}

const HomeLoader = ({ finishLoading }: Props) => {
  useEffect(() => {
    const animeLoader = anime.timeline({
      // complete: () => finishLoading()
    })
  
    animeLoader.add({
      targets: '#homepage-loader path',
      strokeDashoffset: [ anime.setDashoffset, 0 ],
      easing: 'easeInOutSine',
      duration: 800,
      delay: function(el, i) { return i * 500 },
    })
      .add({
        targets: 'p',
        opacity: [ 0, 1 ]
      })
      .add({
        targets: '.line',
        duration: 500,
        easing: 'linear',
        width: '100%',
        direction: 'alternate',
        delay: () => anime.random(0, 500)
      })
      .add({
        targets: 'svg, p',
        opacity: [ 1, 0 ],
        duration: 100
      })
      .add({
        targets: '.line',
        duration: 500,
        easing: 'linear',
        width: 0,
        direction: 'alternate',
        delay: () => anime.random(0, 500)
      })
  })

  const renderLinesAnimation = (linesQuantity: number) => (
    [...Array(linesQuantity)].map((line, i) => {
      return (
        <Line 
          className='line'
          height={100 / linesQuantity}
          key={i} 
          top={(100 / linesQuantity) * i}
        />
      )
    })
  )

  return (
    <Container className="test">
      {renderLinesAnimation(10)}
      <LoaderIcon />
      <Text>BASE</Text>
    </Container>
  )
}

export default HomeLoader