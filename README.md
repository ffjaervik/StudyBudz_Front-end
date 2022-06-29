
![Logo](https://user-images.githubusercontent.com/100479956/176189008-b10aa4d8-2eb1-43c1-a657-04e144e8b580.png)


## Authors

- Fabian Deckmann - [@ffjaervik](https://github.com/ffjaervik) 
- Sam Safari - [@99daycoder](https://github.com/99daycoder/)
- Jaden Joel - [@jadenjoel](https://github.com/jadenjoel) 
- Kieran Gill - [@KieranWebDev](https://github.com/KieranWebDev)



# The Project

Study Budz is the result of the mid-term project of the School of Code Bootcamp.
The students where given 1 week (Mon - Fri) to come up with a working product that relating to the brief.

## The brief

"To improve the remote team building experience at the School of Code"

## Generating the idea

After concluding a research in form of a questionaire. We gathered some intel on topics that bootcampers struggled with and combined those with our personal experiences.
We started brainstorming some ideas and also ran the brief through Open Ai. The artificial intelligence gave us a few good ideas and we decided to elaborate on the one we liked the most. We refined the idea by taking the idea through the Disney ideation methodology and defined our MVP.

## Our Solution

The problem we focused on was the amount of unrecognized help bootcampers were offering to eachother. 
We wanted to create a platform that encourages the bootcamp community to offer additional lessons that might help other students with subjects they struggle with. 
The platform evolves around a badge system where students can earn badges for the amount of help they offer. The idea is to make these badges an official measurable token that graduates can include in their portfolios and on job applications.








## Features
### Main page ###
![image](https://user-images.githubusercontent.com/82081817/176177042-0dd74b1d-86c0-4960-a20b-b945edf2db7d.png)
### User Profile example ###
![image](https://user-images.githubusercontent.com/82081817/176179146-e2558793-2795-4101-b3fe-dae69c9be72d.png)
- The user can post info on their study session in our database by filling out and completing the form
- The user can also view all current sessions saved on the db.
- There is also a simple but functional navigation bar that includes a link to the "How Study Budz Works" section. This section displays an example of our User's Personal profile page
## Installation Frontend

Install studyBudz frontend via github clone

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-room-5-front-end
  cd studyBudz
  npm install

```

## Installation Backend 
Install studyBudz backend (server side) via github clone

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-room-5-front-end
  cd studyBudz
  npm install

```

Make sure you add the .env to your root folder with db credentials or the backend will not run properly
## Tech Stack

#### Planning
Trello , Miro, Figma.

#### Front-end

HTML5, CSS3, JavaScript, React.

#### Back-end

 Express.js, Node.js, PostgreSQL,  Cloud hosted on Heroku.
 ## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background Color | ![#A8DADC](https://via.placeholder.com/10/A8DADC?text=+) #A8DADC |
| Primary Color | ![#F1FAEE](https://via.placeholder.com/10/F1FAEE?text=+) #F1FAEE |
| Secondary Color | ![#457B9D](https://via.placeholder.com/10/457B9D?text=+) #457B9D |
| Highlight Color | ![#E63946](https://via.placeholder.com/10/E63946?text=+) #E63946 |
| Highlight Color #2 | ![#1D3557](https://via.placeholder.com/10/1D3557?text=+) #1D3557 |


## API Reference
## Server live API URL: https://studybudzapp.herokuapp.com/
#### Get all items
```http
  GET /lessons
```
#### Get lessons by their id (lesson_id)
```http
  GET /lessons/id
```
#### Search for a specific topic, the query find topics that include the keyqord ANYWHERE in the topic
```http
GET /lessons/q?topic=
```
Example: /lessons/q?topic=html
#### POST availability to give lessons
```http
POST /lessons
```
Create a new DB entry. The lesson _id is generated automatically
Example: {
            "name": "Laura Jones",
            "topic": "All you need to know about js",
            "description": "Just 30 minutes and you will be a pro!",
            "zoom": "http://zoom.com",
            "paypalemail": "test2@example.com",
            "datetime": "2022-06-23 18:15:00",
            "duration": 30,
            "starrating": 5
        }
#### DELETE lessons
```http
DELETE /lessons
```
Example:
http://localhost:4000/lessons/9
Description:
Delete a row on SQL db by it’s lesson_id
#### DELETE lessons by topic
```http
DELETE /lessons
```
Example:
/lessons?topic=html
## Deployment

To deploy this project signup for a Heroku free account
Create a Heroku App
Link your Github to Heroku
Make sure you enable automatic deployment

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Roadmap
Although we achieved our MVP goals, we only had 4 days to plan, design and make our App. Therefore there are a number of features that we were not able to implement. Below we detail some of the features we would have implemented if we had more time.
### Week 1 ###
- Expand the testing suite by adding more unit tests and testing with Supertest.
- Search for sessions function.
- Admin Dashboard
- Create account and login features (without Auth0)
- implement badge system for users
### Week 2 ###
- Create algorithms to implement the badge system; based on session numbers, feedback, rating etc.
- Login using Auth0/JWT.
- Cypress end-to-end testing.











# National Bootcamp - Week Nine Project Brief

For your project, you’ll be using what you’ve learned on the course so far to try and improve the lives of your users. In this case, the users will be close to home: bootcampers!

To do this, you’ll need to take the time to understand your user (a bootcamper), their experiences, and their problems. Specifically, it might be good to focus on how to enhance the remote experience of a bootcamper, or what can help them with the vast amount of learning there is to do as a new developer. What do they need? What problem might they have that your application could solve for them? How can you get into the mindset of your user and keep them at the centre of your problem-solving?

The high level outcomes from this project should be:

- A minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified
- A presentation, complete with how you worked as a team and a demonstration of the project

Your project application might include the following:

- Include a user experience created in React
- Build a REST API which is used by your front-end
- Be supported by a Postgresql database with multiple tables
- Be built and managed in an agile way
- Utilise testing for ensuring robust code

Remember, you only have a few days to code a solution, so being agile is key. That means brainstorming what you want to build, and working in sprints to deliver value each time. After each sprint, you can reassess and either continue on course or iterate towards a better solution. Have a plan which is incremental steps, rather than all or nothing.

Click the link to see the [Project Guidelines](https://github.com/SchoolOfCode/project-guidelines/blob/master/project-week.md)




