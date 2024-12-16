Changelog Anton Karlsson JSU23 - Labb 3 TypeScript och Testing.

2024-12-03

- Satte initiala filer på plats och installationer av paket
- Fixade första starten och filer för cypress samt strukturera hur jag vill ha min databas. Inga inlägg där ännu.
- Satt första delen av min frontend.
- Felstavad rating.

2024-12-04

- Skrivit diagram, feature för bdd och börjat på testfilen för TDD.
- Diagram -> BDD -> TDD är färdigt.
- Skapat första endpoint för comics och en mapp för delade interfaces.

2024-12-05

- Gjorde lite tydligare diagram.
- Lade om TDD och BDD till ett E2E-test för att kunna uppfylla båda krav samtidigt.
- Ändrat då jag såg filändelse på test samt viewport och något annat smått. Börjat bygga komponent som ska testas.

2024-12-06

Stor dag idag.

- Satt styling för view på allcomics, färdigställt addcomic och fått mitt kombinerade tdd/bdd att fungera. Även omstrukturerat databas till snake. Lagt till post endpoint i min index.js.
  Toast fungerar nu vid varje post. Gjort om så att min DB har snake och min frontend tar emot bara namnet author/title etc.

2024-12-09

- Liten push, nu är hela test BDD/TDD färdigt. Toast fungerar och frontend uppdateras efter toast är körd. Allt klart, även skapat ReviewSection component som jag ska börja arbeta på nu.
- Ändrat lite färger, lagt till ett till test för komponent allcomics och se så att den hittar ordentligt.

2024-12-10

- Lagt till endpoint för delete, lagt till endpoint för singlecomic, stylat om hela första sidan, single page och modal, lagt till ytterligare interface och en overall lookchange samt lagt in react-router för att styra sidan, lade även till en banner med företagens logor för att förtydliga deras rättigheter.

2024-12-11

- Småändringar.
- Idag gick nästan hela dagen åt att försöka fixa min testconfig som inte går ihop. Tar hjälp imorgon under handledning.

2024-12-12

- Lagt in latest reviews, lagt till fler endpoints. Inte gjort klart komptest SingleComic, problem med route-params. Lagt till Mockingfil och lite andra småändringar. Även ändrat lite interface för att lägga så mycket som möjligt på databas istället för frontend.
- Bråkat större delen av dagen med mina route-params som fortfarande inte funkar, troligen tar jag bort det och tänker om med komponenttestet.

2024-12-13

- Pushar upp TDD-test. Ska börja bygga komponenten nu.
- Snabb redigering testet, kom på att jag behöver props.
- Skrev om funktion i SingleComic då jag kommer behöva skicka den. Samt en sista ändring i test innan bygge interface och komponentnamn får inte krocka.
- Skrivit klart komponent för att posta reviews, tagit fram i frontend alla reviews på sida. Några nya endpoints tillhörande reviews post/delete. Nya interfaces för tidigare nämda och flyttat toast till app så den blir tillgänglig över hela applikationen. Även ändrat databas så att user på reviews inte är unique.

2024-12-16

- Lagt om lite props och en till komponent för table med alla comics.
- Tester är korrekt och fungerar alla som de ska.
