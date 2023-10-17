function solve(arr){
    let register = [];
    for (const info of arr) {
        let [name, level, items] = info.split(" / ");
        register.push({name, level, items})        
    }
    register.sort((a,b)=>a.level - b.level)
    for (let y of register){
        console.log(`Hero: ${y.name}`)
        console.log(`level => ${y.level}`)
        console.log(`items => ${y.items}`)
    }
    

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )