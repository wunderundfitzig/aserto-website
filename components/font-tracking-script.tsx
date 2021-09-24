import { FunctionComponent } from 'react'

const FontTrackingScript: FunctionComponent = () => {
  return (
    <style jsx>{`
      @import url('//hello.myfonts.net/count/3fd8e7');
      @import url('https://fast.fonts.net/lt/1.css?apiType=css&c=a343a050-59da-44f4-bede-b3b933046268&fontids=5729734');
    `}</style>
  )
}

export default FontTrackingScript
