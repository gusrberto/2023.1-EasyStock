const formatTelephone = (telephone) => {
    if (isNaN(telephone)) {
        throw new TypeError("Digite um número!");
    } else if (telephone.length != 8 && telephone.length != 9 
              && telephone.length != 10 && telephone.length != 11) {
        throw new TypeError("Número de dígitos inválido! Digite 8 ou 9 caso haja DDD, 10 ou 11 caso haja.");
    }

    const hasDDD = telephone.length >= 10;

    const has9digits = telephone.length == 9;
    const has11digits = telephone.length == 11;

    const ddd = hasDDD ? telephone.slice(0, 2) : '';

    let part1 = '';
    let part2 = '';

    if (!hasDDD) {
        part1 = has9digits ? telephone.slice(0, 5) : telephone.slice(0, 4);
        part2 = has9digits ? telephone.slice(5) : telephone.slice(4);
    } else {
        part1 = has11digits ? telephone.slice(2, 7) : telephone.slice(2, 6);
        part2 = has11digits ? telephone.slice(7) : telephone.slice(6);
    }
    
    const formattedTelephone = hasDDD ? `(${ddd}) ${part1}-${part2}` : `${part1}-${part2}`;

    return formattedTelephone;
}

export { formatTelephone };