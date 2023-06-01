const authEndpoint =  "https:/accounts.spotify.com/authorize?" ;
const clienteID =  "2e852d90a8d6499aa441e95566529f9b" ;
const redirectUri = "http://localhost:3000" ; 
const scopes = [ "playlist-read-private" , "user-library-read"]; 

export const loginEndpoint = `${authEndpoint}client_id=${clienteID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true` ;

