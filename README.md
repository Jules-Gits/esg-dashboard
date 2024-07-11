# ESG Dashboard

This project is an ESG (Environmental, Social, and Governance) Criteria Rankings Dashboard built with React. It displays ESG factors for various regions and allows filtering by category.

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Run `npm run build` to create a production build

## Usage

The dashboard allows users to:
- Select different regions
- Filter by ESG category (Environmental, Social, Governance)
- View a bar chart of ESG factors
- See key insights for the selected region

## Deployment

After building the project, the contents of the `build` folder can be deployed to any static hosting service.

## Integration with Ceros

To integrate this dashboard into a Ceros experience, use an iframe with the URL of your deployed app.

Example:
```html
<iframe 
  src="https://your-deployed-app-url.com" 
  width="100%" 
  height="600" 
  frameborder="0"
  allowfullscreen
></iframe>
```

Adjust the width and height as needed to fit your Ceros layout.
