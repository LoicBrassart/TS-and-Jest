Je veux pouvoir créer des personnages pour Donjons et Dragons 5ème édition

- Un personnage est constitué de six stats (Force, Dexterité, Constitution, Intelligence, Sagesse, Charisme)
  - Je me laisse la possibilité (pour des personnages peu importants) de ne fournir que les stats Force, Dexterite et Constitution
- Chaque stat doit être comprise entre 1 et 20
- Pour chaque stat, je n'ai pas besoin de sa valeur mais seulement de son "modificateur"
  - Le modificateur est à 0 pour une stat à 10 ou 11, puis augmente de 1 pour chaque palier de deux points (12 -> +1, 19 -> +4, ...)

Je veux pouvoir faire des jets sur des compétences ("Fais moi un jet de Médecine")

- Il existe une liste finie de compétences
- Chaque compétence a une stat par défaut qui lui est associée (Ex: "Médecine" est associée à la Sagesse)
- Je veux pouvoir connaitre le modificateur à un jet de compétence spécifique sans la lancer
- Le résultat d'un jet se calcule avec un dé à 20 faces + le modificateur de la stat associée à la compétence. Attention, il y a des exceptions:
  - Un 1 au dé signifiera forcément un échec
  - Un 20 au dé signifiera forcément une réussite
- Je veux pouvoir remplacer à la volée la stat associée à une compétence ("Fais moi un jet de Medecine(Intelligence) pour du savoir théorique")
- Je veux gérer l'avantage (lance une compétence deux fois, et garde le meilleur résultat) et de désavantage (lance une compétence deux fois, garde le moins bon résultat)
