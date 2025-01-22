# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Calculator App

A sleek and fully functional calculator app built with React and styled using Bootstrap. This app mimics the design and functionality of a real-world calculator with a modern UI.

---

## Features

- **Realistic Layout**: The calculator resembles a physical device with a proper button grid layout.
- **Responsive Design**: Built using Bootstrap to ensure the app looks great on all devices.
- **Dark Mode Aesthetics**: Modern dark theme for better visual appeal.
- **Functional Buttons**:
  - Digits (0-9)
  - Basic Operations (+, -, *, /)
  - Clear (C)
  - Equal (=)
- **Hover Effects**: Interactive button animations for enhanced UX.

---

## Technologies Used

1. **React**: A JavaScript library for building user interfaces.
2. **Bootstrap**: For responsive and modern styling.
3. **Custom CSS**: To further refine the design.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd calculator-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
calculator-app/
|-- src/
|   |-- App.jsx         # Main React component
|   |-- App.css         # Custom styles
|-- public/
|-- package.json        # Project configuration
|-- README.md           # Project documentation
```

---

## How to Use

1. **Launch the app**: Open the app in your browser.
2. **Perform calculations**:
   - Enter numbers and operations using the buttons.
   - Press "=" to compute the result.
   - Use "C" to clear the input.

---

## Code Highlights

### App.jsx

The entire calculator functionality is implemented in a single file:
- **State Management**:
  - `useState` is used to manage input and result.
- **Event Handling**:
  - Button clicks are handled to append inputs or perform actions (e.g., clear or calculate).
- **Dynamic Rendering**:
  - The buttons are rendered dynamically using `map()` to reduce redundancy.

### Custom Styling

- **Dark Mode**: Implemented with a combination of Bootstrap classes and custom CSS.
- **Hover Effects**: Smooth animations to improve user interaction.

---

## Future Enhancements

1. **Advanced Operations**: Add support for square roots, exponents, etc.
2. **History Feature**: Display past calculations.
3. **Keyboard Input**: Allow users to use their keyboard for calculations.

---

## License

This project is licensed under the MIT License. Feel free to use and modify the code as needed.

---

## Author

- **Your Name**
- [GitHub Profile](https://github.com/Kameshnic)

---



## Screenshots
![{4C1BFA8D-C4F8-4D84-B5EC-C085EF48CBA7}](https://github.com/user-attachments/assets/fc8ce2ac-fa92-4276-b430-d192d18da976)

![image](https://github.com/user-attachments/assets/fdd2948e-7268-4866-b913-8f2cdb28b5f9)

![image](https://github.com/user-attachments/assets/bcf2cc0d-603b-4180-ac35-45f424286ff9)


---

