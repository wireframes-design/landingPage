
## Authors

- [Kaliba Enterprises Private Limited](https://github.com/kaliba-enterprises)




## Tech Stack

**Client:** React, TailwindCSS

**Server:** Firebase


## Installation

## Clone the repository
```bash
  git clone <repository name>
  cd my-project
```
    
## Install All Packages
```bash
  yarn
```

## Firbase Setup

Step 1: Create a Firebase Project

    - Go to the Firebase Console.

    - Click on Add Project.

    - Enter the project name, then click Continue.
    
    - Enable or disable Google Analytics as per your requirement, then click Continue.

    - Once the project is created, click Continue to move to the Firebase dashboard.

Step 2: Register Your App (Web)

    - In the Firebase console, click the Web icon (</>).

    - Enter a nickname for your app and click Register App.

    - Firebase will provide a configuration object containing API keys and other project details.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_RECAPTCHA_SITE_KEY`=your-recaptcha-site-key

`VITE_APP_API_KEY`= "your-firebase-api-key"

`VITE_APP_AUTH_DOMAIN`= "your-firebase-auth-domain"

`VITE_APP_PROJECT_ID`= "your-firbase-project-id"

`VITE_APP_STORAGE_BUCKET`= "your-firebase-storage-bucket"

`VITE_APP_MESSAGING_SENDER_ID`= "your-firebase-sender-id"

`VITE_APP_APP_ID`= "your-firebase-app-id"

`VITE_APP_MEASUREMENT_ID`= "your-firebase-measurement-id"

`VITE_APP_VAPID_KEY`= "your-firebase-message-id"

## Add Firebase Configuration
    - Also add firebase configration in 
    1) Public\firebase-messaging-sw.js
    2) src\components\ui\chat-section.tsx
    

## Run Locally

Start the server

```bash
  yarn start
```

