import React from 'react';
import '../CurrentPlaylists/CurrentPlaylists.css';
import UserPlaylist from '../UserPlaylist/UserPlaylist';
import { RiseLoader } from 'react-spinners';



class CurrentPlaylists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        } 
    }


    // loading bar
    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props) {
        this.setState({loading: false});
        }
        
    }

    // this function will handle the click on a playlist div and update the state of playlistTracks
    // will need to pass a function down from App.js? new fetch to get tracks from selected playlist?

    // this component will render a list of the current playlists in the user's spotify. It will render Playlist
    render() {


        let playlistObjs = this.props.currentPlaylists;
        //console.log(playlistObjs);
        return (
            <div className="playlistDiv">
                    <h1 className="modalContentHeader">Select a Playlist to edit</h1>

            <RiseLoader
          color={'#123abc'} 
          loading={this.state.loading} 
        />
            <ul className="playlists">
              {playlistObjs.map(
                    playlistObj => {
                        return <UserPlaylist 
                        key={playlistObj.id}
                        getPlaylistTracks={this.props.getPlaylistTracks}
                        playlistObj={playlistObj}
                        closeModal={this.props.closeModal}
                        onNameChange={this.props.onNameChange}
                        />;

              })
              }
              </ul>
            </div>
        );
    }

}

export default CurrentPlaylists;