
function Favorite ({props}) {
  const { content, title } = props;
  return (
    <div className="favorite-container">
      <article className="container-title">
        { title }
      </article>

      <article className="favorite-section">
        { content }
      </article>
    </div>
  )
}

export default Favorite