import React, { useState } from "react";
import "./App.css";

function App() {
  const phrases = [
    "Per rimuovere una macchia di vino rosso dai vestiti, cospargi immediatamente del sale sulla macchia e poi lavalo con acqua fredda.",
    "Se hai il raffreddore, prova a bere acqua calda con miele e limone per lenire la gola e decongestionare il naso.",
    "Se vuoi farti passare una sbronza, bevi molta acqua e mangia cibi ricchi di carboidrati.",
    "Usa del bicarbonato di sodio per eliminare i cattivi odori dal frigorifero.",
    "Per evitare che le banane maturino troppo velocemente, avvolgi la parte superiore del grappolo con della pellicola trasparente.",
    "Metti un cucchiaio di legno sopra la pentola per evitare che l'acqua bollente fuoriesca.",
    "Se hai finito il deodorante, usa un po' di bicarbonato sotto le ascelle per neutralizzare i cattivi odori.",
    "Per rimuovere i graffi dai mobili in legno, strofina una noce sulla superficie graffiata.",
    "Quando cucini la pasta, aggiungi un po' di olio nell'acqua per evitare che si attacchi.",
    "Usa una patata cruda per rimuovere la ruggine dagli utensili di ferro.",
    "Se vuoi conservare a lungo le erbe aromatiche, congelale in cubetti di ghiaccio con dell'olio d'oliva.",
    "Metti un sacchetto di tè usato nelle scarpe per assorbire i cattivi odori.",
    "Per togliere la gomma da masticare dai capelli, applica del burro di arachidi e poi lavalo via.",
    "Se hai delle scottature solari, applica del gel di aloe vera per alleviare il dolore e favorire la guarigione.",
    "Per togliere una macchia d'inchiostro dai vestiti, usa un po' di latte e poi lava come al solito.",
    "Raffredda rapidamente una bevanda mettendo il contenitore in un secchio con acqua, ghiaccio e sale.",
    "Se hai problemi a dormire, prova a bere una tisana alla camomilla prima di andare a letto.",
    "Usa uno spazzolino da denti vecchio per pulire gli angoli difficili da raggiungere in casa.",
    "Per evitare che i vetri si appannino in bagno, strofina una piccola quantità di shampoo secco sugli specchi.",
    "Per eliminare i graffi dai CD o DVD, strofina delicatamente con del dentifricio bianco e poi risciacqua.",
    "Se hai una lampo bloccata, strofinala con una saponetta per facilitarne lo scorrimento.",
    "Per rimuovere il calcare dal bollitore, riempilo con metà acqua e metà aceto e fai bollire.",
    "Usa un pettine a denti stretti per rimuovere i peli di animali dai tappeti e dai mobili.",
    "Se il pane è raffermo, spruzzalo leggermente con acqua e riscaldalo in forno per pochi minuti.",
    "Metti una piccola ciotola di aceto bianco nel microonde e riscaldalo per 5 minuti per facilitarne la pulizia.",
    "Per evitare che i fili si aggroviglino, avvolgili attorno a una molletta da bucato.",
    "Usa una piastra per capelli per stirare velocemente piccole pieghe sui vestiti.",
    "Metti un foglio di alluminio sotto l'asse da stiro per riflettere il calore e stirare più velocemente.",
    "Per rimuovere una macchia di caffè dai vestiti, tampona con dell'acqua frizzante e poi lava come al solito.",
    "Se non hai un imbuto, usa una bottiglia di plastica tagliata a metà.",
    "Per sbucciare l'aglio velocemente, schiaccialo leggermente con la lama di un coltello prima di rimuovere la buccia.",
    "Per evitare che le cerniere si bloccano, strofina con una matita di grafite.",
    "Conserva le batterie nel frigorifero per prolungarne la durata.",
    "Usa del borotalco per rimuovere la sabbia dai piedi dopo una giornata in spiaggia.",
    "Se il burro è troppo duro, grattugialo per ammorbidirlo più velocemente.",
    "Per riscaldare uniformemente il cibo nel microonde, crea un buco al centro del piatto.",
    "Per evitare di piangere mentre tagli le cipolle, mettile in freezer per 10 minuti prima di affettarle.",
    "Usa una molletta per sigillare i pacchetti di cibo aperti e mantenerli freschi.",
    "Se hai un taglio minore, applica del miele per aiutare la guarigione e prevenire infezioni.",
    "Usa dell'aceto per pulire le macchie d'acqua dura dai rubinetti e dagli specchi.",
    "Per evitare che il latte strabordi durante la bollitura, metti un cucchiaio di legno sopra la pentola.",
    "Per pulire facilmente il forno, spruzza una soluzione di acqua e bicarbonato, lascialo agire e poi pulisci.",
    "Se il tappo di una bottiglia è difficile da aprire, scaldalo con acqua calda per facilitare l'apertura.",
    "Per rimuovere la cera dalle candele sciolte sui mobili, usa un asciugacapelli per ammorbidirla e poi pulisci.",
    "Usa un batuffolo di cotone imbevuto di aceto per rimuovere le macchie di sudore dai vestiti.",
    "Per togliere una macchia di olio dai vestiti, cospargi del talco o del bicarbonato prima di lavare.",
    "Per evitare che la frutta tagliata annerisca, immergila in una soluzione di acqua e limone.",
    "Se hai un mal di denti, applica un po' di chiodi di garofano macinati sulla zona dolorante per alleviare il dolore.",
    "Usa una spugna umida per rimuovere i peli di animali dai mobili imbottiti.",
    "Per risparmiare spazio in valigia, arrotola i vestiti invece di piegarli.",
    "Usa un filo interdentale per tagliare i cibi morbidi come le torte senza schiacciarli.",
    "Per evitare che le patate germoglino, conservale con una mela.",
    "Usa una gomma da cancellare per pulire i segni di matita dai muri.",
    "Per alleviare il prurito da punture di zanzara, applica del dentifricio alla menta sulla puntura.",
    "Se hai delle macchie di sangue sui vestiti, usa dell'acqua fredda e del sapone per rimuoverle prima di lavare.",
    "Per evitare che il formaggio si secchi, avvolgilo in un panno leggermente umido prima di metterlo in frigorifero.",
    "Usa del bicarbonato per eliminare le macchie di tè e caffè dalle tazze.",
    "Se hai la gola irritata, fai gargarismi con acqua salata tiepida per alleviare il dolore.",
    "Metti una ciotola di riso nel frigorifero per assorbire l'umidità e mantenere gli alimenti freschi.",
    "Per evitare che gli avanzi di cibo secchino, coprili con un panno umido prima di riscaldarli nel microonde.",
    "Se hai una cerniera bloccata, strofina con una candela per facilitare il movimento.",
    "Usa un panno di cotone imbevuto di aceto per pulire i vetri senza lasciare aloni.",
    "Per evitare che le unghie si spezzino, immergile in olio d'oliva tiepido per 10 minuti alla settimana.",
    "Se hai le mani fredde, prova a scaldarle strofinando una piccola quantità di crema riscaldante o di burro di cacao.",
    "Per rimuovere le macchie di vino rosso dai tessuti, usa del vino bianco e poi lava come al solito.",
    "Metti una ciotola d'acqua nel forno mentre cucini per mantenere la carne succosa.",
    "Per togliere l'odore di cipolla dalle mani, strofinale con acciaio inossidabile sotto l'acqua corrente.",
    "Usa una graffetta per tenere in ordine i cavi del caricabatterie sulla scrivania.",
    "Per sbucciare facilmente le uova sode, aggiungi un pizzico di sale all'acqua di cottura.",
    "Se il trucco in polvere si rompe, aggiungi qualche goccia di alcool e compattalo nuovamente.",
    "Per eliminare le pieghe dai vestiti senza stirare, appendili in bagno durante una doccia calda.",
    "Usa un limone tagliato a metà per pulire e deodorare il tagliere in legno.",
    "Per mantenere gli stivali in piedi, inserisci bottiglie di plastica vuote all'interno.",
    "Se hai un mal di testa, prova a massaggiare le tempie con olio di menta piperita.",
    "Per evitare che le candele sgocciolino, mettile nel congelatore per qualche ora prima di accenderle.",
    "Usa un cubetto di ghiaccio per rimuovere la gomma da masticare attaccata alle superfici.",
    "Per eliminare i cattivi odori dai libri vecchi, mettili in una busta con del bicarbonato di sodio.",
    "Usa un elastico per tenere insieme i cavi avvolti e in ordine.",
    "Per pulire le lame del frullatore, aggiungi acqua calda e un po' di detersivo per piatti, poi aziona il frullatore.",
    "Se il miele si cristallizza, scaldalo a bagnomaria per riportarlo alla consistenza liquida.",
    "Per togliere le macchie di ruggine dai tessuti, applica succo di limone e sale, poi esponi al sole.",
    "Se hai unghie ingiallite, strofinale con una fetta di limone per schiarirle.",
    "Per pulire il tagliere in legno, usa sale grosso e mezzo limone.",
    "Usa una bottiglia d'acqua vuota per separare il tuorlo dall'albume.",
    "Se hai piedi sudati, spruzza del deodorante spray per mantenerli asciutti.",
    "Usa il nastro adesivo per rimuovere le pelucchi dai vestiti.",
    "Per sbarazzarti degli afidi sulle piante, spruzza una soluzione di acqua e sapone neutro.",
    "Se hai difficoltà a infilare il filo nell'ago, passalo attraverso un foglio di carta e poi infilalo.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);

  const handleClick = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
    setShowNextButton(true);
  };

  const handleNextPhrase = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
  };

  return (
    <div className="container">
      <h1>I Consigli della Nonna</h1>
      {!showNextButton && (
        <button onClick={handleClick}>Fatti consigliare</button>
      )}
      {showNextButton && (
        <>
          <p className="phrase">{currentPhrase}</p>
          <button onClick={handleNextPhrase}>Altro consiglio</button>
        </>
      )}
    </div>
  );
}

export default App;
