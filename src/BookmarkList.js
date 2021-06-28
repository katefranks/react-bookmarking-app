function BookmarkList(props){

  const bookmark = props.bookmark;

  return(
    <li key={bookmark.title}>
      <p>{bookmark.tag}</p>
      <p>{bookmark.title}</p>
      <p><a href={bookmark.url} target="_blank">{bookmark.url}</a></p>
    </li>
  )

}
export default BookmarkList

// import React from 'react';
//
// class BookmarkList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//
//     }
//   }
//
//   render(){
//     const bookmarks = this.props.bookmarks.map((bookmark, index) => (
//       <li key={bookmark.title}>
//         <p>{bookmark.url}</p>
//         <p>{bookmark.title}</p>
//         <p>{bookmark.tag}</p>
//       </li>));
//
//     return(
//       <>
//       <ul>{bookmarks}</ul>
//
//
//       </>
//     )
//   }
// }
//
// export default BookmarkList;
