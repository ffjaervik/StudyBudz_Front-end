import KazeemCard from '../../pictures/KazimPortfolioLatest.png';
import './HowStudyBudzWork.css';
const HowStudyBudzWork = () => {
  return (
    <div className="how-study-budz-work">
      <h1>How StudyBudz works</h1>
      <p>
        {' '}
        We Promote a culture of respect and honesty amongs our Study Budz. We
        want everyone to feel they are in a confotable zone where learning is
        promoted amongs the peers
      </p>
      <p>At StudyBudz we want to reward contributions</p>
      <div className="teacher-card-container">
        <img className="card-pic" src={KazeemCard} alt="badges example" />
        <div className="info-container">
          <h2>Sessions</h2>
          <p>You have completed 23 sessions</p>
          <h2>Feedback</h2>
          <p>Mary: So helpful, thank you so much!</p>
          <p>Mary: So helpful, thank you so much!</p>
          <p>Mary: So helpful, thank you so much!</p>
          <button>Click to see all feedback</button>
          <h2>Missed Sessions</h2>
          <p> You have missed 0 session! Keep up the good work!</p>
          <h2>Duration</h2>
          <p> You have taught for 2202 minutes so far!</p>
          <h2>Total sessions</h2>
          <p> You have taught 35 sessions so far!</p>
        </div>
      </div>
    </div>
  );
};

export default HowStudyBudzWork;
