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
          <strong>Name: </strong> {lesson.fullName}
        </p>
        <p>
          <strong>About me: </strong>
          {lesson.describe}
        </p>
        <p>
          <strong>Session date and time: </strong>
          {lesson.sessionTime}
        </p>
        <p>
          <strong>Session length: </strong>
          {lesson.meetingLength}
        </p>
        <p>
          <strong>Meeting link: </strong>
          {lesson.meetingLink}
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
