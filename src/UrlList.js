import React from 'react';

class UrlList extends React.Component {
  // constructor(props){
  //   super(props);}

  render(){
    const url = this.props.bookmarks.map((bookmark, index) => <li key={index}>{bookmark.url}</li>)
    return(
      <ul>{url}</ul>
    )
  }
}

export default UrlList;
