# gnNews

[![N|Solid](https://www.clipartmax.com/png/middle/379-3794436_react-icon-react-icon.png)](https://nodesource.com/products/nsolid)

## Istotne dla uruchomiania lokalnego

### Klucz

Aplikacja wymaga klucza dostępu do [https://newsapi.org/s/poland-news-api]. W przypadku zainteresowania skopiowaniem i uruchomieniem lokalnie, należy uzyskać taki klucz, a następnie zqapisać go w pliku .env w glównym katalogu projektu jako waetość zmiennej REACT_APP_API_KEY

### Pozostałe

Wszystko, co należy zrobić to skopiować w dowolny sposób zawartość repo, odpalić npm install i zrobić to, co napisałem o kluczu powyżej. Nie sprawdzałem z yarn.

## Istotne dla zrozumienia i ew. rozwijania apki

### Klucz jeszcze raz

Jak napisałem powyżej aplikacja wymaga klucza, co więcej obecność klucza w podanej lokalizacji jest sprawdzana na samym początku wykonywania kodu (apka się be zklucza nie wywali, ale nic nie pokazuje)

### Lista krajów

W pliku fixtures.ts jest eksport o nazwie countryCodes, który decyduje z ilu i jakich krajów newsy będą pobierane. W razie zainteresowania, więcej kodów można pobrać ze strony
[https://newsapi.org/docs/endpoints/sources]
z pozycji country.
Lista wyboru państawa w sidebarze generuje się dynamicznie, trafią tam kraje z listy jak powyżej jeżeli mają articles; jezęli nie - to nie.

### Ścieżki 1

Ścieżki zrealizowane zgodnie z wytycznymi zadania plus dwie uwagi: na ścieżce /countries/ czyli bez wyboru kraju dostaniemy wszystkie newsy z wszystkich krajów, skąd były pobierane (patrze poprzedni punkt.) Po wybraniu kraju w sidebarze, zgodnie z wytcznymi, dostępne są tylko newsy z kraju, ale jeżeli powrócić z palca na stronę /countries/, wybór kraju i filtrowanie będą wyczyszczone.

### Ścieżki 2

Routes dla krajów są generowane dynamicznie z listy krajów,, ale nie przez :id tylko dosłownie, przez zmapowanie listy krajów na komponenty <Route>. Jest tak dlatego, aby po wpisaniu z palca w pasku adresu nieistniejącego albo niepobieranego adresu, np .../countries/xx nie być przekiorowanym na stronę xx (bo co niby tam by miało być), tylko na stronę błędu. Być może są innne rozwiązania, ale dla prostoty i wygody zrobiłem jak zrobiłem.

### Ogólnie 1

Nie chcieliście abym poświęcił na to ponad 12 godzin, toteż niektóre fragmenty są żywcem skopiowane z innych projektów. Generalnie starałem się wyczyścić apkę ze śladów innych projektów ale patrz poprzednie zdanie, nie było to priorytetem.

### Stylizacja

Macie tutaj CSS/SASS i MUI.Nie żebym unikał Styled Components (są stosowane w innych projektach), ale jak trzeba na szybko, to nie ma jak SCSS. Modyfikacje komponentów MUI nie są przemieszane z SCSS (tzn nie modyfikuję w plikach .scss klas z MUI).
Może zaskakiwać użycie dużych liter do nazw niektórych klas. Taki nawyk z dużego projektu - pierwsza klasa z dużej litery, wszystko co od niej zależnie już nie.

### Sidebar

Sidebar w mobilu ląduje pod headerem, spradziłem inne opcje ale chowanie/ wysuwanie jest trochę klopotliwe (i po rozwinięciu nie wygląda najlepiej), zostawić nie można nawet z pomniejszonym fontem bo wygląda fatalnie, a tak wygląda całkiem nieźle.

### Ogólne 2

API w wolnym planie ma ograniczoną drastycznie liczbę pobrań co wydłużyło robotę o jeden dzień. Dlatego, ale też i trochę dla testów, stany początkowe mogą być zaskakujące (acz nie wpływa to na pracę apki w zuważalny sposób). Krótko mowić musiałem stworzyć fejkowe dane i odpalać na tych fejkowych danych, a z prawdziwym endpointem łączyłem się od wielkiego dzwonu.

### Dane

Ogolnie dane są strasznie dziurawe. Radko kiedy jest ilustracja, z kontentem podobnie. Kafle w tej sytuacji nie wyglądają tak, jakby mogły.

sprawdzić wszędzie czy nie da się jakoś połaczyć eksportów

UWAGA: wprawdzie tozałatałem ale sprawa wymaga bliższego zbadania. Do helpera w selektorach

const createCountryNewsNumber = (news: []) => {
if (!news) return 0;
const number = news.length;
return number;
};

trafia news undefined w sytuacji, kiedy newsy nie zawierają newsów z kraju aktywnego. Zasadniczo to nie ma prawa sie zdarzyć ale w testach to wyszło bo trzeba bylo zasymulowac pusty wynik.
