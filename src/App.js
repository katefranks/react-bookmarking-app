import React from 'react';
import './App.css';
import UserForm from './UserForm';
import UrlList from './UrlList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookmarks : []
      }
      this.handleReceiveData = this.handleReceiveData.bind(this);
    }
    handleReceiveData(formData){
      console.log(formData);
      let bookmarks = this.state.bookmarks;
      bookmarks.push(formData);
      this.setState({bookmarks: bookmarks})
  }
  render(){
    return(
      <div>
      <UserForm receiveData={this.handleReceiveData}/>
      <UrlList bookmarks={this.state.bookmarks}/>
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
