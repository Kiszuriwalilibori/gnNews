# gnNews

## Cele projektu

-   Wykazać znajomość Reacta, Reduxa, TS, Redux toolkit, react-test-lib
-   Posłuzyć jako okazja do przećwiczenia tychże technologii w praktyce
-   Przybliżyć autora do podjęcia pracy w gn Studio

## Funkcjonalności

Apka początkowo pobiera ze źródła artykuły pochodzące z kilku krajów i wyświetla je wszystkie na podstawie początkowej listy krajów.

Do prawidłowego działania wymaga obecności klucza dostępu do [https://newsapi.org/s/poland-news-api]. Bez klucza wyświetli tylko ostrzeżenie.

Do prawidłowego działania potrzebny jest także internet ;) Wprawdzie apka wyświtliłaby się z pustymi danymi ale brakowałoby flag i ogólnie nie wyglądałoby to dobrze. Zatem przy braku intenetu jest tylko pusty ekran z komantarzem

Użytkownik ma możliwość wyboru artykułów pochodzących z określonego państwa za pomocą przełączników w panelu bocznym.

Lista wyboru państwa w sidebarze generuje się dynamicznie, trafią tam państwa z początkowej listy jak powyżej, ale tylko jeżeli pobrane zostały dla nich artykuły( nie można wykluczyć, że lista artykułów w źródle jest pusta).

Wybór państwa powoduje przeniesienie do podstrony państwa gdzie dostępne są tylko artykuły dla danego państwa.

Przeniesienie się poprzez wpisanie adresu w pasku przeglądarki z powrotem do strony głównej powoduje wyczyszczenie kryterium państwa i wyzerowanie przełączników. W sumie zastanawiałem się co ma pokazywać strona główna czy też /countries/ i nie mam lepszego pomysłu - wszystkie artykuły z wszystkich krajów na stronie countries to brzmi logicznie, poza tym na dzień dobry może dobrze mieć dostęp do wszystkich danych a dopiero potem je zawężać.

Do dyspozycji uzytkownika jest także guzik "Reset" realizujący tą sama ąkcję

Dla adresów innych niż główna, /countries/ i strony krajów wyświetla się strona błędu.

Komponenty <Route> dla krajów są generowane dynamicznie z listy krajów ze store ale nie przez :id tylko przez zmapowanie listy krajów w store na <Route>. Jest tak dlatego, aby po wpisaniu z palca w pasku adresu adresu dla którago apka nie przedwiduje treści, np .../countries/test nie być przekierowanym na podstronę test (bo co niby tam by miało być), tylko na stronę błędu.

Aplikacja umozliwia zmianę języka interfejsu polski <> angielski.

## Istotne dla sporządzenia i uruchomienia lokalnej kopii

### Kopia plików

Zawartość repozytorium należy skopować w dowolny sposób, umieścić w decelowym katalogu a następnie wykonać komendę npm install.Nie sprawdzałem i nie gwarantuję, że zadziała z yarn.

### Klucz

Aplikacja wymaga klucza dostępu do [https://newsapi.org/s/poland-news-api]. Po uzyskaniu klucz należy zapisać go w pliku .env w glównym katalogu projektu jako wartość zmiennej REACT_APP_API_KEY

## Istotne dla kustomizacji lokalnej kopi

### Lista krajów

W pliku fixtures.ts jest eksport o nazwie countryCodes, który decyduje z ilu i jakich krajów newsy będą pobierane. W razie zainteresowania, więcej kodów można pobrać ze strony
[https://newsapi.org/docs/endpoints/sources]
z pozycji country.

### Rozbudowa o dodatkowe języki

Poza uzupełnieniem zawartości /i18n/locales/ należy conajmniej zmienić zawartość typPermittedLanguages (aktualna wartość "en" | "pl").
Dla pełnego efektu także funkcję toDataLocale

## Uwagi i komentarze ogólne

### Slices i selektory

Ponieważ napisaliście, że redux- toolkit jest dla Was istotny, zrobiłem w tej apce reduxa na slice'ach co czasami może wyglądać trochę nienaturalnie. Tak samo z powszechnym użyciem selektorów.

### Czas i kopiowanie

Nie chcieliście abym poświęcił na to ponad 12 godzin, toteż niektóre fragmenty są żywcem skopiowane z innych projektów. Oczywiście starałem się wyczyścić apkę z takich pozostałości, ale nie było to priorytetem. Z tej też przyczyny np modale są praktycznie żywcem przeniesione z MUI.

### Czas i style

Zastosowałe CSS/SASS i MUI.Nie żebym unikał Styled Components (są stosowane w innych projektach), ale jak trzeba na szybko, to nie ma jak SCSS. Modyfikacje komponentów MUI nie są przemieszane z SCSS (tzn nie modyfikuję w plikach .scss klas z MUI).

### Położenie sidebara

Sidebar w widoku mobile ląduje pod headerem, spradziłem inne opcje ale chowanie/ wysuwanie jest trochę klopotliwe (i po rozwinięciu nie wygląda najlepiej), zostawić nie można nawet z pomniejszonym fontem bo wygląda fatalnie, a tak wygląda całkiem nieźle.

### Czas

API w wolnym planie ma ograniczoną drastycznie liczbę pobrań co wydłużyło robotę o jeden dzień. Dlatego, ale też i trochę dla testów, stany początkowe mogą być zaskakujące (acz nie wpływa to na pracę apki w zuważalny sposób). Krótko mowić musiałem stworzyć fejkowe dane i odpalać na tych fejkowych danych, a z prawdziwym endpointem łączyłem się od wielkiego dzwonu.

### Dane

Ogolnie dane są strasznie dziurawe. Radko kiedy jest ilustracja, z treścią podobnie. Kafle w tej sytuacji nie wyglądają najlepiej. Poza tym API w dokumentacji tylko dla contentu podaje maksymalną ilość znaków, aprzydatna byłaby ona takze dla title i description. Nie bardzo wiadomo co ile miejsca może potrzebować

## Testy

Nie napisaliście czy jednostkowe, czy end-to end, więc jest taka sobie mieszanka. W testach pojawiają się także zasadniczo nieprawdopodbne scenariusze (wybrano państwo spoza listy państw do wyboru), ale tylko w celu prostszego sprawdzenia pustych danych.

## TODO

sprawdzić wszędzie czy nie da się jakoś połączyć eksportów

coś na pustą tablicę, jakieś nodata found komentarz
