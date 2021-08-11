import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Statement from 'components/statement'

const Impressum: FunctionComponent = () => {
  return (
    <section className='impressum'>
      <h2>Impressum</h2>
      <Statement color={colors.grey}>
        {{
          title: <h3>Verantwortlich für den Inhalt</h3>,
          content: (
            <p>
              aserto GmbH & Co. KG
              <br />
              Kriegerstr. 44
              <br />
              30161 Hannover
              <br />
              Tel.: 0511-515678-0
              <a href='mailto:info@aserto.de'>info@aserto.de</a>
            </p>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: <h3>Handelsregister</h3>,
          content: (
            <>
              <p>
                aserto GmbH & Co. KG
                <br />
                Amtsgericht Hannover, HRA 26878
              </p>

              <p>
                aserto Beteiligungs-GmbH
                <br />
                Amtsgericht Hannover, HRB 60866
              </p>
              <p>
                Geschäftsführer: Prof. Dr. Lars Harden, Jan Blume, Marcel Drews
              </p>
            </>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{ title: <h3>Umsatzsteueridentifikationsnummer: DE 226703901</h3> }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: (
            <h3>Das Impressum gilt auch für folgende Social-Media-Profile</h3>
          ),

          content: (
            <ul>
              <li>
                <a
                  href='https://www.xing.com/profile/Lars_Harden
'
                >
                  https://www.xing.com/profile/Lars_Harden
                </a>
              </li>
              <li>
                <a
                  href='https://www.xing.com/profile/Annika_Wolf20
'
                >
                  https://www.xing.com/profile/Annika_Wolf20
                </a>
              </li>
              <li>
                <a
                  href='https://www.xing.com/profile/Mareike_Franz2
'
                >
                  https://www.xing.com/profile/Mareike_Franz2
                </a>
              </li>
              <li>
                <a href='https://www.xing.com/profile/Daniela_Charrier'>
                  https://www.xing.com/profile/Daniela_Charrier
                </a>
              </li>
            </ul>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: <h3>Rechtshinweise</h3>,
          content: (
            <>
              {' '}
              <p>
                Die enthaltenen Angaben und Informationen in diesem
                Internet-Angebot wurden von der aserto GmbH & Co. KG („aserto“)
                sorgfältig recherchiert und geprüft. Diese Informationen sind
                ein Service des Unternehmens. Für Richtigkeit, Vollständigkeit
                und Aktualität kann aserto jedoch keine Haftung übernehmen. Die
                Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des
                Besuchers.
              </p>
              <p>
                Alle Informationen dienen ausschließlich zur Information der
                Besucher des Onlineangebotes. Im Übrigen ist die Haftung auf
                Vorsatz und grobe Fahrlässigkeit beschränkt. Für Internetseiten
                Dritter, auf die aserto durch Hyperlinks verweist, tragen die
                jeweiligen Anbieter die Verantwortung. aserto ist für den Inhalt
                solcher Seiten Dritter nicht verantwortlich. Darüber hinaus hat
                aserto bei der erstmaligen Verknüpfung der externen Links die
                fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße
                bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
                ersichtlich. aserto hat keinerlei Einfluss auf die aktuelle und
                zukünftige Gestaltung, sowie auf die Inhalte der verknüpften
                Seiten. Das Setzen von externen Links bedeutet nicht, dass sich
                aserto die hinter dem Verweis oder Link liegenden Inhalte zu
                Eigen macht. Eine ständige Kontrolle der externen Links ist für
                aserto ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar.
                Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe
                Links unverzüglich gelöscht.
              </p>
              <p>
                Des Weiteren kann die Internetseite von aserto ohne das Wissen
                des Unternehmens von einer anderen Seite mittels Hyperlink
                verlinkt worden sein. aserto übernimmt keine Verantwortung für
                Darstellung, Inhalt oder irgendeine Verbindung zu aserto auf
                Internetseiten Dritter.
              </p>
              <p>
                Außerdem behält sich aserto das Recht vor, Änderungen oder
                Ergänzungen der bereitgestellten Informationen vorzunehmen.
                Inhalt und Struktur der Internetseiten von aserto unterliegen
                dem deutschen Urheber- und Leistungsschutzrecht. Jede vom
                deutschen Urheber- und Leistungsschutzrecht nicht zugelassene
                Verwertung bedarf der vorherigen schriftlichen Zustimmung von
                aserto oder des jeweiligen Rechteinhabers. Dies gilt
                insbesondere für Vervielfältigung, Bearbeitung, Übersetzung,
                Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in
                Datenbanken oder anderen elektronischen Medien und Systemen.
                Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet.
                Die unerlaubte Vervielfältigung oder Weitergabe einzelner
                Inhalte oder kompletter Seiten ist nicht gestattet und strafbar.
                Lediglich die Herstellung von Kopien und Downloads für den
                persönlichen, privaten und nicht kommerziellen Gebrauch ist
                erlaubt.
              </p>
              <p>
                Die Darstellung dieser Website in fremden Frames ist nur mit
                schriftlicher Erlaubnis von aserto zulässig.
              </p>
            </>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: (
            <h3>
              Fotografie:{' '}
              <a
                href='https://volkercrone.com/'
                target='_blank'
                rel='noreferrer'
              >
                Volker Crone
              </a>
            </h3>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: (
            <h3>
              Webdesign und Umsetzung:{' '}
              <a
                href='https://wunderundfitzig.de'
                target='_blank'
                rel='noreferrer'
              >
                wunder & fitzig
              </a>
            </h3>
          ),
        }}
      </Statement>
      <style jsx>{`
        h2 {
          margin-top: 4em;
        }

        h3 {
          hyphens: auto;
          line-height: 1.4em;
        }
      `}</style>
    </section>
  )
}

export default Impressum
