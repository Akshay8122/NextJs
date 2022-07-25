import { useState } from "react";
import useApi from "../../components/useApi";
import styles from "../../pages/styles.module.css";

function CommentPage() {
  const { comment, fetchComments } = useApi("http://localhost:4000/comments");
  const [text, setText] = useState("");
  const [newComment, setNewComment] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState();

  const postComments = async () => {
    const response = await fetch("http://localhost:4000/comments", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    fetchComments();
  };

  const deleteComment = async (commentId: number) => {
    const response = await fetch(
      `http://localhost:4000/comments/${commentId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    fetchComments();
  };
  const updateComment = async (commentId: any) => {
    setUpdate(!update);
    setUpdateId(commentId);
    const response = await fetch(
      `http://localhost:4000/comments/${commentId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: newComment, id: commentId }),
      }
    );
    const data = await response.json();
    setNewComment(newComment);
    fetchComments();
  };

  return (
    <div className={styles.container}>
      <h2>CRUD OPERATION DEMO</h2>
      <div>
        <input
          className={styles.input1}
          type="text"
          placeholder="Post here"
          onChange={(e) => setText(e.target.value)}
          autoFocus
          value={text}
        />
      </div>

      <button className={styles.postbtn} id="input" onClick={postComments}>
        Post comment
      </button>
      <br />

      {comment.isError ? <div>Error Loading page</div> : null}

      {comment.isLoading ? (
        <div>Loading</div>
      ) : (
        comment.comments.map((comment) => {
          return (
            <div className={styles.handle} key={comment.id}>
              {comment.text}
              <button
                className={styles.delbtn}
                onClick={() => deleteComment(comment.id)}
              >
                Delete
              </button>
              <button
                className={styles.updatebtn}
                onClick={() => updateComment(comment.id)}
              >
                update
              </button>
              {updateId === comment.id && update && (
                <input
                  className={styles.input2}
                  type="text"
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Update your comment here"
                  value={newComment}
                />
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default CommentPage;
