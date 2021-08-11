import { FunctionComponent } from 'react'
import * as colors from 'lib/colors'
import Statement from 'components/statement'

const DatenschutzText: FunctionComponent = () => {
  return (
    <section className='datenschutz-text'>
      <Statement color={colors.grey}>
        {{
          title: <h3>Datenschutz hat für aserto einen hohen Stellenwert</h3>,
          content: (
            <>
              <p>
                Der Schutz Ihrer Daten ist aserto ein großes Anliegen.
                Personenbezogene Daten werden aus diesem Grund nur erhoben und
                genutzt, soweit es für die Datenübertragung bzw. die Nutzung des
                jeweiligen Online-Angebotes oder der inhaltlichen Ausgestaltung
                oder Abwicklung des jeweiligen mit aserto eingegangenen oder
                angebahnte Vertragsverhältnisses erforderlich ist.
              </p>
              <p>
                Nachfolgend hat aserto für Sie übersichtlich Informationen
                zusammengestellt, die Auskunft darüber geben, welche
                personenbezogenen Daten während Ihres Besuchs auf den
                Online-Angeboten und bei der Inanspruchnahme von Leistungen und
                Angeboten der aserto erhoben und wie diese danach verwendet
                werden. Hierbei orientiert sich aserto an den Pflichtangaben
                gem. Art 13 der Europäischen Datenschutzgrundverordnung
                (DS-GVO). Die Hinweise dienen ebenfalls dazu, Sie zu
                informieren, wie aserto Ihre personenbezogenen Daten vor
                Manipulation, Verlust, Zerstörung oder Missbraucht schützt.
              </p>
              <p>
                Sollten Sie darüber hinaus Fragen zum Datenschutz haben, wenden
                Sie sich gerne per E-Mail an datenschutz@aserto.de.
              </p>
            </>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: <h3>I. Name und Anschrift des Verantwortlichen</h3>,
          content: (
            <>
              <p>
                Der Verantwortliche ist:
                <br />
                aserto GmbH & Co. KG
                <br />
                Kriegerstraße 44
                <br />
                30161 Hannover
                <br />
                Telefon: +49 (511) 515678-0
                <br />
                E-Mail: datenschutz@aserto.de
              </p>
            </>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: <h3>II. Name und Anschrift des Datenschutzbeauftragten</h3>,
          content: (
            <p>
              Der Datenschutzbeauftragte des Verantwortlichen ist:
              <br />
              RA Prof. Dr. Tina Krügel,
              <br />
              LL. M. lexICT UG (haftungsbeschränkt)
              <br />
              Osterfeldstraße 49
              <br />
              30559 Hannover
              <br />
              E-Mail: datenschutz@aserto.de
            </p>
          ),
        }}
      </Statement>
      <Statement color={colors.grey}>
        {{
          title: <h3>III. Begriffsbestimmungen</h3>,
          content: (
            <>
              <p>
                Um Ihnen im Nachfolgenden das Lesen zu erleichtern, wird bei der
                Datenschutzerklärung von aserto auf die Begriffe aus Art. 4 der
                DS-GVO zurückgegriffen. Einzelne Begriffe werden an dieser
                Stelle kurz zum besseren Verständnis aufgeführt:
              </p>
              <h4>Personenbezogene Daten</h4>
              <p>
                Personenbezogene Daten sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person
                beziehen. Als identifizierbar wird eine natürliche Person
                angesehen, die direkt oder indirekt, insbesondere mittels
                Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer,
                zu Standortdaten, zu einer Online-Kennung oder zu einem oder
                mehreren besonderen Merkmalen identifiziert werden kann, die
                Ausdruck der physischen, physiologischen, genetischen,
                psychischen, wirtschaftlichen, kulturellen oder sozialen
                Identität dieser natürlichen Person sind.
              </p>
              <h4>Verarbeitung</h4>
              <p>
                Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
                Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im
                Zusammenhang mit personenbezogenen Daten wie das Erheben, das
                Erfassen, die Organisation, das Ordnen, die Speicherung, die
                Anpassung oder Veränderung, das Auslesen, das Abfragen, die
                Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder
                eine andere Form der Bereitstellung, den Abgleich oder die
                Verknüpfung, die Einschränkung, das Löschen oder die
                Vernichtung.
              </p>
              <h4>Verantwortlicher</h4>
              <p>
                Als Verantwortlicher gilt die natürliche oder juristische
                Person, Behörde, Einrichtung oder andere Stelle, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten entscheidet; sind die
                Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder
                das Recht der Mitgliedstaaten vorgegeben, so können der
                Verantwortliche beziehungsweise die bestimmten Kriterien seiner
                Benennung nach dem Unionsrecht oder dem Recht der
                Mitgliedstaaten vorgesehen werden.
              </p>
              <h4>Pseudonymisierung</h4>
              <p>
                Pseudonymisierung ist die Verarbeitung personenbezogener Daten
                in einer Weise, dass die personenbezogenen Daten ohne
                Hinzuziehung zusätzlicher Informationen nicht mehr einer
                spezifischen betroffenen Person zugeordnet werden können, sofern
                diese zusätzlichen Informationen gesondert aufbewahrt werden und
                technischen und organisatorischen Maßnahmen unterliegen, die
                gewährleisten, dass die personenbezogenen Daten nicht einer
                identifizierten oder identifizierbaren natürlichen Person
                zugewiesen werden.
              </p>
              <h4>Auftragsverarbeiter</h4>
              <p>
                Ein Auftragsverarbeiter ist eine natürliche oder juristische
                Person, Behörde, Einrichtung oder andere Stelle, die
                personenbezogene Daten im Auftrag des Verantwortlichen
                verarbeitet.
              </p>
              <h4>Empfänger</h4>
              <p>
                Empfänger ist eine natürliche oder juristische Person, Behörde,
                Einrichtung oder andere Stelle, denen personenbezogene Daten
                offengelegt werden, unabhängig davon, ob es sich bei ihr um
                einen Dritten handelt oder nicht.
              </p>
              <h4>Dritter</h4>
              <p>
                Dritter ist eine natürliche oder juristische Person, Behörde,
                Einrichtung oder andere Stelle, außer der betroffenen Person,
                dem Verantwortlichen, dem Auftragsverarbeiter und den Personen,
                die unter der unmittelbaren Verantwortung des Verantwortlichen
                oder des Auftragsverarbeiters befugt sind, die personenbezogenen
                Daten zu verarbeiten.
              </p>
              <h4>Einwilligung</h4>
              <p>
                Die Einwilligung der betroffenen Person ist jede freiwillig für
                den bestimmten Fall, in informierter Weise und
                unmissverständlich abgegebene Willensbekundung in Form einer
                Erklärung oder einer sonstigen eindeutigen bestätigenden
                Handlung, mit der die betroffene Person zu verstehen gibt, dass
                sie mit der Verarbeitung der sie betreffenden personenbezogenen
                Daten einverstanden ist.
              </p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3>IV. Verarbeitung bei der Nutzung der Webangebote</h3>,
          content: (
            <>
              <h4>
                Bereitstellung von Online-Angeboten und Erstellung von Logfiles
              </h4>
              <h5>1) Zweck der Datenverarbeitung</h5>
              <p>
                Die Erfassung der Daten zur Bereitstellung der
                Webseiten-Angebote und die Speicherung der Daten in Logfiles ist
                für den Betrieb der Internetseiten zwingend erforderlich. Die
                vorübergehende Speicherung der IP-Adresse durch das System ist
                notwendig, um eine Auslieferung der Internetseiten an Ihr
                jeweiliges Endgerät zu ermöglichen. Das Verfahren gewährleistet
                einen reibungslosen Verbindungsaufbau der Online-Angebote.
                Hierfür muss Ihre IP-Adresse für die Dauer der Sitzung
                gespeichert bleiben. Die Speicherung in Logfiles erfolgt, um die
                Funktionsfähigkeit der Website sicherzustellen. Für Sie soll
                eine komfortable Nutzung der Online-Angebote gewährleistet
                werden. Zudem dienen die Daten zur Optimierung der
                Online-Angebote und zur Sicherstellung der Sicherheit und
                Stabilität der informationstechnischen Systeme von aserto sowie
                zu weiteren administrativen Zwecken. In keinem Fall wird aserto
                die Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen,
                verwenden.
              </p>
              <h5>2) Rechtsgrundlage für die Datenverarbeitung</h5>
              <p>
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und
                der Logfiles ist das berechtigte Interesse von aserto gem. Art.
                6 Abs. 1 lit. f DS-GVO.
              </p>
              <h5>3) Beschreibung und Umfang der Datenverarbeitung</h5>
              <p>
                Beim Aufrufen der Online-Angebote von aserto werden durch den
                auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch
                Informationen an den Server der aserto-Online-Angebote gesendet.
                Diese Informationen werden temporär in einem sogenannten Logfile
                gespeichert. Folgende Informationen werden hierbei erfasst und
                bis zur automatisierten Löschung gespeichert:
              </p>
              <ul>
                <li> Datum und Uhrzeit des Zugriffs</li>
                <li>Webseite, von der aus der Zugriff erfolgt</li>
                <li>Ihre IP-Adresse</li>
                <li>
                  Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners
                </li>
                <li>Der Name Ihres Internet-Service-Providers (ISP)</li>
              </ul>
              <p>
                Eine Speicherung dieser Daten zusammen mit anderen
                personenbezogenen Daten findet nicht statt.
              </p>
              <h5>4) Dauer der Speicherung</h5>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle
                der Erfassung der Daten zur Bereitstellung der Online-Angebote
                ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Im
                Falle der Speicherung der Daten in Logfiles ist dies nach
                spätestens 90 Tagen der Fall. Eine darüberhinausgehende
                Speicherung ist möglich. In diesem Fall werden die IP-Adressen
                gelöscht, gekürzt oder verfremdet, sodass eine Zuordnung des
                aufrufenden Endgeräts nicht mehr möglich ist.
              </p>
              <h4> Einsatz von Cookies</h4>
              <h5>1) Zweck der Datenverarbeitung</h5>
              <p>
                Der Zweck der Verwendung technisch notwendiger Cookies ist, die
                Nutzung von aserto-Online-Angeboten für Sie zu vereinfachen und
                z.B. bei Befragungen die komplette technische Funktionalität und
                methodische Logik anwendbar zu machen. Einige Funktionen der
                Internetseiten können Ihnen ohne den Einsatz von Cookies nicht
                angeboten werden. Für Befragungsangebote von aserto kann es
                erforderlich sein, dass der aufrufende Browser auch nach einem
                Seitenwechsel identifiziert werden kann. Die durch technisch
                notwendige Cookies erhobenen Nutzerdaten werden nicht zur
                Erstellung von Nutzerprofilen verwendet.
              </p>
              <h5>2) Rechtsgrundlage für die Datenverarbeitung</h5>
              <p>
                Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                unter der Verwendung von Cookies sind für die genannten Zwecke
                zur Wahrung der Interessen von aserto sowie von Dritten nach
                Art. 6 Abs. 1 lit. f DS-GVO erforderlich.
              </p>
              <h5>3) Beschreibung und Umfang der Datenverarbeitung</h5>
              <p>
                aserto setzt bei den eigenen Online-Angeboten Cookies ein.
                Hierbei handelt es sich um kleine Dateien, die Ihr Browser
                automatisch erstellt und die auf Ihrem Endgerät gespeichert
                werden, wenn Sie die Internetseiten besuchen. Cookies richten
                auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren,
                Trojaner oder sonstige Schadsoftware. In dem Cookie werden
                Informationen abgelegt, die sich jeweils im Zusammenhang mit dem
                spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch
                nicht, dass aserto dadurch unmittelbar Kenntnis von Ihrer
                Identität erhalten muss. Der Einsatz von Cookies dient
                einerseits dazu, die Nutzung der aserto-Angebote für Sie
                angenehmer zu gestalten. Hierfür setzt aserto sogenannte
                Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten
                der aserto-Online-Angebote bereits besucht haben. Diese werden
                nach Verlassen der aserto-Internetseiten automatisch gelöscht.
                Anderseits setzt aserto ebenfalls zur Optimierung der
                Benutzerfreundlichkeit temporäre Cookies ein, die für einen
                bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert
                werden. Befragungsangebote von aserto können es erfordern, dass
                der aufrufende Browser auch nach einem Seitenwechsel
                identifiziert werden kann. Besuchen Sie die Internetseiten
                erneut, um die Dienste von aserto in Anspruch zu nehmen, wird
                automatisch erkannt, dass Sie bereits auf den Online-Angeboten
                von aserto waren und welche Eingaben und Einstellungen sie
                getätigt haben, um diese nicht noch einmal eingeben zu müssen.
                In den Cookies werden dabei folgende Daten, z.B. für
                Befragungsangebote gespeichert und übermittelt:
              </p>
              <ul>
                <li>Übernahme von Spracheinstellungen</li>
                <li>Prüfen des Aufrufs einer Befragung</li>
                <li>Wiederaufnahme einer Befragung</li>
              </ul>
              4) Dauer der Speicherung, Widerspruchs- und
              Beseitigungsmöglichkeiten
              <p>
                Cookies werden auf Ihrem Endgerät gespeichert und von diesem an
                die aserto-Online-Angebote übermittelt. Die Möglichkeit Cookies
                abzulehnen, zu deaktivieren oder einzuschränken, können Sie über
                die Einstellungen Ihres Browsers erklären. Daher haben Sie als
                Nutzer auch die volle Kontrolle über die Verwendung von Cookies.
                Bereits gespeicherte Cookies können jederzeit gelöscht werden.
                Dies kann auch automatisiert erfolgen. Im Speziellen bei
                Befragungsangeboten werden die Cookies spätestens nach dem
                Beenden der jeweiligen Studie gelöscht. Sie können Ihren Browser
                auch so konfigurieren, dass keine Cookies auf Ihrem Endgerät
                gespeichert werden oder stets ein Hinweis erscheint, bevor ein
                neuer Cookie angelegt wird. Die vollständige Deaktivierung von
                Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen
                der aserto-Online-Angebote nutzen können. Über die folgenden
                Links können Sie sich über diese Möglichkeiten für die am
                meisten verwendeten Browser informieren:
              </p>
              <ul>
                <li>
                  Microsoft Internet Explorer:
                  https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies
                </li>
                <li>
                  Microsoft Edge:
                  https://support.microsoft.com/de-de/help/4027947/microsoft-edge-delete-cookies
                </li>
                <li>
                  Mozilla Firefox:
                  https://support.mozilla.org/de/kb/Cookies-blockieren
                </li>
                <li>
                  Google Chrome:
                  https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=de
                </li>
                <li>
                  Safari:
                  https://support.apple.com/de-de/guide/safari/sfri11471/mac
                </li>
              </ul>
              <h4>Links zu anderen Webseiten</h4>
              <p>
                Die Online-Angebote von aserto enthalten Links zu anderen
                Webseiten. aserto hat keinen Einfluss darauf, dass deren
                Betreiber die Datenschutzbestimmungen im Sinne der DS-GVO
                einhalten. Hinsichtlich der dort geltenden Datenschutzregelungen
                zur Erfassung und Weitergabe von Daten, bittet aserto Sie, die
                auf diesen Webseiten hinterlegte Datenschutzerklärung zu lesen.
                aserto kann für von diesen Websites ausgehende Maßnahmen oder
                für deren Inhalt nicht haftbar gemacht werden. Sie finden auf
                den Online-Angeboten von aserto auch Links auf Angebote von
                aserto in Sozialen Netzwerken (siehe hierzu Onlineangebote auf
                Plattformen von Sozialen Netzwerken und Integration von Sozialen
                Netzwerken). Bitte beachten Sie die Datenschutzerklärungen des
                jeweiligen Plattformanbieters. aserto hat keinerlei Einfluss auf
                die Verarbeitung und Nutzung Ihrer Daten seitens des
                Plattformanbieters und ist lediglich verantwortlich hinsichtlich
                für von aserto auf diesen Sozialen Netzwerken eingestellten
                Inhalte. Um über diese Sozialen Netzwerke zu kommunizieren,
                müssen Sie in dem entsprechenden Netzwerk angemeldet sein. Bitte
                beachten Sie, dass die Plattformbetreiber eventuell bereits mit
                Betätigen des Links und während der Verbindung zu Angeboten von
                aserto in Sozialen Netzwerken personenbezogene Daten (z.B.
                IP-Adresse) von Ihnen erheben.
              </p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3></h3>,
          content: (
            <>
              <p></p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3></h3>,
          content: (
            <>
              <p></p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3></h3>,
          content: (
            <>
              <p></p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3></h3>,
          content: (
            <>
              <p></p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3></h3>,
          content: (
            <>
              <p></p>
            </>
          ),
        }}
      </Statement>

      <style jsx>{`
        section {
          margin-top: 6rem;
          margin-bottom: 6rem;
          max-width: 40em;
        }
      `}</style>
    </section>
  )
}

export default DatenschutzText
