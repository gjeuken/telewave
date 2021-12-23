# Basic instructions

* [Good video explaining the game](https://youtu.be/KuL_R60_320?t=225)
* The basis of this implementation is that **each seed generates a unique board**.
	* This means that when two people input the same seed, they will have the same target position and words.
	* It is possible then for the **clue giver** to open the board on their own computer/phone and **peek** at the target without having to share it in the videocall.
	* The copy button besides the seed will automatically copy a link with the current seed to the clipboard.
* Functions:
	* Seed: generates a unique board. The seed can be **any combination of numbers and letters**. (Tip: using words makes it easier to share the seed.)
	* New clue: generates a new random seed.
	* Guess: Compares your current position of the dial against the target, and shows you how many points you got.
	* Peek: reveals the target.
	* Clear: Erases the target and guess from the board.
	* Percentages: Toggles the display of the percentages under the dial. (The official rulebook advises against using percentages to discuss the dial, yet I've found that they make playing via videocall much easier.)
	* There are two manual score boards at the bottom for keeping track of your points.
