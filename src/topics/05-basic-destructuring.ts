interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

//const song = 'New song';
// const { song:anotherSong, songDuration:duration, details } = audioPlayer; //Desestructuracion de un objeto, interfaz, clase
// const {author} = details;
 
// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta']; //Destructuracion de un array

console.log('Personaje 3: ', trunks);

export {};