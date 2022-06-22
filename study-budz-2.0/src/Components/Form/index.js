import { useState } from 'react';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [zoom, setZoom] = useState('');
  const [timeduration, setTimeDuration] = useState('');
  const [datetime, setDateTime] = useState('');
  const [paypalemail, setPaypalEmail] = useState('');

  // fname: 'fname',
  // lname: 'lname',
  // email: 'email',
  // githubuser: 'ghub',
  // password: 'password',
  // location: 'location',
  // intrests: 'interest',

  async function submitForm(e) {
    // e.preventDefault();
    const duration = Number(timeduration);

    const studySession = {
      name,
      topic,
      description,
      zoom,
      datetime,
      duration,
      paypalemail,
    };

    console.log(studySession);

    const post = await fetch('https://studybudzapp.herokuapp.com/lessons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studySession),
    });
    const data = await post.json();
    console.log(data);
  }

  function clearForm(e) {
    e.preventDefault();
  }

  return (
    <div className="form-container">
      <form className="form-items-container">
        <h2>Offer a Study Session</h2>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Bob Smith"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label>Meeting Link</label>
        <input
          type="text"
          placeholder="www.zoom.com"
          required
          value={zoom}
          onChange={(e) => setZoom(e.target.value)}
        ></input>
        <label>Paypal Email</label>
        <input
          type="text"
          placeholder="www.paypal.com"
          required
          value={paypalemail}
          onChange={(e) => setPaypalEmail(e.target.value)}
        ></input>
        <label>Choose a date and time for your session</label>
        <input
          type="datetime-local"
          value={datetime}
          min="2022-07-21T00:00"
          max="2023-07-21T00:00"
          onChange={(e) => setDateTime(e.target.value)}
        ></input>
        <label>Meeting Length</label>
        <select
          value={timeduration}
          onChange={(e) => setTimeDuration(e.target.value)}
        >
          <option value="30">30 minutes</option>
          <option value="60">60 minutes</option>
          <option value="90">90 minutes</option>
          <option value="120">more than 90 minutes</option>
        </select>
        <button className="submit" onClick={submitForm}>
          Submit
        </button>
        <button className="clear" onClick={clearForm}>
          Clear
        </button>
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
