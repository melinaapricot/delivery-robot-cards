# Delivery Robot Cards

### To run the project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Details

- I have simulated data fetching with a promise based approach, but this can be replaced with an actual API call.
- A loading spinner was added while "waiting" for the data.
- Focused/Active elements (the button) have a blue outline for better keyboard navigation.
- The cards are responsive and adapt to different screen sizes, delivery details stack on mobile.
- Return and Error states have been implemented although no such data was provided in the dummy data of the instruction document.
- Most of the css values are in rems for better scalability (accessibility effect: Changing the font size in the browser will work better with more consistent effect).
- CSS Variables are used for most re-used values, and are set up centrally in the index.css file.
