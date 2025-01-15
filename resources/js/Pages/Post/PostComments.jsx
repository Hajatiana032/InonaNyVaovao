export const PostComment = ({ id, date, content }) => {
    return (
        <div key={id} className={"mb-2"}>
            <div>Utilisateur</div>
            <div className="badge small bg-secondary">
                {new Date(date).toLocaleDateString()}
            </div>
            <div className="ps-3">{content}</div>
        </div>
    );
};
