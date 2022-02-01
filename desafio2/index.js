var isValidSudoku = function(folha) {
    
    const linha = [], coluna = [], bloco = [];
    for(let i = 0; i < folha.length; i++) {
        linha.push(new Set());
        coluna.push(new Set());
        bloco.push(new Set());
    }
    
    for(let i = 0; i < folha.length; i++) {
        for(let j = 0; j < folha[i].length; j++) {
            const cell = folha[i][j];
            if(cell === '.') continue;
            const blocoNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            if(linha[i].has(cell) || coluna[j].has(cell) || bloco[blocoNum].has(cell))
                return false;
            linha[i].add(cell);
            coluna[j].add(cell);
            bloco[blocoNum].add(cell);
        }
    }
    
    return true
    
  };