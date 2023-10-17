function solve(arr){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let number = arr.shift();
    let type = arr.pop();
    console.log(type);
    for (let x of arr){
        let [typeList, name, time] = x.split("_");
        let currentSong = new Song(typeList, name, time);
        songs.push(currentSong);
    }
    if(type === "all"){
        songs.forEach((i) => console.log(i.name));

    }
    else {
        let filtered = songs.filter((i) => i.typeList === type);
        filtered.forEach((i) => console.log(i.name));
    }
    

}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )