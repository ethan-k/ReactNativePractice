// Import libraries 
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// Make a component 
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
      .catch(err => console.log(err));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />);
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView>  
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}



// Make the component available
export default AlbumList;

