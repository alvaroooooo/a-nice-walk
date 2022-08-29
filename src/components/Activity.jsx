
function Activity ({props}) {
  const { content, title, assets } = props
  const asset = assets[0]
  return (
    <div className="favorite-container">
      <article className="container-title">
        {title}
      </article>

      <article className="favorite-section">
        {content}
      </article>

      <article className="asset-section">
        <img src={asset} 
          alt="walking-bart"
          className="img-asset"
        />
      </article>
    </div>
  )
}

export default Activity