# Starta projektet.

## Kommandon och hänvisningar nedan refererar till att man kör de via sin terminal.

### 1. Packa upp zip-fil. Öppna mappen i termialen.

### 2. Navigera till backend och skriv npm install.

### 3. Navigera till frontend och skriv npm install.

### 4. Skapa en PSQL databas. Använd filen DB.sql för att göra detta. Denna kommer skapa en liten databas med den information som behövs för att köra projektet.

### 5. Skapa en environment fil i backend för den databas vi just skapa. Skapa en .env och lägg in följade "PGURI=postgres://DITT_ANVÄNDARNAMN:DITT_LÖSENORD@localhost/graphicmemo"

### 6. Navigera till backend och skriv npm run dev.

### 7. Navigera till frontend och skriv npm run dev. Klicka CTRL + MOUSE 1 på url som kommer upp så vi öppnar adressen i webbläsaren.

### 8. Vi kan även öppna ett nytt terminalfönster och skriva npx cypress open för att få tillgång till interfacet för att köra tester. Det går även bra att använda npx cypress run för att köra i terminalen och då måste vi också köra npx cypress run --component för att få med komponenttester.

# Mål projekt.

## Summerar kort nedan var några av de viktiga målen uppnåtts.

### Jag gjorde mitt BDD och TDD vid samma test. Detta finns under AddingComic.feature samt AddingComic.ts i E2E testerna.

### UML-diagram hittas i root/docs där jag gjorde ett sekvensdiagram över hur man lägger till en comic.

### Programmeringskonstruktioner så tänker jag på koden överlag och väljer hur jag skriver den men också extra fokus på hur jag skrev databas frågor för att ta bort viss belastning på frontend.

### Code coverage kan kontrolleras via coverage/lcov-report/index.html -> Open with live server. Efter att man i frontend mappen har kört tester med npx cypress run och npx cypress run --component.

### Fick också till GitHub actions och har lagt till en secret i repot. Denna använder databas via render.
