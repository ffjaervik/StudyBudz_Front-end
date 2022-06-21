import "./lesson-card.css"

const LessonCard = ({lesson}) => {
    return ( 
        <div className="single-lesson">
            <h2>{lesson.topic}</h2>
            <p> {lesson.fullName}</p>
            <p> {lesson.describe}</p>
            <p> {lesson.sessionTime}</p>
            <p> {lesson.meetingLength}</p>
            <p> {lesson.meetingLink}</p>
            

        </div>

     );
}


 
export default LessonCard;