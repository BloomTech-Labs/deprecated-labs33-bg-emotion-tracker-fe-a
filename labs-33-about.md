# BGCA Experience Tracker - Front End Repository :stars:

### A Tracker aimed towards recording the emotional sentiment of members attending BGCA activities, this iteration allows for authentication on Oktas sign-in widget, navigation of a dashboard-type application, upload and parsing of .csv containing program information and member information accordingly, also the ability to generate and print .pdf version of member ID cards with corresponding QR code's on them.

 (All features discussed :point_up: will be explained in further detail below)
# Planning :seedling:

(**These will be displayed down below :point_down:**)
- Whimsical: [WireFrames](https://whimsical.com/wireframes-HzaAfFqyw5txwQsJe7LcFX), [User Flows](https://whimsical.com/user-flow-3MK3owKZuKSLhkd3pfE8M7), [Program Flow](https://whimsical.com/program-flow-HG3nSU9tnLGjXXEzoSU4rc)
- DB Schema: [Click Here](https://app.dbdesigner.net/designer/schema/0-bg-club-a)
- Engineering Diagram: [Click Here](https://whimsical.com/engineering-diagrams-AUEUqhuaK3iZCahaw6bJg4)
<br>
## Whimsical

#### Wire-Frames

![Landing dash](./src/styles/images/wireframe-dash)
Wireframe for first page hit once authenticated, in future iterations could be used for data visualizations...
<br>
![Member management](./src/styles/images/wireframe-member)
Wireframe for the Member Management page, has a visualization of each member currently in the system with the option to open an extended modal window allowing for .csv upload of member information.
<br>
![Program management](./src/styles/images/wireframe-program)
Wireframe for the Program Management page, also has a visualization of each program currently in the system with the ability to open an extended modal window allowing for individual or .csv upload of program information
<br>
### User Flows
![Super Admin User Flow](./src/styles/images/userflow-sa.png)
Super Admin flow detailing UX from auth to all functionalities
<br>
![Club Director User Flow](./src/styles/images/userflow-cd.png)
Club Director flow detailing UX from auth to all functionalities
<br>
![YDP User Flow](./src/styles/images/userflow-ydp.png)
YDP flow detailing UX from auth to all functionalities 
<br>
### Component Architecture
![Program Flow](./src/styles/images/programflow)
<br>
### DB Schema
![DB Schema](./src/styles/images/dbschema.png)
DB Schema explaining each table on back-end RDBMS
<br>
### Engineering Diagram
![Engineering Diagram](./src/styles/images/egdiag.png)
Diagram displaying flow of information for entire project, details for tech stack 
<br>

# Execution :rocket:

## Component Architecture
Stayed true to Labs container > render flow. Everything is laid out with screenshots of the exact file used in our program flow file located [here](https://whimsical.com/program-flow-HG3nSU9tnLGjXXEzoSU4rc)

**Stack:**
More Details - [here](https://whimsical.com/engineering-diagrams-AUEUqhuaK3iZCahaw6bJg4)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [Axios](https://www.npmjs.com/package/axios)
- [Okta React SDK](https://developer.okta.com/code/react/)
- [AntDesign](https://ant.design)
- [React Router](https://reactrouter.com)

**State Management:**
 Combination of Axios requests and React prop drilling

**Deviations:**
- [papa-parse](https://www.papaparse.com) CSV parser used in part to display preview csv data and file validation.
- [qrcode.react](https://www.npmjs.com/package/qrcode.react) A react component allowing for QR generation with style capabilities.

## Major Features

### Member Management

![Image of Member Management](.src/styles/images/view-member.png)

- [x] Visualization for display of all member's currently in system
- [x] Ability to open extended modal window allowing for the upload of .csv containing member information or the option of adding a member manually via ID.
- [x] The ability to create new ID's flaunting a unique QR code that can then be converted to .pdf form and printed off at will.

**Modal**
![Image of Member Modal](.src/styles/images/view-member-modal.png)

- [x] Individual member upload
- [x] member .csv upload


### Program Management
![Image of Program Management](.src/styles/images/view-program.png)
<br>
Program Management view.
- [x] Visualization for display of all program's currently in system
- [x] Ability to open extended modal window allowing for the upload of .csv containing program information
