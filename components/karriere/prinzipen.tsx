import { FunctionComponent } from 'react'
import Image from 'next/image'
import { categoryColors } from 'lib/colors'
import Statement from 'components/statement'
import image1 from 'public/karriere-placeholder-image-2.jpg'
import image2 from 'public/karriere-placeholder-image-3.jpg'
import { breakpoint, minWidth } from 'lib/breakpoints'

const Prinzipen: FunctionComponent = () => {
  return (
    <section className='prinzipen'>
      <h2>Unsere Prinzipen</h2>
      <div className='statement statement-1'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <p>Offenheit und Wertschätzung</p>,
            content: (
              <p>
                gegenüber Kolleg*innen und Kund*innen prägen unseren Umgang. Von
                Geschäftsführung bis zu Praktikant*innen begegnen wir uns auf
                Augenhöhe, haben ein offenes Ohr füreinander, disktutieren über
                Ideen und finden gemeinsam Lösungen.
              </p>
            ),
          }}
        </Statement>
      </div>
      <div className='image image-1'>
        <Image src={image1} layout='responsive' alt='' />
      </div>
      <div className='statement statement-2'>
        <Statement color={categoryColors.karriere}>
          {{
            title: (
              <h3>
                Daneben steht die fachliche und persönliche Weiterentwicklung
              </h3>
            ),
            content: (
              <p>
                unserer Mitarbeiter*innen im Fokus. So haben z.B. einige unserer
                Kolleg*innen eine Fortbildung zum systemischen Berater oder
                Projektmanager absolviert. Damit dies alles möglich ist,
                unterstützen wir uns im Team gegenseitig.
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
                heißt bei uns, dass wir uns schnell und tief in neue Themen
                einarbeiten können, und das bei verschiedenen Timings. Neben
                heißen Projektphasen gibt es dann aber auch wieder ruhige
                Phasen.
              </p>
            ),
          }}
        </Statement>
      </div>
      <div className='statement statement-4'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Denn Work-Life-Balance</h3>,
            content: (
              <p>
                wird bei uns ernstgenommen und wir möchten, dass unsere
                Kolleg*innen genügend Zeit haben, um die Akkus wieder
                aufzuladen.
              </p>
            ),
          }}
        </Statement>
      </div>
      <div className='image image-2'>
        <Image src={image2} layout='responsive' alt='' />
      </div>
      <div className='statement statement-5'>
        <Statement color={categoryColors.karriere}>
          {{
            title: <h3>Denn TEAMWORK</h3>,
            content: (
              <p>
                wird bei aserto großgeschrieben. Das heiß auch, dass wir in
                kleinen Projektteams arbeiten, uns gegenseitig vertreten und
                feste Ansprechpartner*innen haben. Unsere geringe Fluktuation
                und eine durchschnittliche Betriebszugehörigkeit von X Jahren
                bestätigen das.
              </p>
            ),
          }}
        </Statement>
      </div>
      <style jsx>{`
        .prinzipen {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        h2 {
          background-color: white;
          padding: 3rem 1rem 1rem;
          margin: 0 -1rem;
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
          grid-column: 2 / 2;
          width: calc(100% + 2em);
          margin-left: -2em;
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

        @media ${minWidth(breakpoint.m)} {
          .prinzipen {
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
            padding-top: 6rem;
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
        @media ${minWidth(breakpoint.xl)} {
          .image-1 {
            width: 60%;
            justify-self: flex-end;
          }
        }
      `}</style>
    </section>
  )
}

export default Prinzipen
