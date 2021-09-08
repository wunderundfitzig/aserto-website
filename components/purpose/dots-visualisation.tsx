import { FunctionComponent, useEffect, useState } from 'react'
import PoissonDiskSampling from 'poisson-disk-sampling'
import seedrandom from 'seedrandom'

import * as colors from 'lib/colors'

const rng = seedrandom('seed')
const pds = new PoissonDiskSampling(
  {
    shape: [200, 150],
    minDistance: 2,
    maxDistance: 3,
    tries: 10,
  },
  rng
)

type Point = [number, number]

const dottedLineVisualisationOffset = { x: 101, y: 1 }
function project(point: Point, offset: { x: number; y: number }): Point {
  return [point[0] + offset.x, point[1] + offset.y]
}
function unproject(point: Point, offset: { x: number; y: number }): Point {
  return [point[0] - offset.x, point[1] - offset.y]
}

type BackgroundDotsProps = { dots: Point[] }
const BackgroundDots: FunctionComponent<BackgroundDotsProps> = (props) => {
  return (
    <g>
      {props.dots.map((dot, idx) => (
        <path
          d={`M${dot[0]} ${dot[1]} h0.001`}
          key={'background-dot' + idx}
          fill='none'
          stroke={colors.categoryColors.purpose}
          strokeLinecap='round'
        />
      ))}
    </g>
  )
}

type Props = {
  isScrolledIntoView: boolean
  curveElememt: SVGPathElement | null
}
const DotsVisualisation: FunctionComponent<Props> = (props) => {
  const [backgroundDots, setBackgroundDots] = useState<Point[]>([])
  const [dotsOnCurve, setDotsOnCurve] = useState<Point[]>([])
  const [visibleDotsCount, setVisibleDotsCount] = useState(0)

  useEffect(() => {
    if (dotsOnCurve.length === 0) return
    pds.reset()
    dotsOnCurve.forEach((dot) => {
      pds.addPoint(unproject(dot, dottedLineVisualisationOffset))
    })
    pds.fill()
    const points = pds.getAllPoints() as Point[]
    const projectedPoints = points.map((point) =>
      project(point, dottedLineVisualisationOffset)
    )
    console.log('bgdots')
    setBackgroundDots(projectedPoints)
  }, [dotsOnCurve])

  useEffect(() => {
    if (props.curveElememt === null) return
    const curveLength = props.curveElememt.getTotalLength()
    let length = 1
    const step = 3
    const dots: Point[] = []
    while (length < curveLength) {
      const point = props.curveElememt.getPointAtLength(length)
      if (point.x > 101 && point.y < 160) {
        dots.push([point.x, point.y])
      }
      length += step
    }
    setDotsOnCurve(dots)
  }, [props.curveElememt])

  useEffect(() => {
    if (!props.isScrolledIntoView) {
      setVisibleDotsCount(0)
      return
    }
    if (visibleDotsCount >= dotsOnCurve.length) return
    setTimeout(() => {
      setVisibleDotsCount(visibleDotsCount + 1)
    }, 100)
  }, [dotsOnCurve, visibleDotsCount, props.isScrolledIntoView])

  return (
    <g className='dots-visualisation'>
      <BackgroundDots dots={backgroundDots} />
      <g>
        {dotsOnCurve.map((dot, idx) => (
          <path
            d={`M${dot[0]} ${dot[1]} h0.001`}
            key={'background-dot' + idx}
            fill='none'
            stroke={
              idx < visibleDotsCount ? 'white' : colors.categoryColors.purpose
            }
            strokeLinecap='round'
          />
        ))}
      </g>
    </g>
  )
}

export default DotsVisualisation
