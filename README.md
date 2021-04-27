# BGCA Experience Tracker - Front End Development

### A Tracker aimed towards recording the emotional sentiment of members attending BGCA activities, this iteration allows for authentication on Oktas sign-in widget, navigation of a dashboard-type application, upload and parsing of .csv containing program information and member information accordingly, the ability to generate and print .pdf version of member ID cards with corresponding QR code's on them.

 All features discussed :point_up: will be explained in further detail below

# List of Collaborators :robot:

- [Christopher Corvo](https://github.com/ChristopherCorvo)
- [Oscar Figueroa](https://github.com/OscFig)
- [Oscar Lopez](https://github.com/Oscar-Lopez-Projects)
- [Justin Benz](https://github.com/JustinBenz)
- [Mike Galvin](https://github.com/mikefgalvin)
- [Justin Mavity](https://github.com/justin-mavity)
- [Gina Russell](https://github.com/ginabethrussell)

# Planning :seedling:

(These will be displayed down below :point_down:)
- Whimsical: [WireFrames](https://whimsical.com/wireframes-HzaAfFqyw5txwQsJe7LcFX), [User Flows](https://whimsical.com/user-flow-3MK3owKZuKSLhkd3pfE8M7)
- DB Schema: [Click Here](https://app.dbdesigner.net/designer/schema/0-bg-club-a)
- Engineering Diagram: [Click Here](https://whimsical.com/engineering-diagrams-AUEUqhuaK3iZCahaw6bJg4)
<br>
## Whimsical

#### Wire-Frames

![Landing dash](./styles/images/wireframe-dash)
Wireframe for first page hit once authenticated, in future iterations could be used for data visualizations...
<br>
![Member management](./styles/images/wireframe-member)
Wireframe for the Member Management page, has a visualization of each member currently in the system with the option to open an extended modal window allowing for .csv upload of member information.
<br>
![Program management](./styles/images/wireframe-member)
Wireframe for the Program Management page, also has a visualization of each program currently in the system with the ability to open an extended modal window allowing for individual or .csv upload of program information
<br>
### User Flows
![Super Admin User Flow](./styles/images/userflow-sa.png)
Super Admin flow detailing UX from auth to all functionalities
<br>
![Club Director User Flow](./styles/images/userflow-cd.png)
Club Director flow detailing UX from auth to all functionalities
<br>
![YDP User Flow](./styles/images/userflow-ydp.png)
YDP flow detailing UX from auth to all functionalities 
<br>
## DB Schema
![DB Schema](./styles/images/dbschema.png)
DB Schema explaining each table on back-end RDBMS
<br>
## Engineering Diagram
![Engineering Diagram](./styles/images/egdiag.png)
<br>


# Major Features

## Member Management

- [x] Visualization for display of all member's currently in system
- [x] Ability to open extended modal window allowing for the upload of .csv containing member information
- [x] TBD
## Program Management

- [x] Visualization for display of all program's currently in system
- [x] Ability to open extended modal window allowing for the upload of .csv containing program information
- [x] Ability to individually add program by id