export const PostComment = ({ key, date, content }) => {
    return (
        <div key={key} className={"mb-2"}>
            <p>Utilisateur</p>
            <small className="badge bg-darkslategray">
                {new Date(date).toLocaleDateString()}
            </small>
            <div className="p-3">{content}</div>
        </div>
    );
};
