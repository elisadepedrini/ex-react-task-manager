📌 Milestone 1 - Setup e Routing
Clonare il backend del progetto, impostare il frontend con Vite e configurare il routing con react-router-dom.

Clonare e avviare il backend:

Per gestire i task, utilizzeremo un backend già pronto.

Cloniamo il repository

https://github.com/boolean-it/react-task-manager-back
e avviamo il server con:

npm install
npm run start
Dopo qualche secondo, nel terminale apparirà un messaggio simile a:

✅ Server in ascolto su http://localhost:3001
Questo URL dovrà essere utilizzato per configurare il frontend.

Impostiamo il frontend:

[x] Creiamo il progetto con Vite.
[x] Installiamo react-router-dom nel progetto.
[x] Creiamo il router principale in App.jsx utilizzando BrowserRouter.

Definiamo due pagine principali:

[x] Lista dei Task (TaskList.jsx) → mostrerà l'elenco dei task.
[x] Aggiungi Task (AddTask.jsx) → conterrà il form per aggiungere un nuovo task.
[x] Aggiungere una barra di navigazione con NavLink, per permettere all'utente di spostarsi tra le pagine.

[x] Definire le rotte con Routes e Route, associando ogni percorso alla rispettiva pagina.


📌 Milestone 2 - Setup Context API e Fetch Iniziale
Creare un contesto globale per la gestione dei dati e recuperare la lista dei task dall'API.


Salvare l'URL dell'API nel file .env del progetto frontend:
[x] Creare un file .env nella cartella del progetto frontend e aggiungere lo URL della API raccolto alla Milestone 1.
In questo modo, l'URL sarà accessibile in tutto il progetto senza doverlo scrivere manualmente nel codice.

[x] Creare un Context API (GlobalContext) per gestire lo stato globale dell'applicazione.

[x] Definire uno useState all'interno del provider, per memorizzare la lista dei task.

[x] Effettuare una richiesta GET a /tasks al caricamento dell'app, utilizzando useEffect, e salvare i dati nello stato.

[x] Stampare in console i dati ricevuti per verificare il corretto recupero delle informazioni.

[x] Rendere disponibile il GlobalContext.Provider in App.jsx, avvolgendo l'intera applicazione.