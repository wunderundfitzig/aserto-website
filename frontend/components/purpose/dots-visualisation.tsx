'use client'

import { FunctionComponent, memo, useEffect, useState } from 'react'
import PoissonDiskSampling from 'poisson-disk-sampling'
import seedrandom from 'seedrandom'

import * as colors from 'lib/colors'
import { transparentize } from 'polished'

const rng = seedrandom('seed')
const pds = new PoissonDiskSampling(
  {
    shape: [200, 150],
    minDistance: 1.8,
    maxDistance: 2.2,
    tries: 10,
  },
  rng,
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
          stroke={transparentize(0.75, colors.categoryColors.purpose)}
          strokeLinecap='round'
        />
      ))}
    </g>
  )
}
const MemoizedBackgroundDots = memo(BackgroundDots)

type Props = {
  isScrolledIntoView: boolean
  isRight: boolean
  curveElememt: SVGPathElement | null
  curvePoints: Point[]
}
const DotsVisualisation: FunctionComponent<Props> = (props) => {
  const [backgroundDots, setBackgroundDots] = useState<Point[]>([])
  const [dotsOnCurve, setDotsOnCurve] = useState<Point[]>([])
  const [visibleDotsCount, setVisibleDotsCount] = useState(0)

  useEffect(() => {
    if (dotsOnCurve.length === 0) return
    pds.reset()
    const unprojectedDotsOnCurve = dotsOnCurve.map((dot) =>
      unproject(dot, dottedLineVisualisationOffset),
    )
    unprojectedDotsOnCurve.forEach((dot) => {
      pds.addPoint(dot)
    })
    pds.fill()
    const points = pds.getAllPoints() as Point[]
    const filteredPoints = points.filter(
      (point) => !unprojectedDotsOnCurve.includes(point),
    )
    const projectedPoints = filteredPoints.map((point) =>
      project(point, dottedLineVisualisationOffset),
    )
    setBackgroundDots(projectedPoints)
  }, [dotsOnCurve])

  useEffect(() => {
    if (props.curveElememt === null) return
    const curveLength = props.curveElememt.getTotalLength()
    let length = 1
    const step = 2.5
    const dots: Point[] = []
    while (length < curveLength) {
      const point = props.curveElememt.getPointAtLength(length)
      if (point.x > 101 && point.y < 160) {
        dots.push([point.x, point.y])
      }
      length += step
    }
    setDotsOnCurve(dots)
  }, [props.curveElememt, props.curvePoints])

  useEffect(() => {
    if (!props.isScrolledIntoView) {
      setVisibleDotsCount(0)
      return
    }
    if (visibleDotsCount >= dotsOnCurve.length) return
    setTimeout(() => {
      setVisibleDotsCount(visibleDotsCount + 1)
    }, 50)
  }, [dotsOnCurve, visibleDotsCount, props.isScrolledIntoView])

  return (
    <g className={`dots-visualisation ${props.isRight ? 'right' : 'left'}`}>
      <g className='background-dots'>
        <MemoizedBackgroundDots dots={backgroundDots} />
      </g>
      <g className='curve-dots'>
        {dotsOnCurve.map((dot, idx) => (
          <path
            d={`M${dot[0]} ${dot[1]} h0.001`}
            key={'line-dot' + idx}
            fill='none'
            stroke={
              idx < visibleDotsCount
                ? colors.categoryColors.purpose
                : transparentize(0.75, colors.categoryColors.purpose)
            }
            strokeLinecap='round'
          />
        ))}
      </g>
      <style jsx>{`
        path {
          transition: stroke 1s ease-in-out;
        }

        .background-dots {
          opacity: 0;
          transition: opacity 1s;
        }

        .right .background-dots {
          opacity: 1;
        }
      `}</style>
    </g>
  )
}

export default DotsVisualisation
