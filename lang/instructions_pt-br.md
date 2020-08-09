# Instruções Básicas

* [Um bom vídeo explicando as regras (Em inglês)](https://youtu.be/KuL_R60_320?t=225)
* A base dessa implementação é que: **cada semente corresponde a um único jogo**.
	* Ou seja, se duas pessoas colocarem a mesma semente, elas terão as mesmas palavras binárias e o mesmo alvo
	* Isso permite que o **responsável pela pista** **veja** o alvo em seu computador / celular sem ter que mostrar na videochamada. 
	* O botão de copiar coloca automaticamente, em sua área de transferência, o link do site com a sua atual semente. 
* Funções:
	* Seed: corresponde à semente do jogo. As sementes podem ser formadas por **qualquer combinação de números e letras**. (Dica: O uso de palavras facilita o compartilhamento da semente.)
	* New clue: gera uma nova semente aleatória.
	* Guess: Compara sua posição atual com o alvo e mostra quantos pontos você obteve.
	* Peek: Revela o alvo.
	* Clear: Esconde o alvo.
	* Percentage: Exibe ou esconde o indicador das porcentagens. (O livro de regras oficial desaconselha o uso de porcentagens, entretanto, elas facilitam na jogabilidade por videochamada.)
	* Há dois placares manuais, no canto inferior esquerdo, para a marcação dos pontos.
