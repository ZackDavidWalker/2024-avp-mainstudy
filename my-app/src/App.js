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
            Stell dir vor, du sitzt in deinem Auto und auf der Windschutzscheibe erscheinen nützliche Informationen wie die aktuelle Geschwindigkeit, die optimale Route oder Warnungen vor Gefahren – und das alles, ohne dass du deinen Blick von der Straße nehmen musst. Klingt futuristisch? Dank <strong>Augmented Reality (AR)</strong> ist das keine Science-Fiction, sondern eine Technologie, die unser Fahrerlebnis revolutionieren könnte. Aber was genau ist AR, und wie wird sie in Fahrzeugen eingesetzt?
        </p>

        <section>
            <h2>Was ist Augmented Reality?</h2>
            <p>
                AR, also „erweiterte Realität“, beschreibt die Überlagerung der realen Welt mit digitalen Informationen. Anders als bei Virtual Reality, bei der du komplett in eine digitale Welt eintauchst, ergänzt AR deine Umgebung um hilfreiche Inhalte – in Echtzeit und in deinem Sichtfeld. Im Kontext von Fahrzeugen bedeutet das: Dein Auto wird zu einem smarten Begleiter, der dir relevante Informationen direkt vor deinen Augen projeziert.
            </p>
            <p>
                Die Umsetzung erfolgt oft über sogenannte <strong>Head-up-Displays (HUDs)</strong>, die Informationen auf die Windschutzscheibe oder ein spezielles Display projizieren. In neueren Konzepten wird die AR-Technologie durch Kameras und Sensoren unterstützt, die das Umfeld analysieren und mit digitalen Daten anreichern.
            </p>
        </section>

        <section>
            <h2>Möglichkeiten von AR in Fahrzeugen</h2>
            <p>Die Einsatzmöglichkeiten von Augmented Reality in Fahrzeugen sind nahezu grenzenlos. Hier sind einige spannende Anwendungsbereiche:</p>
            <ul>
                <li>
                    <strong>1. Navigationshilfen direkt im Sichtfeld:</strong> Statt auf ein herkömmliches Navi-Display zu schauen, zeigt dir AR die Route direkt auf der Straße an. Virtuelle Pfeile markieren genau, wo du abbiegen musst, und machen komplizierte Kreuzungen kinderleicht. Keine Ablenkung, kein Rätselraten – einfach entspanntes Fahren.
                </li>
                <li>
                    <strong>2. Gefahrenwarnungen in Echtzeit:</strong> AR kann potenzielle Gefahren erkennen und visuell hervorheben. Stell dir vor, ein Fußgänger betritt die Fahrbahn – dein Auto markiert ihn direkt in deinem Sichtfeld und gibt dir einen klaren Hinweis, bevor du ihn vielleicht selbst bemerkst. Auch Gefahren wie Glatteis oder Baustellen könnten direkt angezeigt werden.
                </li>
                <li>
                    <strong>3. Assistenz beim Einparken:</strong> Mit AR wird das Einparken zum Kinderspiel. Die Technologie kann dir zeigen, wie viel Platz noch zu anderen Fahrzeugen oder Hindernissen ist, und die ideale Parkposition direkt auf das Display projizieren. Schluss mit Stress in engen Parkhäusern!
                </li>
                <li>
                    <strong>4. Unterstützung für autonomes Fahren:</strong> In Kombination mit autonomen Fahrzeugen könnte AR dir zeigen, welche Entscheidungen das Auto trifft. Zum Beispiel könnte es virtuelle Markierungen für den Sicherheitsabstand setzen oder anzeigen, wie andere Verkehrsteilnehmer erkannt werden. Das steigert Vertrauen und Transparenz in die Technologie.
                </li>
                <li>
                    <strong>5. Individualisierte Fahrerlebnisse:</strong> Mit AR kannst du dein Fahrerlebnis personalisieren. Stell dir vor, du bekommst Echtzeit-Informationen über Sehenswürdigkeiten auf deiner Route, Empfehlungen für Restaurants oder Tankstellen, die direkt in dein Sichtfeld projiziert werden. Dein Auto wird zu einem digitalen Assistenten, der dich in jeder Situation unterstützt.
                </li>
                <li>
                    <strong>6. Gaming und Entertainment für Beifahrer:</strong> AR beschränkt sich nicht nur auf die Fahrerperspektive. Für Beifahrer könnte die Technologie ein völlig neues Entertainment-Erlebnis bieten. Von interaktiven Spielen bis hin zu virtuellen Erkundungen von Städten – AR macht die Fahrt aufregender als je zuvor.
                </li>
            </ul>
        </section>

        <section>
            <h2>Vorteile von AR in Fahrzeugen</h2>
            <p>
                Die Vorteile liegen auf der Hand:
            </p>
            <ul>
                <li><strong>Mehr Sicherheit:</strong> Indem AR den Blick des Fahrers auf die Straße lenkt und gleichzeitig wichtige Informationen einblendet, reduziert es Ablenkungen.</li>
                <li><strong>Intuitiveres Fahren:</strong> Durch visuelle Hinweise wird die Interaktion mit Fahrzeugfunktionen einfacher und verständlicher.</li>
                <li><strong>Besseres Fahrerlebnis:</strong> AR macht das Fahren nicht nur praktischer, sondern auch aufregender.</li>
            </ul>
        </section>

        <section>
            <h2>Das Auto der Zukunft – Realität trifft auf digitale Magie</h2>
            <p>
                Augmented Reality hat das Potenzial, unsere Mobilität grundlegend zu verändern. Sie macht das Autofahren nicht nur sicherer und effizienter, sondern schafft ein Erlebnis, das die Grenze zwischen Realität und Technologie verschwimmen lässt.
            </p>
            <p>
                Vielleicht sitzt du schon bald in einem Auto, das dir die Straße auf völlig neue Weise zeigt – interaktiv, informativ und faszinierend. Willkommen in der Zukunft, wo deine Windschutzscheibe mehr kann als je zuvor!
            </p>
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
            <li>Würdest du lieber ein Auto fahren, das AR Fähgkeiten besitzt, wie in dem Video zu sehen ist, oder ein herkömmliches Fahrzeug nutzen? Warum?</li>
            <li>Denkst du, dass AR das Fahren interessanter, nützlicher oder sicher machen könnte?</li>
            <li>Was müsste AR in Fahrzuegen bieten, damit es für dich ein Must-Have wäre?</li>
            <li>Fallen dir irgendwelche Nachteile bezüglich AR in Fahrzuegen ein, die dich vielleicht skeptisch machen?</li>
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