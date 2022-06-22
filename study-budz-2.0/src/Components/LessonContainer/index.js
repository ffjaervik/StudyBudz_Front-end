import LessonCard from '../LessonCard';
import './lesson-container.css';

const LessonContainer = ({ lessons }) => {
  return (
    <div>
      <h2 className="card-section-title">Choose a lesson to take part in:</h2>
      <div className="lesson-container">
        {lessons.map((lesson) => (
          <LessonCard lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default LessonContainer;
