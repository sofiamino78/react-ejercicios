import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({search, lyric, bio}) => {
    if(!lyric || !bio) return null; 
    return (
        <>
        {lyric.error || lyric.name === "AbortError"?(
         <Message 
          msg={`Error: no existe la canción ${search.song}`}
          bgColor="#dc3545"
        />
        ):(
            <SongLyric/>
        )}
        {bio.artist?<SongArtist/>:<Message/>}
        </>
    );
};

export default SongDetails;