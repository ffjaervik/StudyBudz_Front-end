import { useState } from 'react';
import './Form.css';

function Form() {
  const [fullName, setFullName] = useState('');
  const [topic, setTopic] = useState('');
  const [describe, setDescribe] = useState('');
  const [meetingLink, setMeetingLink] = useState('');
  const [meetingLength, setMeetingLength] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [paypalLink, setPaypalLink] = useState('');

  // fname: 'fname',
  // lname: 'lname',
  // email: 'email',
  // githubuser: 'ghub',
  // password: 'password',
  // location: 'location',
  // intrests: 'interest',

  async function submitForm(e) {
    e.preventDefault();
    const studySession = {
      fullName,
      topic,
      describe,
      meetingLink,
      sessionTime,
      meetingLength,
      paypalLink,
    };
    console.log(studySession);

    const post = await fetch('https://studybudzapp.herokuapp.com/lessons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'fullName',
        topic: 'topic',
        description: 'describe',
        zoom: 'meetingLink',
        paypalemail: 'paypalLink',
        datetime: 'sessionTime',
        duration: 'meetingLength',
      }),
    });
    const data = await post.json();
    console.log(data);

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
    <div className="form-container">
      <form className="form-items-container">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Bob Smith"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        ></input>
        <label>What topics are you teaching?</label>
        <input
          type="text"
          placeholder="e.g. CSS and flexbox"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        ></input>
        <label>Give a brief description about yourself</label>
        <input
          type="text"
          placeholder="I like reading and building stuff"
          required
          value={describe}
          onChange={(e) => setDescribe(e.target.value)}
        ></input>
        <label>Meeting Link</label>
        <input
          type="text"
          placeholder="www.zoom.com"
          required
          value={meetingLink}
          onChange={(e) => setMeetingLink(e.target.value)}
        ></input>
        <label>Paypal Email</label>
        <input
          type="text"
          placeholder="www.paypal.com"
          required
          value={paypalLink}
          onChange={(e) => setPaypalLink(e.target.value)}
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
        <button className="submit" onClick={submitForm}>
          Submit
        </button>
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
