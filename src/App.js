import React from 'react';
import './App.css';
import BookmarkForm from './BookmarkForm';
import BookmarkList from './BookmarkList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks : []
      }
      this.handleReceiveData = this.handleReceiveData.bind(this);
    }

    componentDidMount(){
      const bookmarks = [
        {
          id: 1,
          url: 'www.google.com',
          title: 'Google',
          tag: '#search',
        },
        {
          id: 2,
          url: 'www.bing.com',
          title: 'Bing',
          tag: '#search',
        },
        {
          id: 3,
          url: 'www.yahoo.com',
          title: 'Yahoo',
          tag: '#search',
        },
        {
          id: 4,
          url: 'www.facebook.com',
          title: 'Facebook',
          tag: '#social',
        },
        {
          id: 4,
          url: 'www.instagram.com',
          title: 'Instagram',
          tag: '#social',
        },
      ];
      this.setState({ bookmarks });
    }

    handleReceiveData(formData){
      console.log(formData);
      // let bookmarks = this.state.bookmarks;
      const bookmarks = [ ...this.state.bookmarks ];
      bookmarks.push(formData);
      this.setState({ bookmarks });
  }
  render(){
    return(
      <div>
      <BookmarkForm handleReceiveData={this.handleReceiveData}/>
      <BookmarkList bookmarks={this.state.bookmarks}/>
      </div>
    )
  }
}


export default App;



// value value.title value.url

//Create a bookmarking app where you can save URLs. It should have a form
  // where you enter the URL, a title, and a "tag". There should be a list of all
  // the URLs, as well as a list of all the tags. When you click on a tag, the link list
  // should show only those tags. Hint: which tag is selected is "application
  // state". When you filter the data, be careful that you do not loose the other
  // bookmarks.

//Components:
// -Main component (App)
//   -3 components off of that:
//     -form
//     -URL
//     -tags list
