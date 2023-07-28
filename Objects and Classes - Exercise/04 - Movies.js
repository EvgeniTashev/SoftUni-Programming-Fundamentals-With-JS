function solve(arr){
    let movieArr = [];
    
    arr.forEach(info => {
        if(info.includes("addMovie ")){
            let name = info.split("addMovie ")[1];
            movieArr.push({name});
        }
        else if(info.includes("directedBy")){
            let [name, director] = info.split(" directedBy ");
            let movie = movieArr.find(m => m.name === name);
            if(movie){
                movie.director = director;
            }

        }
        else if (info.includes("onDate")){
            let [name, date] = info.split(" onDate ");
            let movie = movieArr.find(m => m.name === name);
            if(movie){
                movie.date = date;
            }
        }
        
    });
    movieArr.forEach(element => {
        if (element.hasOwnProperty("name") && element.hasOwnProperty("date") && element.hasOwnProperty("director"))
        console.log(JSON.stringify(element));
        
    });
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )