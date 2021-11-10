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
              <h5>
                4) Dauer der Speicherung, Widerspruchs- und
                Beseitigungsmöglichkeiten
              </h5>
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
              <h4>Onlineangebote auf Plattformen von Sozialen Netzwerken</h4>
              <h5>1) Zweck der Datenverarbeitung</h5>
              <p>
                aserto nutzt die unterschiedlichen Plattformen der Sozialen
                Netzwerke und ihrer Dienste, um auf diesem Weg die eigenen
                Dienstleistungen bekannter zu machen, Informationen
                bereitzuhalten und mit Ihnen in den Kontakt treten zu können.
                Auf die Verarbeitung personenbezogener Daten durch den
                jeweiligen Plattformbetreiber hat aserto keinen Einfluss. Als
                Betreiber der Facebook- und Instagram-Unternehmensseiten hat die
                aserto kein Interesse an der Erhebung und weiteren Verarbeitung
                von individuellen personenbezogenen Daten zu Analyse- oder
                Marketingzwecken.
              </p>
              <h4>2) Rechtsgrundlage für die Datenverarbeitung</h4>
              <p>
                Die Verarbeitung Ihrer personenbezogenen Daten beim Besuch eines
                aserto-Social-Media-Angebotes erfolgt auf Grundlage unseres
                berechtigten Interessen an einer vielfältigen Außendarstellung
                unseres Unternehmens und der Nutzung einer effektiven
                Informationsmöglichkeit sowie der Kommunikation mit Ihnen gem.
                Art. 6 Abs. 1 lit. f DS-GVO. Zwischen den Betreiber der
                Unternehmensseiten besteht eine gemeinsame Verantwortlichkeit
                nach Artikel 26 DS-GVO. Wir greifen für die angebotenen
                Informationsmöglichkeiten auf die technische Plattform und die
                Dienste der Facebook Ireland Limited, 4 Grand-Canal Square Grand
                Canal Harbour, Dublin 2, Ireland (Facebook) zurück. Gemeinsam
                verarbeiten wir die personenbezogenen Daten, die wir im Rahmen
                der Nutzung unserer Facebook-Seite (auch Facebook Fanpage)
                erhalten. Mit Facebook ist diese wie folgt
                geregelt:https://www.facebook.com/legal/terms/page_controller_addendum.
              </p>
              <h4>3) Beschreibung und Umfang der Datenverarbeitung</h4>
              <p>
                aserto bietet auf unterschiedlichen Plattformen von Sozialen
                Netzwerken Online-Angebote an. In der Regel werden beim Besuch
                der Sozialen Netzwerke-Angebote vom Plattformbetreiber Cookies
                in Ihrem Browser gespeichert, in denen zu Marktforschungs- und
                Werbezwecken Ihr Nutzungsverhalten bzw. Ihre Interessen
                gespeichert werden. Die so – meist geräteübergreifend –
                gewonnenen Nutzungsprofile verwenden die Plattformbetreiber, um
                Ihnen personalisierte Werbung anzuzeigen. Von der
                Datenverarbeitung können auch Personen betroffen sein, die bei
                dem jeweiligen Sozialen Netzwerk nicht als Nutzer registriert
                sind. Unter Umständen werden Ihre Daten außerhalb des Raumes der
                Europäischen Union verarbeitet, was die Durchsetzung Ihrer
                Rechte erschweren kann.
              </p>
              <h6>Statistische Daten:</h6>
              <p>
                Über sogenannte „Insights“, „Analytics“ oder unter einer anderen
                Benennung, je nach Sozialen Netzwerke, sind statistische Daten
                unterschiedlicher Kategorien für aserto als Betreiber der
                Unternehmensseiten abrufbar. Diese Statistiken werden durch die
                Anbieter der Sozialen Netzwerke erzeugt und bereitgestellt. Auf
                die Erzeugung und Darstellung hat aserto keinen Einfluss und
                kann diese Funktion weder abstellen noch die Erzeugung und
                Verarbeitung der Daten verhindern. Dem Betreiber der
                Unternehmensseiten werden maximal nachfolgende Daten für einen
                wählbaren Zeitraum von den Anbietern der Sozialen Netzwerke
                bereitgestellt, welche je nach Sozialen Netzwerke in Benennung,
                Verfügbarkeit und Aufarbeitung der Daten variieren können:
                Gesamtanzahl von Seitenaufrufen, „Gefällt mir“-Angaben,
                Seitenaktivitäten, Beitragsinteraktionen, Reichweite,
                Videoansichten, Beitragsreichweite, Kommentaren, geteilten
                Inhalten, Antworten, Herkunft bezogen auf Land und Stadt,
                Sprache, Aufrufe und Klicks im Shop, Klicks auf Routenplaner und
                Telefonnummern sowie Anteile Männer und Frauen.
              </p>
              <h4>4) Widerspruchs- und Beseitigungsmöglichkeiten</h4>
              <p>
                Detaillierte Informationen über die Datenverarbeitung im
                Zusammenhang mit der Nutzung der aserto-Sozialen
                Netzwerke-Angebote, Wider-spruchsmöglichkeiten (Opt-Out) und die
                Geltendmachung von Auskunftsrechten erhalten Sie über die
                Datenschutzerklärung des entsprechenden Plattformbetreibers.
              </p>
              <ul>
                <li>
                  <h6>XING</h6>
                  <p>
                    Anbieter: XING AG, Dammtorstraße 29-32, 20354 Hamburg,
                    Deutschland) Datenschutzerklärung:
                    https://privacy.xing.com/de/datenschutzerklaerung
                    Widerspruchsmöglichkeit:
                    https://privacy.xing.com/de/datenschutzerklaerung
                    <li>
                      <h6>Facebook</h6>
                      <p>
                        Anbieter: Facebook Ireland Ltd., 4 Grand Canal Square,
                        Grand Canal Harbour, Dublin 2, Irland
                        Datenschutzerklärung:
                        https://www.facebook.com/about/privacy/
                        Widerspruchsmöglichkeit:
                        https://www.facebook.com/settings?tab=ads Informationen
                        zu Seiten-Insights-Daten:
                        https://www.facebook.com/legal/terms/information_about_page_insights_data
                      </p>
                    </li>
                    <li>
                      <h6>LinkedIn</h6>
                      <p>
                        Anbieter: LinkedIn Ireland Unlimited Company Wilton
                        Place, Dub-lin 2, Irland Datenschutzerklärung:
                        https://www.linkedin.com/legal/privacy-policy
                        Widerspruchsmöglichkeit:
                        https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                      </p>
                    </li>
                    <li>
                      <h6>Instagram</h6>
                      <p>
                        Anbieter: Instagram Inc., 1601 Willow Road, Menlo Park,
                        CA, 94025, USA Datenschutzerklärung:
                        http://instagram.com/about/legal/privacy
                        Widerspruchsmöglichkeit:
                        http://instagram.com/about/legal/privacy
                      </p>
                    </li>
                  </p>
                </li>
              </ul>
              <h4>Verwendung von Video-Plugins</h4>
              <h3>1) Zweck der Datenverarbeitung</h3>
              <p>
                aserto verwendet auf seinen Online-Angeboten Videos, um auf
                diesem Weg eigene Dienstleistungen bekannter zu machen, sich
                selbst vorzustellen oder für Sie die Benutzerfreundlichkeit und
                Verständlichkeit von Sachverhalten zu optimieren. Das
                Video-Plugin ist auf den Online-Angeboten von aserto im
                „erweiterten Datenschutzmodus“ eingebettet. D.h. dort wo es
                technisch möglich ist, wird erst zu dem Zeitpunkt, in dem Sie
                ein entsprechendes Video auf den aserto-Online-Angeboten
                anklicken, sowohl eine Verbindung zu YouTube, als auch zu den
                DoubleClick-Servern von Google aufgebaut.
              </p>
              <h5>2) Rechtsgrundlage für die Datenverarbeitung</h5>
              <p>
                Die Rechtsgrundlage der Verarbeitung und Nutzung der Dienste zur
                Darstellung und Wiedergabe aus einem berechtigten Interesse von
                aserto ist Art. 6 Abs. 1 lit. f DS-GVO. Sofern Sie selber die
                Möglichkeit haben durch z.B. technische
                Einwilligungsmöglichkeiten auf unseren Online-Angeboten (Opt-In)
                den Dienst zu aktvieren, ist die Rechtsgrundlage der
                Verarbeitung und Nutzung der Dienste zur Darstellung und
                Wiedergabe eine Einwilligung nach Art. 6 Abs. 1 lit. a DS-GVO.
              </p>
              <h5>3) Beschreibung und Umfang der Datenverarbeitung</h5>
              <p>
                aserto-Online-Angebote verwenden zur Einbindung von Videos den
                Anbieter YouTube, vertreten durch Google Ireland Ltd., Gordon
                House, Barrow Street, Dublin 4, Irland (Google). Dieses Plugin
                wird auf den aserto-Online-Angeboten im „erweiterten
                Datenschutzmodus“ eingebettet. Erst zu dem Zeitpunkt, in dem Sie
                ein entsprechendes Video auf den Online-Angeboten von aserto
                anklicken, wird sowohl eine Verbindung zu YouTube, als auch zu
                den DoubleClick-Servern von Google aufgebaut. YouTube erhält
                dadurch die Information, dass Ihr Browser die entsprechende
                Seite der aserto-Online-Angebote aufgerufen hat, auch wenn Sie
                kein YouTube-Konto besitzen oder gerade nicht bei YouTube
                eingeloggt sind. Diese Information (einschließlich Ihrer
                IP-Adresse) wird von Ihrem Browser direkt an einen Server von
                YouTube in den USA übermittelt und dort gespeichert. Sind Sie
                bei YouTube eingeloggt, kann YouTube den Besuch der
                aserto-Online-Angebote Ihrem YouTube-Konto direkt zuordnen.
              </p>
              <h5>4) Widerspruchs- und Beseitigungsmöglichkeiten</h5>
              <p>
                Wenn Sie nicht möchten, dass YouTube die über die Internetseiten
                von aserto gesammelten Daten Ihrem YouTube-Konto zuordnet,
                müssen Sie sich vor Ihrem Besuch der aserto-Online-Angebote bei
                YouTube ausloggen. Zweck und Umfang der Datenerhebung und die
                weitere Verarbeitung und Nutzung der Daten durch YouTube sowie
                Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum
                Schutz Ihrer Privatsphäre entnehmen Sie bitte der
                Datenschutzerklärung des Anbieter:
              </p>
              <ul>
                <li>
                  <h6>YouTube/Google</h6>
                  <p>
                    Anbieter: Google Ireland Limited, Gordon House, Barrow
                    Street, Dublin 4, Irland Datenschutzerklärung:
                    https://policies.google.com/privacy Widerspruchsmöglichkeit:
                    https://adssettings.google.com/authenticated
                  </p>
                </li>
              </ul>
              <h4>Verwendung von Karten-Plugins</h4>
              <h5>1) Zweck der Datenverarbeitung</h5>
              <p>
                aserto verwendet auf seinen Online-Angeboten Kartenmaterial von
                Google Maps, um geographische Informationen visuell darzustellen
                und somit den Nutzen und Informationswert für den Nutzer der
                Online-Angebote zu erhöhen. Das Karten-Plugin ist i.d.R. auf
                unseren Online-Angeboten datenschutzfreundlich eingebunden, so
                dass erst nach einer Aktivierung die Darstellung erfolgt.
              </p>
              <h5>2) Rechtsgrundlage für die Datenverarbeitung</h5>
              <p>
                Die Rechtsgrundlage der Verarbeitung und Nutzung der Dienste zur
                Darstellung von Kartendiensten ist Art. 6 Abs. 1 lit. f DS-GVO.
                Zwischen den Betreiber der Unternehmensseiten besteht eine
                gemeinsame Verantwortlichkeit nach Artikel 26 DS-GVO. aserto
                greift für die angebotenen Informationsmöglichkeiten auf die
                technische Plattform und die Dienste von Google Ireland Ltd.,
                Gordon House, Barrow Street, Dublin 4, Irland (Google) zu.
                Google benötigt für die korrekte Auslieferung der
                Kartenausschnitte die IP-Adresse. Die vertragliche Grundlage für
                die gemeinsame Verantwortung nach Artikel 26 DS-GVO kann unter
                https://privacy.google.com/intl/de/businesses/mapscontrollerterms/
                abgerufen werden. Sofern Sie selber die Möglichkeit haben, z.B.
                technische Einwilligung auf aserto-Online-Angeboten (Opt-In),
                den Dienst zu aktvieren, ist die Rechtsgrundlage der
                Verarbeitung und Nutzung der Dienste zur Darstellung und
                Wiedergabe eine Einwilligung nach Art. 6 Abs. 1 lit. a DS-GVO.
              </p>
              <h5>3) Beschreibung und Umfang der Datenverarbeitung</h5>
              <p>
                aserto-Online-Angebote verwenden zur Darstellung von
                Kartenmaterial Dienste der Google Maps API. Dieses Plugin ist
                auf den Online-Angeboten von aserto im „erweiterten
                Datenschutzmodus“ eingebettet. Bei der Nutzung von Google Maps
                werden von Google auch Daten über Ihre Nutzung der
                Kartenfunktionen erhoben, verarbeitet und genutzt. Google erhält
                dadurch die Information, dass Ihr Browser die entsprechende
                Seite der aserto-Online-Angebote aufgerufen hat, auch wenn Sie
                kein Google-Konto besitzen oder gerade nicht bei Google
                eingeloggt sind. Diese Information (einschließlich Ihrer
                IP-Adresse) wird von Ihrem Browser direkt an einen Server von
                Google in den USA übermittelt und dort gespeichert. Sind Sie bei
                Google eingeloggt, kann Google den Besuch der
                aserto-Online-Angebote Ihrem Google-Konto direkt zuordnen.
              </p>
              <h5>4) Widerspruchs- und Beseitigungsmöglichkeiten</h5>
              <p>
                Wenn Sie nicht möchten, dass Google die über die Internetseiten
                von aserto gesammelten Daten Ihrem Google-Konto zuordnet, müssen
                Sie sich vor Ihrem Besuch der aserto-Online-Angebote bei Google
                ausloggen. Zweck und Umfang der Datenerhebung und die weitere
                Verarbeitung und Nutzung der Daten durch Google sowie Ihre
                diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz
                Ihrer Privatsphäre entnehmen Sie bitte der Datenschutzerklärung
                des Anbieters:
              </p>
              <ul>
                <li>
                  <h6>Google</h6>
                  <p>
                    Anbieter: Google Ireland Limited, Gordon House, Barrow
                    Street, Dublin 4, Irland Datenschutzerklärung:
                    https://policies.google.com/privacy Widerspruchsmöglichkeit:
                    https://adssettings.google.com/authenticated
                  </p>
                </li>
              </ul>
              <h4>Newsletter-Angebote</h4>
              <h5>1) Zweck der Datenverarbeitung</h5>
              <p>
                Die Erhebung Ihrer E-Mail-Adresse dient dazu, das
                Newsletter-Angebot zuzustellen. Die optionalen Daten dienen der
                Personalisierung des Newsletters. Die Erhebung sonstiger
                personenbezogener Daten im Rahmen des Newsletter-Angebots dient
                dazu, einen Missbrauch der Dienste oder der verwendeten
                E-Mail-Adresse zu verhindern.
              </p>
              <h5>2) Rechtsgrundlage für die Datenverarbeitung</h5>
              <p>
                Bei der Verarbeitung der personenbezogenen Daten zum Zweck der
                Erfüllung eines Vertrages dessen Vertragspartei die betroffene
                Person ist, dient Art. 6 Abs. 1 lit. b DS-GVO als
                Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die
                zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
                Die Rechtsgrundlage der Verarbeitung der Daten nach Ihrer
                Anmeldung zum Newsletter ist das Vorliegen einer Einwilligung
                nach Art. 6 Abs. 1 lit. a DS-GVO.
              </p>
              <h5>3) Beschreibung und Umfang der Datenverarbeitung</h5>
              <p>
                Im Rahmen einzelner Projekte kann ein Newsletter-Angebot für
                eine durch den Auftraggeber bestimmte Zielgruppe enthalten sein.
                In der Regel richtet sich dieses Angebot an die Mitarbeitenden,
                Partner, Dienstleister oder Kunden des Auftraggebers. Sofern Sie
                ein solches Angebot nutzen, gehören Sie mindestens einer der
                Gruppen an. Dabei werden bei der Anmeldung zum Newsletter
                folgende Daten an aserto übermittelt:
              </p>
              <ul>
                <li>E-Mail-Adresse</li>
                <li>Anrede (optional)</li>
                <li>Vorname (optional)</li>
                <li>Nachname (optional)</li>
              </ul>
              <p>
                Sofern Sie sich eigenverantwortlich anmelden können, werden bei
                der Eingabe in die Anmeldemaske darüber hinaus noch folgende
                Daten bei der Anmeldung erhoben:
              </p>
              <ul>
                <li>IP-Adresse des aufrufenden Rechners</li>
                <li>Datum und Uhrzeit der Registrierung</li>
              </ul>
              <p>
                Außerdem speichert aserto bei der Anmeldung zum Newsletter die
                vom Internet-Service-Provider (ISP) vergebene IP-Adresse Ihres
                zum Zeitpunkt der Anmeldung verwendeten Endgerätes sowie das
                Datum und die Uhrzeit der Anmeldung. Die Erhebung dieser Daten
                ist erforderlich, um den (möglichen) Missbrauch Ihrer
                E-Mail-Adresse zu einem späteren Zeitpunkt nachvollziehen zu
                können und dient deshalb der rechtlichen Absicherung. Sofern Sie
                die Möglichkeit einer eigeninitiierten Anmeldung genutzt haben,
                wird für die Verarbeitung der Daten im Rahmen des
                Anmeldevorgangs Ihre Einwilligung eingeholt und auf diese
                Datenschutzerklärung verwiesen.
              </p>
              <h5>
                4) Dauer der Speicherung, Widerspruchs- und
                Beseitigungsmöglichkeiten
              </h5>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Ihre
                E-Mail-Adresse wird demnach solange gespeichert, wie das
                Abonnement des Newsletters aktiv ist. Das Abonnement des
                jeweiligen Newsletter-Angebotes können Sie jederzeit kündigen.
                Zu diesem Zweck finden Sie innerhalb des Newsletters ein
                entsprechender Link oder die Kontaktinformation Ihres internen
                Ansprechpartners. Hierdurch wird Ihnen ebenfalls ein Widerruf
                der Einwilligung der Speicherung der während des Anmeldevorgangs
                erhobenen personenbezogenen Daten mit Wirkung für die Zukunft
                ermöglicht.
              </p>
              <h4>Verarbeitung bei der Kontaktaufnahme</h4>
              <h5>1) Zweck der Datenverarbeitung</h5>
              <p>
                Sofern Sie sich z.B. per E-Mail an aserto wenden, werden Ihre
                personenbezogenen Daten zum Zweck der Bearbeitung Ihrer Anfrage
                bzw. Beschwerde erhoben, verarbeitet und genutzt.
              </p>
              <h5>2) Rechtsgrundlage für die Datenverarbeitung</h5>
              <p>
                Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen
                Ihrer Einwilligung Art. 6 Abs. 1 lit. a DS-GVO. Rechtsgrundlage
                für die Verarbeitung der Daten, die im Zuge einer elektronischen
                Übersendung übermittelt werden, ist Art. 6 Abs. 1 lit. f DSG-VO.
                Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab,
                so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6
                Abs. 1 lit. b DS-GVO. Rechtsgrundlage für die Verarbeitung zur
                Erfüllung einer rechtlichen Verpflichtung, der aserto
                unterliegt, ist Art. 6 Abs. 1 lit. b DS-GVO. aserto verarbeitet
                die Daten für die Zwecke der Prüfung eines
                Beschäftigungsverhältnisses gemäß Art. 88 Abs. 1 DS-GVO i. V. m.
                § 26 BDSG-Neu, die Sie im Rahmen einer Bewerbung angeben.
              </p>
              <h5>3) Beschreibung und Umfang der Datenverarbeitung</h5>
              <p>
                Eine Kontaktaufnahme mit aserto ist über die bereitgestellten
                E-Mail-Adressen möglich. Ihre mit der E-Mail übermittelten
                personenbezogenen Daten werden gespeichert. Es erfolgt in diesem
                Zusammenhang keine Weitergabe der Daten an Dritte. Die Daten
                werden für die Verarbeitung der Konversation verwendet. Die
                elektronische Kommunikation ermöglicht Ihnen eine schnelle
                Kontaktaufnahme mit aserto. Darüber hinaus verarbeitet aserto
                die Daten, die Sie im Rahmen einer Bewerbung angeben. Dazu
                gehören u.a. Ihr Name, Vorname, Anrede, Kontaktdetails (z.B.
                Adresse, Telefon- und Mobilnummern, E-Mail Adressen), Ihre
                Nachricht und die personenbezogenen Daten, die sich aus Ihren
                Bewerbungsunterlagen ergeben. Sofern kein
                Beschäftigungsverhältnis zustande kommt, werden die Unterlagen
                unverzüglich nach der Rückmeldung durch aserto gelöscht.
              </p>
              <h5>
                4) Dauer der Speicherung, Widerspruchs- und
                Beseitigungsmöglichkeiten
              </h5>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. aserto
                löscht Ihre Anfragen, sofern diese nicht mehr erforderlich sind
                und keine gesetzlichen Archivierungspflichten gelten. Sie haben
                jederzeit die Möglichkeit, Ihre Einwilligung zur Verarbeitung
                der personenbezogenen Daten mit Wirkung für die Zukunft zu
                widerrufen. Sofern Sie via E-Mail Kontakt mit aserto aufgenommen
                haben, können Sie ebenfalls jederzeit der Speicherung Ihrer
                personenbezogenen Daten widersprechen. In einem solchen Fall
                kann die Konversation nicht fortgeführt werden.
              </p>
              <h4>Marktforschungsstudien/Befragungen</h4>
              <h5>1) Zweck der Datenverarbeitung</h5>
              <p>
                Im Rahmen des eigenen Portfolios führt aserto u.a.
                Marktforschungsstudien (z.B. Online, Gruppen- und
                Einzelinterviews, -workshops, -diskussionen) durch. Die
                Ergebnisse dieser Befragungen werden ausschließlich in
                anonymisierter Form dargestellt. Für Sie bedeutet dieses, dass
                niemand aus den Ergebnissen erkennen kann, von welcher Person
                die Angaben gemacht worden sind. Das gilt auch bei einer
                Wiederholungs- oder Folgebefragung, bei der es wichtig ist, dass
                nach einer bestimmten Zeit noch einmal eine Befragung mit
                derselben Person durchgeführt und die statistische Auswertung so
                vorgenommen werden kann, dass die Angaben aus mehreren
                Befragungen durch ein künstlich vergebenes
                Identifikationsmerkmal miteinander verknüpft werden. Auch bei
                Wiederholungs- oder Folgebefragungen kann nicht aus den
                Ergebnissen auf die Angaben Ihrer Person geschlossen werden.
                Falls Sie noch nicht 16 Jahre alt sind, zeigen Sie diese Seite
                auch Ihren Eltern mit der Bitte, sie billigend zur Kenntnis zu
                nehmen. Darüber hinaus kann es sein, dass aserto Ihnen im Rahmen
                von ausge-wählten Befragungen anbietet, an Gewinnspielen oder an
                weiteren Marktforschungsvorhaben teilzunehmen. Im Falle Ihrer
                Einwilligung, verarbeitet aserto zu diesem Zweck Ihre
                personenbezogene Daten.
              </p>
              <h5>2) Beschreibung und Umfang der Datenverarbeitung</h5>
              <p>
                Im Rahmen von Marktforschungsstudien kann es sein, dass Sie sich
                zu Gewinnspielen oder zur Teilnahme an weiteren
                Marktforschungsvorhaben anmelden können. In diesem Fall erhebt
                aserto Ihre personenbezogene Daten. Dieses sind im Regelfall bei
                Gewinnspielen:
              </p>
              <ul>
                <li>E-Mail-Adresse</li>
                <li>Anrede (optional)</li>
                <li>Vorname (optional)</li>
                <li>Nachname (optional)</li>
              </ul>
              <p>
                Sobald Sie als Gewinner gemäß der jeweiligen
                Teilnahmebedingungen gezogen worden sind, benötigen wir zur
                weiteren Kontaktaufnahme ergänzende Informationen:
              </p>
              <ul>
                <li>Adresse</li>
              </ul>
              <p>
                Während des jeweiligen Anmeldevorgangs werden darüber hinaus
                noch erhoben:
              </p>
              <ul>
                <li>IP-Adresse des aufrufenden Rechners</li>
                <li>Datum und Uhrzeit der Registrierung</li>
              </ul>
              <p>
                Bei der Anmeldung zur Teilnahme an weiteren
                Marktforschungsvorhaben werden im Regelfall erfragt:
              </p>
              <ul>
                <li>E-Mail-Adresse</li>
                <li>Anrede (optional)</li>
                <li>Vorname (optional)</li>
                <li>Nachname (optional)</li>
                <li>Geburtsdatum (optional)</li>
                <li>Adresse (optional)</li>
              </ul>
              <p>
                Während des jeweiligen Anmeldevorgangs werden darüber hinaus
                noch erhoben:
              </p>
              <ul>
                <li>IP-Adresse des aufrufenden Rechners</li>
                <li>Datum und Uhrzeit der Registrierung</li>
              </ul>
              <p>
                Außerdem speichert aserto bei der jeweiligen Anmeldung die vom
                Internet-Service-Provider (ISP) vergebene IP-Adresse Ihres zum
                Zeitpunkt der Anmeldung verwendeten Endgerätes sowie das Datum
                und die Uhrzeit der Anmeldung. Die Erhebung dieser Daten ist
                erforderlich, um den (möglichen) Missbrauch Ihrer E-Mail-Adresse
                zu einem späteren Zeitpunkt nachvollziehen zu können und dient
                deshalb der rechtlichen Absicherung. Im Rahmen des
                Anmeldevorgangs wird Ihre Einwilligung eingeholt und auf diese
                Datenschutzerklärung verwiesen. Es erfolgt in diesem
                Zusammenhang keine Weitergabe der Daten an Dritte. Die Daten
                werden ausschließlich für den von Ihnen eingewilligten
                Verwendungszweck verwendet. aserto ist dazu verpflichtet, Ihre
                personenbezogenen Daten getrennt von Ihren anderen Angaben im
                Fragebogen zu speichern. Eine Verknüpfung Ihrer Angaben im
                Fragebogen mit Angaben zu Ihrer Person findet nicht statt.
              </p>
              <h5>3) Rechtsgrundlage für die Datenverarbeitung</h5>
              <p>
                Die Rechtsgrundlage der Verarbeitung der Daten nach Ihrer
                Anmeldung zu dem jeweiligen Gewinnspiel/ zu der jeweiligen
                Teilnahme an weiteren Marktforschungsstudien ist das Vorliegen
                einer Einwilligung nach Art. 6 Abs. 1 lit. a DS-GVO.
              </p>
              <h5>
                4) Dauer der Speicherung, Widerspruchs- und
                Beseitigungsmöglichkeiten
              </h5>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Ihre
                E-Mail-Adresse wird demnach solange gespeichert, wie sie für die
                Teilnahme am jeweiligen Gewinnspiel oder für die Teilnahme an
                jeweils beschriebenen Marktforschungsstudien benötigt wird. Die
                Teilnahme an dem jeweiligen Gewinnspiel oder die Bereitschaft,
                an weiteren, jeweils beschriebenen Marktforschungsstudien
                teilzunehmen, können Sie jederzeit kostenlos widerrufen. Hierzu
                wird Ihnen im Rahmen der jeweiligen Befragung das jeweilige
                Verfahren beschrieben, die zum Widerruf zu verwendende
                E-Mail-Adresse bekanntgegeben und im Anschluss wird Ihre
                jeweilige Einwilligung noch einmal an Ihre E-Mail-Adresse
                versandt. Hierdurch wird Ihnen ebenfalls ein Widerruf der
                Einwilligung der Speicherung der während des Anmeldevorgangs
                erhobenen personenbezogenen Daten mit Wirkung für die Zukunft
                ermöglicht. Möchten Sie von Ihrem Widerrufsrecht Gebrauch
                machen, genügt eine E-Mail an datenschutz@aserto.de
              </p>
              <p>
                Sollten Sie darüber hinaus Fragen zu Marktforschungsstudien oder
                Befragungen haben, schreiben Sie uns gerne an info@aserto.de
                oder rufen Sie uns an +49 511 515678-0.
              </p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3>V. Minderjährigenschutz</h3>,
          content: (
            <>
              <p>
                Die Einwilligung zur Verarbeitung personenbezogener Daten kann
                nur durch eine volljährige Person erteilt werden. Für Dienste
                der Informationsgesellschaft ist die Einwilligung eines Kindes
                ab dem Erreichen des sechzehnten Lebensjahres gemäß Art. 8 DSGVO
                zulässig.
              </p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3>VI. Übermittlung von Daten</h3>,
          content: (
            <>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten findet grundsätzlich
                nicht statt. Ausnahmen können sich ergeben wenn:
              </p>
              <ul>
                <li>
                  a. Sie Ihre nach Art. 6 Abs. 1 lit. a DS-GVO ausdrückliche
                  Einwilligung dazu erteilt haben,
                </li>
                <li>
                  b. die Weitergabe nach Art. 6 Abs. 1 lit. f DS-GVO zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen erforderlich ist und kein Grund zur Annahme
                  besteht, dass Sie ein überwiegendes schutzwürdiges Interesse
                  an der Nichtweitergabe Ihrer Daten haben,
                </li>
                <li>
                  c. für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1
                  lit. c DS-GVO eine gesetzliche Verpflichtung besteht, sowie
                </li>
                <li>
                  d. dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b
                  DS-GVO für die Abwicklung von Vertragsverhältnissen mit Ihnen
                  erforderlich ist sowie
                </li>
                <li>
                  e. diese an einen im Auftrag und auf Weisung von aserto
                  tätigen Dienstleister erfolgt, der sorgfältig ausgewählt (Art.
                  28 Abs. 1 DS-GVO) und mit dem aserto einen entsprechenden
                  Vertrag gemäß Art. 28 Abs. 3 DS-GVO über die
                  Auftragsverarbeitung geschlossen hat.
                </li>
              </ul>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3>VII. Betroffenenrechte und Beschwerderechte</h3>,
          content: (
            <>
              <p>
                Als Betroffener einer Verarbeitung personenbezogener Daten haben
                Sie das Recht,
              </p>
              <ul>
                <li>
                  a. gemäß Art. 15 DS-GVO Auskunft über Ihre von aserto
                  verarbeiteten personenbezogenen Daten zu verlangen.
                  Insbesondere können Sie Auskunft über die Verarbeitungszwecke,
                  die Kategorie der personenbezogenen Daten, die Kategorien von
                  Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder
                  werden, die geplante Speicherdauer, das Bestehen eines Rechts
                  auf Berichtigung, Löschung, Einschränkung der Verarbeitung
                  oder Widerspruch, das Bestehen eines Beschwerderechts, die
                  Herkunft ihrer Daten, sofern diese nicht bei aserto erhoben
                  wurden, sowie über das Bestehen einer automatisierten
                  Entscheidungsfindung einschließlich Profiling und ggf.
                  aussagekräftigen Informationen zu deren Einzelheiten
                  verlangen;
                </li>
                <li>
                  b. gemäß Art. 16 DS-GVO unverzüglich die Berichtigung
                  unrichtiger oder Vervollständigung Ihrer bei aserto
                  gespeicherten personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  c. gemäß Art. 17 DS-GVO die Löschung Ihrer bei aserto
                  gespeicherten personenbezogenen Daten zu verlangen, soweit
                  nicht die Verarbeitung zur Ausübung des Rechts auf freie
                  Meinungsäußerung und Information, zur Erfüllung einer
                  rechtlichen Verpflichtung, aus Gründen des öffentlichen
                  Interesses oder zur Geltendmachung, Ausübung oder Verteidigung
                  von Rechtsansprüchen erforderlich ist;
                </li>
                <li>
                  d. gemäß Art. 18 DS-GVO die Einschränkung der Verarbeitung
                  Ihrer personenbezogenen Daten zu verlangen, soweit die
                  Richtigkeit der Daten von Ihnen bestritten wird, die
                  Verarbeitung unrechtmäßig ist, Sie aber deren Löschung
                  ablehnen und aserto die Daten nicht mehr benötigen, Sie jedoch
                  diese zur Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DS-GVO
                  Widerspruch gegen die Verarbeitung eingelegt haben;
                </li>
                <li>
                  e. gemäß Art. 20 DS-GVO Ihre personenbezogenen Daten, die Sie
                  aserto bereitgestellt haben, in einem strukturierten, gängigen
                  und maschinenlesebaren Format zu erhalten oder die
                  Übermittlung an einen anderen Verantwortlichen zu verlangen;
                </li>
                <li>
                  f. gemäß Art. 7 Abs. 3 DS-GVO Ihre einmal erteilte
                  Einwilligung jederzeit gegenüber aserto zu widerrufen. Dies
                  hat zur Folge, dass wir die Datenverarbeitung, die auf dieser
                  Einwilligung beruhte, für die Zukunft nicht mehr fortführen
                  dürfen und
                </li>
                <li>
                  g. gemäß Art. 77 DS-GVO sich bei einer Aufsichtsbehörde zu
                  beschweren. In der Regel können Sie sich hierfür an die
                  Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder
                  Arbeitsplatzes oder an die Aufsichtsbehörde am Geschäftssitz
                  von aserto wenden.
                </li>
              </ul>
              <h4>Die für aserto zuständige Aufsichtsbehörde ist:</h4>
              <p>
                Die Landesbeauftragte für den Datenschutz Niedersachsen <br />
                Barbara Thiel <br />
                Prinzenstraße 5 <br />
                30159 Hannover T<br />
                elefon: +49 511 120-4500
                <br />
                E-Mail: poststelle@lfd.niedersachsen.de <br />
                Zur Geltendmachung Ihrer Betroffenenrechte oder Ihres
                Beschwerderechts genügt eine E-Mail an datenschutz@aserto.de.
              </p>
              <h4>
                Widerrufsrecht bei Verarbeitung aufgrund einer Einwilligung
              </h4>
              <p>
                Sofern Ihre personenbezogenen Daten auf Grundlage einer
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DS-GVO verarbeitet
                werden, haben Sie jederzeit das Recht Ihre Einwilligung ohne
                Angabe von Gründen zu widerrufen. Dies hat zur Folge, dass
                aserto die Datenverarbeitung, die auf Ihrer Einwilligung
                beruhte, für die Zukunft nicht mehr fortführen darf. Durch den
                Widerruf der Einwilligung wird die Rechtmäßigkeit, der aufgrund
                der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht
                berührt.
              </p>
              <p>
                Möchten Sie von Ihrem Widerrufsrecht Gebrauch machen, genügt
                eine E-Mail an datenschutz@aserto.de.
              </p>
              <h4>Widerspruchsrecht</h4>
              <p>
                Sofern Ihre personenbezogenen Daten auf Grundlage von
                berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DS-GVO
                verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DS-GVO
                Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
                einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer
                besonderen Situation ergeben. Richtet sich Ihr Widerspruch gegen
                Direktwerbung haben Sie ein generelles Widerspruchsrecht, eine
                Begründung ist für diese Fälle nicht erforderlich.
              </p>
              <p>
                Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, genügt
                eine E-Mail an datenschutz@aserto.de.
              </p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3>VIII. Datensicherheit</h3>,
          content: (
            <>
              <p>
                aserto verwenden innerhalb der eigenen Online-Angebote das
                verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung
                mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem
                Browser unterstützt wird. Ob eine einzelne Seite der
                Online-Angebote verschlüsselt übertragen wird, erkennen Sie z.B.
                an der geschlossenen Darstellung des Schüssel- beziehungsweise
                Schloss-Symbols in der Statusleiste Ihres Browsers. aserto
                bedienen sich im Übrigen geeigneter technischer und
                organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen
                zufällige oder vorsätzliche Manipulationen, teilweisen oder
                vollständigen Verlust, Zerstörung oder gegen den unbefugten
                Zugriff Dritter zu schützen. aserto passt die
                Sicherheitsmaßnahmen entsprechend der technologischen
                Entwicklung fortlaufend an.
              </p>
            </>
          ),
        }}
      </Statement>

      <Statement color={colors.grey}>
        {{
          title: <h3>IX. Aktualität und Änderung der Datenschutzerklärung</h3>,
          content: (
            <>
              <p>
                Diese Datenschutzerklärung hat den Stand Juli 2020. Durch die
                Weiterentwicklung der aserto-Online-Angebote oder aufgrund
                geänderter gesetzlicher beziehungsweise behördlicher Vorgaben,
                kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                Die jeweils aktuelle Datenschutzerklärung kann jederzeit unter
                https://www.aserto.de/datenschutzerklaerung von Ihnen abgerufen
                und ausgedruckt werden.
              </p>
              <p>
                Sollten Sie darüber hinaus Fragen zum Datenschutz haben, wenden
                Sie sich gerne an datenschutz@aserto.de oder rufen Sie uns an
                +49 511-515678-0
              </p>
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
