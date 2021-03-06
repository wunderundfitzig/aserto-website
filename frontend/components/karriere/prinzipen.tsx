import { FunctionComponent } from 'react'
import Image from 'next/image'
import { categoryColors } from 'lib/colors'
import { breakpoint, minWidth } from 'lib/breakpoints'
import { imageLoader } from 'lib/image-loader'

import Statement from 'components/statement'
import { EndlessLine } from 'components/curves'

import image1 from 'public/images/karriere/karriere-image-2.jpg'
import image2 from 'public/images/karriere/karriere-image-3.jpg'

const Prinzipen: FunctionComponent = () => {
  return (
    <section className='prinzipen'>
      <div className='line line-1'>
        <EndlessLine color={categoryColors.karriere} rotate={35} />
      </div>
      <div className='line line-2'>
        <EndlessLine color={categoryColors.karriere} rotate={-30} />
      </div>
      <div className='line line-3'>
        <EndlessLine color={categoryColors.karriere} rotate={35} />
      </div>
      <h2>Unsere Prinizipien</h2>
      <div className='statement statement-1'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Offenheit und Wertschätzung</h3>,
            content: (
              <p>
                Von Geschäftsführung bis zu Praktikant*innen begegnen wir uns
                auf Augenhöhe, haben ein offenes Ohr füreinander, diskutieren
                über Ideen und finden gemeinsam Lösungen.
              </p>
            ),
          }}
        </Statement>
      </div>
      <div className='image image-1'>
        <Image loader={imageLoader} src={image1} layout='responsive' alt='' />
      </div>
      <div className='statement statement-2'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Fachliche und persönliche Weiterentwicklung</h3>,
            content: (
              <p>
                Wir entwickeln uns ständig weiter – unsere Kompetenzen, unsere
                Persönlichkeit, unser Urteilsvermögen. Weitergebildet haben wir
                uns z. B. in systemischer Beratung, in (agilem)
                Projektmanagement, automatisierter Textanalyse.
              </p>
            ),
          }}
        </Statement>
      </div>
      <div className='statement statement-3'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Dynamische Kundenprojekte</h3>,
            content: (
              <p>
                Wir denken uns schnell und tief in neue Themen ein und arbeiten
                flexibel und ausdauernd in dynamischen Umfeldern.
              </p>
            ),
          }}
        </Statement>
      </div>
      <div className='statement statement-4'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Work-Life-Balance</h3>,
            content: (
              <p>
                Nach heißen Projektphasen kommen auch wieder ruhigere Phasen mit
                Freiraum, in denen wir uns regenerieren.
              </p>
            ),
          }}
        </Statement>
      </div>
      <div className='image image-2'>
        <Image loader={imageLoader} src={image2} layout='responsive' alt='' />
      </div>
      <div className='statement statement-5'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Teamwork</h3>,
            content: (
              <p>
                In kleinen Projektteams arbeiten wir aufgeschlossen,
                eigenständig und verlässlich miteinander. Und das meist schon
                länger: Jeder von uns ist im Durchschnitt schon mehr als sechs
                Jahre bei aserto.
              </p>
            ),
          }}
        </Statement>
      </div>
      <style jsx>{`
        .prinzipen {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 5rem;
        }

        h2 {
          background-color: white;
          padding: 0.5em 1rem 1rem;
          margin: 0 -1rem;
          grid-column: span 2;
          max-width: 28rem;
        }

        .statement {
          grid-column: span 2;
          background-color: white;
          max-width: 28rem;
          padding: 1em;
          margin: 0 -1rem;
        }

        .image {
          grid-column: span 2;
          margin: 2em 0 3em;
        }

        .image-1 {
          position: static;
          grid-column: 2 / 2;
          width: calc(100% + 2em);
          margin-left: -2em;
          z-index: -2;
        }

        .line {
          pointer-events: none;
          position: absolute;
          width: 100px;
          height: 100px;
          z-index: -10;
        }

        .line-1 {
          transform: translateY(-30px);
        }

        .line-2 {
          transform: translateY(500px);
        }

        .line-3 {
          transform: translateY(550px);
          z-index: -1;
        }

        @media ${minWidth(breakpoint.s)} {
          .statement {
            margin-bottom: 2em;
          }

          .image-1 {
            width: 100%;
            margin-left: 0;
          }
        }

        @media ${minWidth(breakpoint.sm)} {
          .line-1 {
            transform: translateY(96px);
          }

          .line-2 {
            transform: translateY(780px);
          }

          .line-3 {
            display: none;
          }

          .statement-3 {
            margin-top: 4rem;
          }
        }

        @media ${minWidth(breakpoint.m)} {
          .prinzipen {
            margin-top: 10rem;

            grid-template-areas:
              'title       image-1'
              'statement-1 image-1'
              'statement-2 image-1'
              '.           statement-3'
              'image-2     statement-4'
              'image-2     statement-5';
            grid-gap: 0 3rem;
          }

          h2 {
            grid-area: title;
          }

          .image {
            margin: 0;
          }

          .image-1 {
            grid-area: image-1;
            width: 80%;
            justify-self: flex-end;
            margin-top: 6rem;
          }
          .image-2 {
            grid-area: image-2;
            width: calc(100% - 1em);
            align-self: flex-end;
            z-index: -2;
          }

          .line-1 {
            transform: translateY(200px);
          }

          .line-2 {
            transform: translateY(1100px);
            z-index: -1;
          }

          .statement {
            margin-bottom: 0;
          }

          .statement-1 {
            grid-area: statement-1;
          }
          .statement-2 {
            grid-area: statement-2;
          }
          .statement-3 {
            grid-area: statement-3;
          }
          .statement-4 {
            grid-area: statement-4;
          }
          .statement-5 {
            grid-area: statement-5;
          }
        }
        @media ${minWidth(breakpoint.l)} {
          .line-1 {
            transform: translateY(300px);
          }

          .line-2 {
            transform: translateY(1200px);
            z-index: -1;
          }
        }
        @media ${minWidth(breakpoint.xl)} {
          .line-1 {
            transform: translateY(350px);
          }

          .line-2 {
            transform: translateY(1200px);
            z-index: -1;
          }
          .image-1 {
            width: 300px;
            justify-self: flex-end;
          }
        }

        @media ${minWidth(breakpoint.xxl)} {
          .line-1 {
            transform: translateY(500px);
            z-index: -1;
          }

          .line-2 {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Prinzipen
