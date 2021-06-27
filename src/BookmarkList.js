import React from 'react';

class BookmarkList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selection: '',
    }
  }

  render(){
    const bookmarks = this.props.bookmarks.map((bookmark, index) => (
    <li key={index}>
    <li>{bookmark.url}</li>
    <li>{bookmark.title}</li>
    <li>{bookmark.tag}</li>
    </li>));
    // const title = this.props.bookmarks.map((bookmark, index) => <p key={index}>{bookmark.title}</p>)
    // const tag = this.props.bookmarks.map((bookmark, index) => <p key={index}>{bookmark.tag}</p>)
    return(
      <ul>{bookmarks}</ul>
    )
  }
}

export default BookmarkList;

// render(){
//   const url = this.props.bookmarks.map((bookmark, index) => <p key={index}>{bookmark.url}</p>)
//   const title = this.props.bookmarks.map((bookmark, index) => <p key={index}>{bookmark.title}</p>)
//   const tag = this.props.bookmarks.map((bookmark, index) => <p key={index}>{bookmark.tag}</p>)
//   return(
//     <ul><li>{url}{title}{tag}</li></ul>
//   )
// }
// }
//
// export default UrlList;
