import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="App">
        <h2 className="thank-you-message">Vielen Dank für Ihre Antwort!</h2>
        <p>Falls die Fahrt noch nicht zu Ende sein sollte, dürfen Sie nun die Zeit bis dahin gerne zum Beispiel mit anderen Webseiten die Zeit vertreiben.</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Autonome Fahrzeuge</h1>
        <p id="instruc">Bitte lies den untenstehenden Text und schaue das darauffolgende Video zum Thema "Autonome Fahrzeuge" an.
          Beantworte danach bitte ein paar Fragen zu dem Thema. Vielen Dank!
        </p>

        <div>
        <p>
            Stell dir vor, du steigst morgens in ein Auto, das dich nicht nur zur Arbeit bringt, sondern dir auch unterwegs deinen Lieblingskaffee aus der Lieblingscaféteria holt – ganz ohne, dass du einen Finger krümmen musst. Klingt nach Science-Fiction? Nicht mehr lange! Autonome Fahrzeuge, also Autos, die sich ganz von alleine durch den Verkehr navigieren, stehen schon jetzt an der Schwelle, unsere Welt zu revolutionieren. Aber wie genau funktioniert das? Und warum könnten diese Fahrzeuge unser Leben grundlegend verändern?
        </p>

        <section>
            <h2>Was genau sind autonome Fahrzeuge?</h2>
            <p>
                Ein autonomes Fahrzeug ist ein echter Alleskönner: Es sieht, hört und denkt – zumindest ein bisschen. Mithilfe von Kameras, Sensoren, Radaren und einer KI im Hintergrund kann das Auto seine Umgebung wahrnehmen, andere Verkehrsteilnehmer erkennen und blitzschnell Entscheidungen treffen. Kein hektisches Blinken mehr, keine Panik auf glatten Straßen, kein Streit um die Vorfahrt – das Auto regelt alles.
            </p>
            <p>
                Die Automatisierung wird dabei in fünf Stufen eingeteilt. Am spannendsten ist natürlich Stufe 5, wo das Fahrzeug völlig selbstständig unterwegs ist – ohne Lenkrad, ohne Pedale, vielleicht sogar ohne Fahrer. Momentan sind wir auf Stufe 2 bis 3 unterwegs: Autos können uns bereits auf der Autobahn beim Spurwechsel helfen oder automatisch einparken, aber wir Menschen haben noch die Zügel in der Hand.
            </p>
        </section>

        <section>
            <h2>Warum autonome Autos unser Leben verändern könnten</h2>
            <p>Die Idee ist groß: Autonome Fahrzeuge könnten nicht nur praktisch sein, sondern unsere Welt sicherer, effizienter und sogar umweltfreundlicher machen. Klingt zu gut, um wahr zu sein? Lass uns das mal aufschlüsseln:</p>
            <ul>
                <li>
                    <strong>Weniger Unfälle, mehr Sicherheit:</strong> Hast du gewusst, dass die meisten Verkehrsunfälle durch menschliche Fehler passieren? Müdigkeit, Ablenkung oder schlichtes Übersehen von Verkehrszeichen – all das könnte mit autonomen Autos der Vergangenheit angehören. Ein KI-System wird nie müde und kann in Millisekunden auf gefährliche Situationen reagieren. Das bedeutet weniger Tränen auf den Straßen und eine drastische Reduzierung von Unfallzahlen.
                </li>
                <li>
                    <strong>Mehr Zeit für das Wesentliche:</strong> Stell dir vor, du sitzt im Auto und musst nicht fahren. Was würdest du mit der zusätzlichen Zeit machen? Ein Buch lesen, deine E-Mails abarbeiten oder einfach die Augen schließen und entspannen? Autonome Fahrzeuge könnten Pendeln in eine Art Mini-Urlaub verwandeln – oder zumindest in produktive Stunden.
                </li>
                <li>
                    <strong>Barrierefreie Mobilität:</strong> Für Menschen, die nicht selbst fahren können, sei es wegen Alters, Behinderungen oder Krankheiten, könnten autonome Autos eine echte Befreiung sein. Plötzlich wird Mobilität für jeden zugänglich, unabhängig von Führerscheinen oder Reaktionsschnelligkeit.
                </li>
                <li>
                    <strong>Grüner unterwegs:</strong> Mit der richtigen Technologie könnten autonome Fahrzeuge den Verkehr flüssiger machen, Staus reduzieren und den Spritverbrauch optimieren. Und wenn sie dann noch elektrisch betrieben werden? Jackpot für die Umwelt! Weniger CO₂, mehr Lebensqualität.
                </li>
                <li>
                    <strong>Städte neu erfinden:</strong> Man stelle sich Städte ohne überfüllte Parkplätze vor. Autonome Fahrzeuge könnten dazu führen, dass weniger Menschen eigene Autos besitzen, weil man sie einfach „teilen“ kann. Ein kurzer Klick in der App, und schon kommt ein selbstfahrendes Auto um die Ecke, um dich abzuholen. Das würde Platz schaffen – für Parks, Spielplätze und viel mehr Raum zum Leben.
                </li>
            </ul>
        </section>

        <section>
            <h2>Herausforderungen auf dem Weg zur Zukunft</h2>
            <p>
                Natürlich ist nicht alles ein Zuckerschlecken. Autonome Fahrzeuge stehen noch vor einigen Herausforderungen. Zum Beispiel: Was passiert, wenn ein selbstfahrendes Auto in einen Unfall verwickelt ist? Wer trägt die Verantwortung – der Hersteller, der Besitzer oder vielleicht niemand? Und dann ist da noch die Frage der Technik: Wie zuverlässig sind die Systeme bei schlechtem Wetter oder in chaotischen Verkehrssituationen?
            </p>
            <p>
                Ein weiteres Thema ist der Datenschutz. Autonome Autos sammeln Unmengen an Daten: Wo wir hinfahren, wann wir es tun, was wir dabei machen. Diese Informationen müssen sicher geschützt werden – sonst könnte der Traum vom autonomen Fahren schnell zum Albtraum werden.
            </p>
            <p>
                Und ja, es gibt auch berechtigte Sorgen um Jobs. Taxifahrer, LKW-Fahrer oder Lieferanten – viele Berufe könnten durch autonome Fahrzeuge bedroht sein. Doch wie bei jeder technologischen Revolution gilt auch hier: Es werden neue Berufe entstehen, die heute noch niemand auf dem Schirm hat.
            </p>
        </section>

        <section>
            <h2>Die aufregende Reise beginnt jetzt</h2>
            <p>
                Autonome Fahrzeuge sind kein ferner Traum mehr – sie stehen praktisch vor unserer Haustür. Natürlich wird es noch eine Weile dauern, bis sie unseren Alltag komplett durchdrungen haben. Doch eines ist sicher: Sie werden kommen, und sie werden unsere Mobilität von Grund auf verändern.
            </p>
            <p>
                Stell dir eine Welt vor, in der es weniger Unfälle, weniger Stress und mehr Freiheit gibt. Eine Welt, in der Mobilität smart, nachhaltig und für alle zugänglich ist. Klingt das nicht fantastisch? Autonome Fahrzeuge könnten genau das ermöglichen – und unsere Straßen in Orte der Innovation und Möglichkeiten verwandeln.
            </p>
            <p>Die Reise beginnt jetzt. Und vielleicht sitzt du schon bald in einem Auto, das dein Leben nicht nur von A nach B bringt, sondern es auch ein Stück besser macht.</p>
        </section>
        </div>

        <div className="video-container">
          <video controls>
            <source src="video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <p id="instruc">
            Bitte beantworte nun die folgenden paar Fragen zu autonomen Fahrzeugen. Dabei ist dir überlassen, wie du den Text strukturierst oder ob du einen Fließtext schreibst.
            Es ist kein Problem, wenn die Zeit nicht ausreicht, um alle Fragen zu beantworten. Der Text wird nicht bewertet. Du darfst auch gerne weitere Gedanken, die dir zu dem Thema einfallen, aufschreiben!
            Wenn du fertig bist, klicke auf den Button "Absenden".

          </p>
          <ul>
            <li>Würdest du einem autonomen Fahrzeug (Waymo), wie in dem Video zu sehen ist, vertrauen?</li>
            <li>Inwiefern denkst du, dass autonome Fahrzeuge dein Leben bereichern könnten?</li>
            <li>Angenommen, die Kosten eines autonomen Taxis wären gleich wie die Kosten für öffentliche Verkehrsmittel, wie Bus und Bahn. Für welches Transportmittel würdest du dich eher entscheiden und warum?</li>
            <li>Fallen dir irgendwelche Nachteile mit autonomen Fahrzeugen ein, die dich vielleicht skeptisch machen?</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Gebe hier deine Antwort ein..."
            rows="8"
            cols="50"
            className="text-area"
          ></textarea>
          <br />
          <button type="submit" className="submit-button">Absenden</button>
        </form>
      </header>
    </div>
  );
}

export default App;