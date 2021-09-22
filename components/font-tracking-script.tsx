import Script from 'next/script'
import { FunctionComponent } from 'react'

const FontTrackingScript: FunctionComponent = () => {
  return (
    <Script id='font-trackin-script' strategy='lazyOnload'>{`
        var MTUserId='a343a050-59da-44f4-bede-b3b933046268';
        var MTFontIds = new Array();

        MTFontIds.push("5729734"); // ITC Usherwood® W01 Bold 
        (function() {
            var mtTracking = document.createElement('script');
            mtTracking.type='text/javascript';
            mtTracking.async='true';
            mtTracking.src='/vendor/mtiFontTrackingCode.js';

            (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(mtTracking);
        })();
    `}</Script>
  )
}

export default FontTrackingScript
