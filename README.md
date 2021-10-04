# Women Who Code Front End Study Group Project

[![Build & Deploy React App](https://github.com/frontendstudygroup/frontendstudygroup.github.io/actions/workflows/ci-build.yml/badge.svg)](https://github.com/frontendstudygroup/frontendstudygroup.github.io/actions/workflows/ci-build.yml)

This repository is a beginner-friendly project started by [Women Who Code Front End](https://www.womenwhocode.com/frontend) to learn about front end technologies as well as how to collaborate on an open source project.

Currently it is deployed at [https://frontendstudygroup.github.io](https://frontendstudygroup.github.io) using [GitHub Pages](https://pages.github.com/). 

We are collaborating with [Women Who Code Cloud](https://www.womenwhocode.com/cloud) to implement other deployment methods like deploying the app to Azure or AWS with Continuous Integration and Continuous Delivery pipelines.

## Expectations

Participation and maintenance of this project is completely voluntary and we are not committing to teach anything as part of this effort. If you want to practice together with us, this is a good place!

## Code of Conduct

- Be respectful to each other
- No question is stupid, feel free to ask questions and encourage others

## How To Contribute

- Search in [Issues](https://github.com/frontendstudygroup/frontendstudygroup.github.io/issues) for open issues to work on
    - If you would like to make a suggestion for an enhancement, or report a defect, create an issue
- Fork the repository (recommended if you are doing this for the first time)
- Clone your forked repository to your machine (`git clone [url from clone option]`)
- Request to assign the issue for yourself
- Comment on the issue about your approach to solving the problem
- Get feedback from other contributors or project maintainers
- Submit a pull request when you are ready
    - Add a title and small description in the pull request about what you did.
    - Make sure to reference the issue number in the pull request comment with the words _"Fixes #[issue number]"_ or _"Resolves #[issue number]"_ as explained in [GitHub documentation](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
      

Questions about front end? [Join the WWC Front End Slack](https://join.slack.com/t/womenwhocodefrontend/shared_invite/zt-gaic5y90-pDJK4H_NbObZ_MU_rcYc0A) and join the `#fe-beginner-studygroup` channel.

Questions about cloud? [Join the WWC Cloud Slack](https://join.slack.com/t/wwcodecloud/shared_invite/zt-lngnes83-iq8TuBLOtAGXnHFaM5~sTw) and join the `#opensource` channel.

## Local Setup for Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting Started
After you clone this repository to your local machine, execute the command `npm install` in your favorite terminal to install all the npm packages locally.

To run the application locally execute the command `npm start`. 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Testing

Executing the command `npm test` launches the test runner in interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) in the Create React App documentation for more information.

### Deployment

There is a GitHub action set up on this repository to build the React app, run tests and deploy to the GitHub Pages site on every merge to the `master` branch.

Also when a pull request is created or updated, the GitHub action will build the React app and run tests. If the build or tests fail, the pull request will be blocked from merging until they are resolved.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
