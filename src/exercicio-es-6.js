    const estudantes = [
        { name: "Marcus", nota: 8 },
        { name: "Larissa", nota: 7 },
        { name: "Sany Fernanda", nota: 4 },
        { name: "Beatriz", nota: 9 },
        { name: "Nivaldo", nota: 5 },
    ];
    
    function somenteAprovados(estudantes) {
        const estudantesAprovados = estudantes.filter(
        (estudantes) => estudantes.nota >= 6
        );
        return estudantesAprovados;
    }
    
    console.log(somenteAprovados(estudantes));