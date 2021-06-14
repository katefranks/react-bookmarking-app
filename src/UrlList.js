import React from 'react';

class UrlList extends React.Component {
  // constructor(props){
  //   super(props);}

  render(){
    const url = this.props.bookmarks.map((bookmark, index) => <li key={index}>{bookmark.url}</li>)
    const title = this.props.bookmarks.map((bookmark, index) => <li key={index}>{bookmark.title}</li>)
    const tag = this.props.bookmarks.map((bookmark, index) => <li key={index}>{bookmark.tag}</li>)
    return(
      <ul>{url}{title}{tag}</ul>
    )
  }
}

export default UrlList;
