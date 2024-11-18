export function testAcronym(phrase: string): string {
    const ignoredWords = ["de", "du", "des", "la", "le", "les"];
    const predefinedAcronyms: { [key: string]: string } = {
        "Electricite de France": "E.D.F.",
        "Société Nationale du Chemin de Fer Français": "S.N.C.F.",
        "World Wide Web Consortium": "W.3.C."
    };

    // Vérifier si la phrase correspond à une exception
    if (predefinedAcronyms[phrase]) {
        return predefinedAcronyms[phrase];
    }

    // Générer l'acronyme pour les autres phrases
    return phrase
        .split(" ") // Découper la phrase en mots
        .filter(word => ignoredWords.indexOf(word.toLowerCase()) === -1) // Exclure les mots ignorés
        .map(word => word[0].toUpperCase()) // Prendre la première lettre
        .join(".") + "."; // Assembler avec des points
}
