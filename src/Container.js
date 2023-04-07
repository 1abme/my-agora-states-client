function Container (props) {
  return (
    <>
      <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={props.discussion.avatarUrl}
          alt="avatar of kimploo"
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={props.discussion.url}>
          {props.discussion.title}
          </a>
        </h2>
        <p className="discussion__bodyHtml hide"></p>
        <div className="discussion__information">
        {props.discussion.author}{props.discussion.createdAt}
        </div>
      </div>
      <div className="discussion__answered">
        <p>🤔</p>
      </div>
      </li> 
  </>
  )
}

export default Container;



