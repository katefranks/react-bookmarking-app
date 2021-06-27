import React from 'react';
import BookmarkList from './BookmarkList';

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: '',
      // tags: [],
    }
  }
  render(){

    const categories = this.props.bookmarks.map(bookmark => bookmark.tag)
      //an array of tags (duplicates exist)
    const uniqueCategories = [...new Set(categories)];
      //an array of tags (no duplicates)
    const headings = uniqueCategories.map(tag => (
      <button key={tag} onClick={() => this.setState({ selection: tag })}>
        {tag}
      </button>
    ));

    const bookmarks = this.props.bookmarks
      .filter(bookmark => bookmark.tag === this.state.selection)
      .map((bookmark) => <BookmarkList bookmark={bookmark} bookmarks={this.props.bookmarks}/>);


    return(
      <div>
        <h2>Bookmark List:</h2>
        {headings}
        <ul>
          { bookmarks }
        </ul>
      </div>
    )
  }

}

export default TagList;
