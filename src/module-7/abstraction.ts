// abstract class Animal {
//   abstract makeSound(): void; 

//   move(): void {         
//     console.log("Moving...");
//   }
// }

/* oop-abstraction*/

// interface MediaPlayer{
//     play():void;
//     pause():void;
//     stop():void;
// }
// class MusicPlayer implements MediaPlayer{
//     play(): void {
//         console.log('music is play');
//     }
//     pause(): void {
//         console.log('music is pause');
//     }
//     stop(): void {
//         console.log(`music is stop`);
//     }
// }

// const music= new MusicPlayer()
// music.play()
// music.pause()
// music.stop()


abstract class MediaPlayer{
    abstract play():void;
    abstract pause():void;
     abstract stop():void;
}

class Music extends MediaPlayer{
    play(): void {
        console.log('music plaing...........');
    }
    pause(): void {
        console.log('music pause..........');
    }
    stop(): void {
        console.log('music stopping.........');
    }
}

const music = new Music()
music.play()
music.pause()
music.stop()