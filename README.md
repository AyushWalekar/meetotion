# meetotion

During a video meeting, specially when there are many people to track, have you ever wondered how are the people feeling through out the meeting? No? That's right, nobody has ever needed that.

But we've still got a solution for that. Meet meetotion.

I am Meetotion, a web app built with face-api implemented on top of tensorflow.js core.

Features:
- Record screen/window/tab
- Detect multiple faces
- Record time series based facial expressions
- Visualize scores

## How to run?
From project's root folder:
```
cd meetotion/meetotion
```
 To make sure you are in correct directory:
Run:
```
ls
```
Output:

```
config.js               node_modules            package.json            server.js
db.js                   package-lock.json       public                  views
```

Setup:
```
npm i
```
Run project:
```
npm start
```

Go to:
http://localhost:3000/

Share window/tab to detect faces from.

## What's next?
- Add face recognition/tagging
- Convert and publish as browser extension
