function solve(names){
    let regex = new RegExp('\\b[A-Z][a-z]+ [A-Z]{1}[a-z]+\\b', 'gm')
    let validNames = [];
    while((x = regex.exec(names)) !== null){
        validNames.push(x[0])
    }
    console.log(validNames.join(" "))
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
)