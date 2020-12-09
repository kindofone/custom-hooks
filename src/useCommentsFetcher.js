import {useEffect, useState} from 'react';

const useCommentsFetcher = (postId) => {
  const [comments, setComments] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/comments';  

  useEffect(() => {
    fetch(`${url}?postId=${postId}`)
    .then(res => res.json())
    .then(data => setComments(data));
  }, [postId]);

  return comments;
};

export default useCommentsFetcher;