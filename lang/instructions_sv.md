# Instruktioner

* [Video som förklarar spelet bra **(på engelska!)**](https://youtu.be/KuL_R60_320?t=225)
* Grunden för denna implementering är att **varje frö genererar en unik uppläggning**.
	* Detta betyder att när två personer matar in samma frö kommer de att ha samma måltavla och samma ord.
	* Det är då möjligt för **ledtrådsgivaren** att öppna uppläggningen på sin egen dator/telefon och **kika** på målet utan att behöva dela det i videosamtalet.
	* Kopiera-knappen bredvid fröet kommer automatiskt att kopiera en länk med det aktuella fröet till urklippet.
* Funktioner:
	* Frö ("seed"): genererar en unik uppläggning. Fröet kan vara en **valfri kombination av siffror och bokstäver**. (Tips: att använda ord gör det lättare att dela fröet.)
	* Ny ledtråd ("New Clue"): genererar ett nytt slumpmässigt frö.
	* Gissa ("Guess"): Jämför markörens nuvarande position mot måltavlans position och visar hur många poäng du fick.
	* Kika ("Peek"): avslöjar måltavlan.
	* Rensa ("Clear"): Raderar måltavlan och gissningen.
	* Procent ("Percentages"): Växlar visningen av procentsatserna under markören. (Den officiella regelboken avråder från att använda procentsatser för att diskutera spelbrädet, men jag har märkt att de gör uppspelning via videosamtal mycket lättare.)
	* Det finns två manuella poängtavlor längst ner för att hålla reda på dina poäng.
