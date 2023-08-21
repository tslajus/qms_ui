# Queue Management System (front-end part)

## Introduction

Queue Management System (QMS) is a front-end application that interfaces with the backend API to provide a seamless experience for customers and specialists. It allows customers to reserve visits, track the estimated time left for their reservations, and cancel them if necessary. Specialists can log in to view assigned patients, manage visits, and prioritize visits.

## Deployed Application

The deployed Queue Management System, including the main application and the display board, can be accessed through the following links:

- [Main Application](https://qms.slajus.dev)
- [Display Board](https://qms.slajus.dev/display-board)

## Requirements

The following requirements are needed to run the front-end application:

- **Node.js**: Version required to run the front-end application.
- **Vite**: A fast web dev build tool. Required for running and building the application.
- **React**: Version 18.2.0 or above.
- **Sass**: Version 1.66.1 or above.
- **Axios**: Version 1.4.0 or above.

## Installation

Follow the steps below to install and run the Queue Management System front-end application:

1. **Clone the repository:** `git clone https://github.com/tslajus/qms-ui.git`
2. **Navigate to the project directory:** `cd qms-ui`
3. **Install the necessary dependencies:** `npm install`
4. **Configure the BASE_URL variable:** Set the `BASE_URL` environment variable to the URL of your backend API or use the default one for localhost.
5. **Modify constants:** If needed, change the constants in the `utils` folder.
6. **Run the application:** `npm start`

## Usage

### For Customers:

- **Go to the Customer Dashboard**
- **Reserve a visit:** Click "Reserve Visit" to get the earliest visit time from the currently working specialist. You will see a serial number on the screen.
- **Check estimated time left:** View the estimated time left until your visit if needed.
- **Cancel your visit:** You can cancel your visit if needed.

### For Specialists:

- **Go to the Specialist Dashboard**
- **Login:** Use the provided Test Specialist credentials for a currently working specialist.
- **View assigned visits:** See all assigned visits and their estimated times in your dashboard.
- **Manage visits:** Activate the next in-line visit, complete active visits, cancel visits, or make any out-of-order visit a priority.

### Display Board:

- **View visits:** Check the first 8 visits in line and the assigned specialists' cabinet number for the active visit.

## Backend Part

You can find more information and the source code for the backend part of the Queue Management System at the following repository:

[QMS Backend Repository](https://github.com/tslajus/qms-api)
