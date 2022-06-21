import { useState } from 'react';
import './Form.css';
function Form() {
  const [fullName, setFullName] = useState('');
  const [topic, setTopic] = useState('');
  const [describe, setDescribe] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [meetingLength, setMeetingLength] = useState('');
  const [sessionTime, setSessionTime] = useState('');

  async function submitForm(e) {
    e.preventDefault();
    const studySession = {
      fullName,
      topic,
      describe,
      meetingLink,
      sessionTime,
      meetingLength,
    };
    console.log(studySession)

    // const post = await fetch('https://caz1.herokuapp.com/users', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     fname: 'fname',
    //     lname: 'lname',
    //     email: 'email',
    //     githubuser: 'ghub',
    //     password: 'password',
    //     location: 'location',
    //     intrests: 'interest',
    //   }),
    // });
    // const data = await post.json();
    // console.log(data);

    setFullName('');
    setTopic('');
    setDescribe('');
    setSessionTime('');
    setMeetingLink('');
    setMeetingLength('');
  }

  function clearForm(e) {
    e.preventDefault();
    setFullName('');
    setTopic('');
    setDescribe('');
    setMeetingLink('');
    setMeetingLength('');
  }

  return (
    <div>
      <form className="form-container">
        <label>Full Name</label>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        ></input>
        <label>Topic</label>
        <input
          type="text"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        ></input>
        <label>Describe and notes(about the session and about you)</label>
        <textarea
          required
          value={describe}
          onChange={(e) => setDescribe(e.target.value)}
        ></textarea>
        <label>Meeting Link</label>
        <input
          type="text"
          required
          value={meetingLink}
          onChange={(e) => setMeetingLink(e.target.value)}
        ></input>
        <label>Choose a date and time for your session</label>

        <input
          type="datetime-local"
          value={sessionTime}
          min="2022-07-21T00:00"
          max="2023-07-21T00:00"
          onChange={(e) => setSessionTime(e.target.value)}
        ></input>
        <label>Meeting Length</label>
        <select
          value={meetingLength}
          onChange={(e) => setMeetingLength(e.target.value)}
        >
          <option value="30 minutes">30 minutes</option>
          <option value="60 minutes">60 minutes</option>
          <option value="90 minutes">90 minutes</option>
          <option value="more than 90 minutes">more than 90 minutes</option>
        </select>
        <button onClick={submitForm}>Submit</button>
        <button onClick={clearForm}>Clear</button>
      </form>
      {/* <p>{sessionTime}</p>
      <p>{fullName}</p>
      <p>{topic}</p>
      <p>{describe}</p>
      <p>{meetingLink}</p>
      <p>{meetingLength}</p> */}
    </div>
  );
}
export default Form;
