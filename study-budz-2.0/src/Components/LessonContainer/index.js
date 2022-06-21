import LessonCard from "../LessonCard";
import "./lesson-container.css";

const LessonContainer = ({lessons}) => {


    return ( 
        <div className="lesson-container">
            {lessons.map((lesson) => (
                
                 <LessonCard lesson={lesson}/>                   
             
            ) )}
        </div>

    
     );
}
 
export default LessonContainer;