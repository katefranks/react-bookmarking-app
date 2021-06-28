import React from 'react';
import './App.css';
import BookmarkForm from './BookmarkForm';
// import BookmarkList from './BookmarkList';
import TagList from './TagList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks : []
      }
      this.addBookmark = this.addBookmark.bind(this);
    }

    componentDidMount(){
      const bookmarks = [
        {
          id: 1,
          url: 'http://www.google.com',
          title: 'Google',
          tag: '#search',
        },
        {
          id: 2,
          url: 'http://www.bing.com',
          title: 'Bing',
          tag: '#search',
        },
        {
          id: 3,
          url: 'http://www.yahoo.com',
          title: 'Yahoo',
          tag: '#search',
        },
        {
          id: 4,
          url: 'https://www.facebook.com',
          title: 'Facebook',
          tag: '#social',
        },
        {
          id: 4,
          url: 'http://www.instagram.com',
          title: 'Instagram',
          tag: '#social',
        },
      ];
      this.setState({ bookmarks });
    }

    addBookmark(formData){
      const bookmarks = [ ...this.state.bookmarks ];
      bookmarks.push(formData);
      this.setState({ bookmarks });
  }

  render(){
    return(
      <div>
        <h1>Bookmarking App</h1>
        <BookmarkForm addBookmark={this.addBookmark}/>
        <TagList bookmarks={this.state.bookmarks} />
      </div>
    )
  }
}


export default App;



//       <BookmarkList bookmarks={this.state.bookmarks}/>

//Create a bookmarking app where you can save URLs. It should have a form
  // where you enter the URL, a title, and a "tag". There should be a list of all
  // the URLs, as well as a list of all the tags. When you click on a tag, the link list
  // should show only those tags. Hint: which tag is selected is "application
  // state". When you filter the data, be careful that you do not loose the other bookmarks.
