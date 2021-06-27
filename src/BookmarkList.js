import React from 'react';

class BookmarkList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const bookmarks = this.props.bookmarks.map((bookmark, index) => (
      <li key={bookmark.tag}>
        <p>{bookmark.url}</p>
        <p>{bookmark.title}</p>
        <p>{bookmark.tag}</p>
      </li>));

    return(
      <>
      <ul>{bookmarks}</ul>


      </>
    )
  }
}

export default BookmarkList;
