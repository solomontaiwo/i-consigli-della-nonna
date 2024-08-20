import React, { useState } from "react";
import "./App.css";

function App() {
  const phrases = [
    "Beer Pong: Dividi i giocatori in due squadre. Ogni squadra ha una formazione triangolare di coppe di birra su ciascun lato del tavolo. A turno, i giocatori lanciano una pallina da ping pong cercando di farla cadere in una coppa avversaria. Se ci riesci, l'avversario beve la birra nella coppa.",
    "King's Cup: Metti un mazzo di carte intorno a una grande coppa centrale. A turno, i giocatori pescano una carta e seguono la regola associata a quella carta (ad esempio, 2 è 'tu', 3 è 'me', 4 è 'ragazze bevono'). Il giocatore che pesca il Re deve versare un po' della sua bevanda nella coppa centrale. Chi pesca l'ultimo Re deve bere il contenuto della coppa.",
    "Never Have I Ever: I giocatori a turno dicono 'Mai ho mai...' seguito da qualcosa che non hanno mai fatto (es. 'Mai ho mai mentito ai miei genitori'). Chiunque l'abbia fatto deve bere.",
    "Flip Cup: Dividi i giocatori in due squadre. Ogni giocatore beve una coppa di birra il più velocemente possibile, poi deve posizionare la coppa vuota sul bordo del tavolo e farla girare capovolgendola. La prima squadra che fa girare tutte le coppe vince.",
    "Power Hour: Un gioco per i forti bevitori. I partecipanti bevono un sorso di birra ogni minuto per un'ora. Puoi usare una playlist musicale che cambia canzone ogni minuto per mantenere il ritmo.",
    "Drunk Jenga: Scrivi delle regole (es. 'Bevi due sorsi', 'Fai una penitenza', 'Nomina qualcuno che deve bere') su ogni pezzo del Jenga. I giocatori a turno estraggono un pezzo e devono seguire la regola scritta su di esso.",
    "Quarters: I giocatori si siedono attorno a un tavolo. A turno, devono far rimbalzare una moneta su un tavolo cercando di farla cadere in un bicchiere. Se ci riescono, possono scegliere un altro giocatore che deve bere.",
    "Fuzzy Duck: I giocatori a turno dicono 'Fuzzy Duck' in senso orario. A un certo punto, un giocatore può dire 'Ducky Fuzz' per invertire il senso di gioco. Se un giocatore sbaglia a pronunciare o esita troppo, deve bere.",
    "Paranoia: Un giocatore sussurra una domanda all'orecchio di un altro (es. 'Chi è più probabile che faccia una figuraccia?'). Il giocatore risponde ad alta voce. Se il giocatore che ha sussurrato vuole sapere la domanda, deve bere.",
    "Buzz: I giocatori contano in senso orario, ma ogni numero multiplo di 7 (o contenente il numero 7) deve essere sostituito con la parola 'Buzz'. Se un giocatore sbaglia o esita, deve bere.",
    "Waterfall: Tutti i giocatori iniziano a bere contemporaneamente. Il primo giocatore può smettere di bere quando vuole, ma il giocatore accanto a lui non può smettere finché il primo non ha smesso, e così via fino all'ultimo giocatore.",
    "Ride the Bus: Un gioco di carte in cui i giocatori devono indovinare se la carta successiva sarà più alta o più bassa di quella mostrata. Se sbagliano, devono bere. Il gioco continua finché il mazzo di carte non è finito.",
    "Asshole: Un gioco di carte in cui i giocatori cercano di liberarsi delle loro carte il più velocemente possibile. Il primo a farlo diventa il 'Presidente' nella mano successiva, mentre l'ultimo è l''Asshole'. L'Asshole deve servire il Presidente e bere quando richiesto.",
    "Drunk Charades: Come nei normali giochi di charades, i giocatori devono mimare una parola o una frase senza parlare, mentre gli altri cercano di indovinare. Chi sbaglia a indovinare o mima male deve bere.",
    "Circle of Death: Simile al King's Cup. I giocatori pescano una carta da un mazzo posto al centro di un cerchio di bevande. Ogni carta ha una regola specifica (es. '4 è 'pavimento': l'ultimo a toccare il pavimento beve). Le regole variano a seconda del gruppo.",
    "Edward 40 Hands: Ogni giocatore deve avere una bottiglia da 40 once (1,18 litri) di birra attaccata a ciascuna mano con del nastro adesivo. Non possono togliere le bottiglie finché non le hanno finite.",
    "Drunk Mario Kart: Gioca a Mario Kart, ma con una regola speciale: ogni volta che il tuo personaggio viene colpito da un oggetto o esce di pista, devi bere.",
    "Irish Poker: Distribuisci quattro carte a ciascun giocatore, coperte. I giocatori devono indovinare se le loro carte sono rosse o nere, più alte o più basse, dentro o fuori una gamma, e devono bere per ogni errore.",
    "Drunk Waiter: Un giocatore riempie un vassoio con bicchieri pieni e deve portarli attraverso un percorso ad ostacoli. Se versa un bicchiere, deve berne uno e riprovare.",
    "Truth or Drink: Un giocatore fa una domanda personale a un altro. Se il giocatore non vuole rispondere, deve bere.",
    "Russian Roulette: Riempite uno shottino con vodka e altri con acqua. I giocatori bevono a turno senza sapere cosa stanno per bere.",
    "Boat Race: Dividi i giocatori in due squadre. Ogni squadra deve bere la propria bevanda il più velocemente possibile. Il primo che finisce passa al successivo nella fila, finché una squadra vince.",
    "Drunk Monopoly: Ogni volta che passi dal Via, prendi un drink. Se atterri su una proprietà, bevi. Se finisci in prigione, bevi due volte.",
    "Flip, Sip or Strip: Lancia una moneta. Se indovini correttamente, passi il turno. Se sbagli, bevi o togli un indumento.",
    "Mexicali: I giocatori tirano due dadi. Se il totale è 7 o 11, tutti gli altri devono bere. Se esce un doppio, si nomina un 'Master'.",
    "Thumper: Ogni giocatore sceglie un gesto. Uno inizia facendo il proprio gesto, seguito da quello di un altro giocatore. Se sbaglia o esita, deve bere.",
    "Horse Race: Usa un mazzo di carte. I cavalli sono gli assi, e ogni giro vengono rivelate nuove carte. Il cavallo che arriva per primo vince, e chi ha scommesso su di lui sceglie chi beve.",
    "Most Likely To: Un giocatore fa una domanda del tipo 'Chi è più probabile che...?' e i giocatori puntano al colpevole. Il bersaglio beve.",
    "Power Tower: Usa i bicchieri di carta per costruire una torre. Ogni volta che la torre cade, il giocatore che la stava costruendo beve.",
    "Drink While You Think: I giocatori a turno nominano una celebrità. Il giocatore successivo deve nominare un'altra celebrità il cui nome inizia con la stessa lettera del cognome della precedente. Bevi mentre pensi.",
    "Picolo: Scarica l'app Picolo, un gioco di gruppo che ti darà varie sfide e domande. Segui le indicazioni e bevi quando richiesto.",
    "Beerio Kart: Gioca a Mario Kart e bevi una birra intera durante la gara. Ma non puoi bere e guidare allo stesso tempo! Devi fermarti per bere.",
    "Roxanne: Ascolta la canzone 'Roxanne' dei The Police. Ogni volta che senti 'Roxanne', le ragazze bevono. Ogni volta che senti 'put on the red light', i ragazzi bevono.",
    "Movie Drinking Game: Scegli un film e stabilisci delle regole (es. 'Bevi ogni volta che qualcuno dice il nome del protagonista').",
    "Presidents and Assholes: Simile ad Asshole, ma con più ruoli. Il Presidente comanda, e gli altri seguono. Gli errori si pagano con un drink.",
    "Drunk Dice: Ogni giocatore tira due dadi. A seconda del risultato, il giocatore può bere, far bere un altro o assegnare sorsi.",
    "Shot Roulette: Riempite diversi bicchierini con vari alcolici, alcuni forti e altri leggeri. I giocatori girano la roulette e bevono lo shot corrispondente.",
    "Categories: Un giocatore sceglie una categoria (es. 'Marche di automobili'). Gli altri devono nominare qualcosa in quella categoria. Chi non riesce, beve.",
    "6 Cups: Posiziona 6 bicchieri su un tavolo, numerati da 1 a 6. Tira un dado e bevi dal bicchiere corrispondente.",
    "Drink-a-Palooza: Un gioco da tavolo che combina Beer Pong, Flip Cup, Quarters e King's Cup. Il primo a completare tutte le sfide vince.",
    "Buzzed: Un gioco di carte in cui ogni carta ha una sfida o una regola. Segui la carta o bevi.",
    "Pass the Trash: Un gioco di carte in cui i giocatori passano carte indesiderate. Alla fine del turno, chi ha la carta più alta beve.",
    "Straight Face: Ogni giocatore scrive una frase divertente o imbarazzante su un pezzo di carta. A turno, i giocatori devono leggere la frase cercando di mantenere un volto serio. Chi ride beve.",
    "Edward Wine Hands: Variante di Edward 40 Hands, ma con bottiglie di vino. Gli stessi giocatori devono finire le bottiglie prima di poterle togliere.",
    "Power Hour Remix: Crea una playlist di canzoni remixate di 1 minuto. Bevi ogni volta che la canzone cambia.",
    "Chandelier: Circondate un bicchiere centrale con altri bicchieri più piccoli. I giocatori devono far rimbalzare una moneta nel bicchiere centrale. Se ci riescono, tutti bevono.",
    "Pyramid: Distribuisci le carte a forma di piramide. I giocatori nominano una carta, se la trovano possono dare sorsi agli altri.",
    "Drunk Twister: Gioca a Twister, ma prima di fare una mossa, il giocatore deve bere.",
    "Anchorman: Dividi i giocatori in due squadre. Una squadra inizia bevendo la propria bevanda. Quando un giocatore finisce, il prossimo inizia.",
    "Boat Race: I giocatori si mettono in fila e devono bere uno dopo l'altro come in una staffetta. La squadra che finisce per prima vince.",
    "High or Low: Un giocatore distribuisce una carta. Gli altri devono indovinare se la prossima carta sarà più alta o più bassa. Chi sbaglia, beve.",
    "Drunk Waiter: I giocatori devono portare un vassoio pieno di bicchieri lungo un percorso a ostacoli. Se versano qualcosa, devono bere.",
    "Bierkastenrennen: Due persone devono correre mentre trasportano una cassa di birra. Devono finire tutte le birre prima di tagliare il traguardo.",
    "Spoons: Un gioco di carte in cui i giocatori cercano di ottenere quattro carte uguali. Una volta che qualcuno lo fa, deve prendere un cucchiaio, e così devono fare gli altri. Chi resta senza cucchiaio, beve.",
    "Cheers to the Governor: Il gioco inizia a contare da 1 a 21, ma a ogni numero 21 raggiunto, i giocatori aggiungono una nuova regola.",
    "Battle Shots: Versione alcolica di Battaglia Navale. Quando una nave viene colpita, il giocatore deve bere.",
    "The Good, the Bad and the Ugly: Scrivi tre categorie su un foglio (Buono, Cattivo, Brutto). I giocatori devono nominare qualcosa in ogni categoria. Chi non riesce, beve.",
    "Shot Chess: Variante degli scacchi. Ogni pezzo catturato richiede che il giocatore beva.",
    "Drunk Uno: Gioca a Uno, ma con regole aggiuntive alcoliche. Per esempio, se devi pescare quattro carte, devi anche bere quattro sorsi.",
    "Snakes and Ladders: Gioca al classico gioco da tavolo, ma ogni volta che sali su una scala o scendi da un serpente, bevi.",
    "Medusa: I giocatori si siedono in cerchio e devono guardare in basso. A un comando, tutti alzano la testa e guardano un altro giocatore. Se due giocatori si guardano l'un l'altro, devono gridare 'Medusa!' e bere.",
    "Caps: I giocatori devono lanciare i tappi delle bottiglie cercando di farli cadere nei bicchieri degli avversari. Chi colpisce, fa bere l'avversario.",
    "Circle of Trust: Variante del Circle of Death, ma con un focus sul costruire un cerchio perfetto di bicchieri intorno al King's Cup. Chi rompe il cerchio, beve.",
    "Around the World: Un gioco di carte con diverse fasi (es. indovinare il colore della carta, più alto o più basso). Chi sbaglia, beve.",
    "Stump: I giocatori devono martellare un chiodo nel ceppo di un albero. Chi sbaglia, beve.",
    "Wizard Staff: I giocatori devono impilare lattine di birra vuote per costruire una 'bacchetta'. Più è alta, più poteri acquisisci, ma devi finire ogni lattina per aggiungerla.",
    "Edward 40 Hands: Variante di Edward 40 Hands, ma con altre bevande. Attacca le bottiglie alle mani e finisci prima di toglierle.",
    "Baseball: Variante del Beer Pong con basi. Ogni base raggiunta corrisponde a un diverso tipo di bevuta.",
    "Queens: Gioco di carte dove ogni regina ha una regola speciale. Segui la regola o bevi.",
    "Drunk Tower: Costruisci una torre di bicchieri e lancia dadi. Chi fa crollare la torre, beve.",
    "Drink While You Think: I giocatori devono nominare una celebrità il cui cognome inizia con la stessa lettera del cognome precedente. Bevi mentre pensi.",
    "Power Hour: Bevi un sorso di birra ogni minuto per un'ora. È un gioco di resistenza.",
    "Edward Wine Hands: Variante di Edward 40 Hands, ma con bottiglie di vino. Finisci le bottiglie prima di toglierle.",
    "Edward Wine Hands: Variante di Edward 40 Hands, ma con bottiglie di vino. Gli stessi giocatori devono finire le bottiglie prima di poterle togliere.",
    "Cheers to the Governor: Il gioco inizia a contare da 1 a 21, ma a ogni numero 21 raggiunto, i giocatori aggiungono una nuova regola.",
    "Anchorman: Dividi i giocatori in due squadre. Una squadra inizia bevendo la propria bevanda. Quando un giocatore finisce, il prossimo inizia.",
    "Drunk Jenga: Variante di Jenga con regole alcoliche. Chi fa cadere la torre, beve.",
    "Flip, Sip or Strip: Lancia una moneta. Se indovini correttamente, passi il turno. Se sbagli, bevi o togli un indumento.",
    "Irish Poker: Distribuisci quattro carte a ciascun giocatore, coperte. I giocatori devono indovinare se le loro carte sono rosse o nere, più alte o più basse, dentro o fuori una gamma, e devono bere per ogni errore.",
    "Roxanne: Ascolta la canzone 'Roxanne' dei The Police. Ogni volta che senti 'Roxanne', le ragazze bevono. Ogni volta che senti 'put on the red light', i ragazzi bevono.",
    "Power Tower: Usa i bicchieri di carta per costruire una torre. Ogni volta che la torre cade, il giocatore che la stava costruendo beve.",
    "Drunk Waiter: I giocatori devono portare un vassoio pieno di bicchieri lungo un percorso a ostacoli. Se versano qualcosa, devono bere.",
    "Boat Race: Dividi i giocatori in due squadre. Ogni squadra deve bere la propria bevanda il più velocemente possibile. Il primo che finisce passa al successivo nella fila, finché una squadra vince.",
    "Battle Shots: Versione alcolica di Battaglia Navale. Quando una nave viene colpita, il giocatore deve bere.",
    "Spoons: Un gioco di carte in cui i giocatori cercano di ottenere quattro carte uguali. Una volta che qualcuno lo fa, deve prendere un cucchiaio, e così devono fare gli altri. Chi resta senza cucchiaio, beve.",
    "Drunk Uno: Gioca a Uno, ma con regole aggiuntive alcoliche. Per esempio, se devi pescare quattro carte, devi anche bere quattro sorsi.",
    "Truth or Drink: Un giocatore fa una domanda personale a un altro. Se il giocatore non vuole rispondere, deve bere.",
    "Russian Roulette: Riempite uno shottino con vodka e altri con acqua. I giocatori bevono a turno senza sapere cosa stanno per bere.",
    "Boat Race: Dividi i giocatori in due squadre. Ogni squadra deve bere la propria bevanda il più velocemente possibile. Il primo che finisce passa al successivo nella fila, finché una squadra vince.",
    "Chandelier: Circondate un bicchiere centrale con altri bicchieri più piccoli. I giocatori devono far rimbalzare una moneta nel bicchiere centrale. Se ci riescono, tutti bevono.",
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
    <div className="container-wrapper">
      <div className="container">
        <h1>I consigli della nonna alcolizzata</h1>
        <h4>
          Made with love by{" "}
          <a
            href="https://www.instagram.com/solomon.taiwo/"
            target="_blank"
            rel="noreferrer"
          >
            Solomon
          </a>
        </h4>
        {!showNextButton && (
          <button onClick={handleClick}>Fatti consigliare</button>
        )}
        {showNextButton && (
          <>
            <p className="phrase">{currentPhrase}</p>
            <button onClick={handleNextPhrase}>Altro gioco</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
