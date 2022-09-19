import { formatDate } from "../../utils/date";
import DOMPurify from "dompurify";

export default function ForumComments({ comments }) {
  if (comments.length === 0) {
    return (
      <div className="flex justify-center">
        <span className="badge badge-lg">No comments</span>
      </div>
    );
  }
  return (
    <>
      <div>
        {comments.map((comment) => (
          <div className="flex mb-12" key={comment.id}>
            <div className="rounded-2xl pr-8">
              <img
                src={comment.author.profilePicture}
                alt={comment.author.email}
                height="40px"
                width="40px"
                className="rounded-full"
              />
            </div>
            <div className="caret-div bg-base-100 relative w-full rounded border border-base-300">
              <div className="px-4 py-2 flex items-center border-b border-base-300">
                {comment.author.firstName + " " + comment.author.lastName}{" "}
                commented {formatDate(comment.createdAt, true)}
              </div>
              <div
                className="p-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(comment.content),
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
