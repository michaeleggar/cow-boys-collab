export default function DropCard({ drop, showCountdown = false }) {
  const isUpcoming = drop.status === "upcoming";
  const isArchived = drop.status === "archived";

  return (
    <article className={`drop-card ${isArchived ? "drop-card--archived" : ""}`}>
      {drop.coverImage && (
        <div className="drop-card__image-wrapper">
          <img
            src={drop.coverImage}
            alt={drop.name}
            className="drop-card__image"
          />
          {isArchived && <span className="drop-card__badge">archived</span>}
        </div>
      )}
      <div className="drop-card__content">
        <h3 className="drop-card__title">{drop.name}</h3>
        <p className="drop-card__description">{drop.description}</p>
        {showCountdown && isUpcoming && (
          <CountdownTimer targetDate={drop.dropDate} />
        )}
      </div>
    </article>
  );
}
