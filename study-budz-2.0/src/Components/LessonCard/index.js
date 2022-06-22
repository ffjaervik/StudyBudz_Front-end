import './lesson-card.css';

const LessonCard = ({ lesson }) => {
  return (
    <div className="single-lesson">
      <div className="card-hero">
        <h2>
          Topic: <span>{lesson.topic}</span>
        </h2>
        <hr />
      </div>
      <div className="card-stuff">
        <p>
          <strong>Name: </strong> {lesson.name}
        </p>
        <p>
          <strong>About me: </strong>
          {lesson.description}
        </p>
        <p>
          <strong>Session date and time: </strong>
          {lesson.datetime}
        </p>
        <p>
          <strong>Session length: </strong>
          {lesson.duration}
        </p>
        <p>
          <strong>Meeting link: </strong>
          {lesson.zoom}
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
