# 🎨 Sorting Algorithm Visualizer

A beautiful, interactive web application that visualizes various sorting algorithms in real-time. Watch how different sorting algorithms work with stunning animations and detailed statistics.

![Sorting Visualizer](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML-5-orange.svg)
![CSS3](https://img.shields.io/badge/CSS-3-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

- **6 Sorting Algorithms**
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort

- **Interactive Controls**
  - Adjustable array size (10-100 elements)
  - Variable speed control (1-100)
  - Play/Pause functionality
  - Reset and Shuffle options
  - Algorithm information panel

- **Visual Feedback**
  - Color-coded visualization
  - Smooth animations
  - Real-time statistics tracking
  - Responsive design

- **Statistics Tracking**
  - Number of comparisons
  - Number of swaps
  - Execution time (in milliseconds)

## 🎯 Color Coding

| Color | Meaning |
|-------|---------|
| 🟣 Purple/Blue Gradient | Unsorted elements |
| 🟡 Yellow | Elements being compared |
| 🔴 Red | Elements being swapped |
| 🟢 Green | Sorted elements |

## 📁 Project Structure

```
sorting-visualizer/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript logic and algorithms
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor or IDE (VS Code recommended)
- Basic understanding of HTML, CSS, and JavaScript (optional)

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/yourusername/sorting-visualizer.git
   ```
   Or download as ZIP and extract.

2. **Navigate to Project Directory**
   ```bash
   cd sorting-visualizer
   ```

3. **Open in Browser**
   - Simply double-click `index.html`, or
   - Use Live Server extension in VS Code

### Running with VS Code

1. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install by Ritwick Dey

2. **Launch the Application**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Browser opens automatically at `http://127.0.0.1:5500`

## 📖 How to Use

1. **Select an Algorithm**
   - Choose from the dropdown menu (Bubble, Selection, Insertion, Merge, Quick, or Heap Sort)

2. **Adjust Settings**
   - **Array Size**: Drag the slider to change the number of elements (10-100)
   - **Speed**: Adjust animation speed (1=slowest, 100=fastest)

3. **Control Buttons**
   - **Sort**: Start the sorting visualization
   - **Pause/Resume**: Pause or resume the sorting process
   - **Reset**: Stop sorting and reset the array
   - **Shuffle**: Generate a new random array
   - **Info**: Toggle algorithm information panel

4. **View Statistics**
   - Watch real-time comparisons, swaps, and execution time
   - See algorithm complexity information (time & space)

## 🧮 Algorithm Complexity

| Algorithm | Time Complexity | Space Complexity | Description |
|-----------|----------------|------------------|-------------|
| Bubble Sort | O(n²) | O(1) | Repeatedly swaps adjacent elements if in wrong order |
| Selection Sort | O(n²) | O(1) | Selects minimum element and places it at beginning |
| Insertion Sort | O(n²) | O(1) | Builds sorted array one element at a time |
| Merge Sort | O(n log n) | O(n) | Divides array and merges sorted halves |
| Quick Sort | O(n log n) | O(log n) | Picks pivot and partitions array around it |
| Heap Sort | O(n log n) | O(1) | Uses heap data structure to sort elements |

## 🎨 Design Features

- **Modern UI**: Glassmorphism effects with dark gradient theme
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: CSS transitions for elegant visual effects
- **Color Gradients**: Beautiful purple-blue gradient scheme
- **Interactive Elements**: Hover effects and button animations

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **JavaScript (ES6+)**: Async/await, arrow functions, destructuring
- **No External Libraries**: Pure vanilla JavaScript implementation

## 🔧 Customization

### Changing Colors

Edit `styles.css` to modify the color scheme:

```css
/* Change background gradient */
body {
    background: linear-gradient(135deg, #yourcolor1 0%, #yourcolor2 50%, #yourcolor3 100%);
}

/* Change bar colors */
.array-bar {
    background: linear-gradient(to top, #yourcolor1, #yourcolor2);
}
```

### Adding New Algorithms

Add your algorithm to `script.js`:

```javascript
// 1. Add to algorithmInfo object
const algorithmInfo = {
    yourAlgorithm: {
        name: 'Your Sort',
        time: 'O(n log n)',
        space: 'O(1)',
        description: 'Description of your algorithm'
    }
};

// 2. Implement the algorithm
async function yourSort() {
    // Your sorting logic here
}

// 3. Add to switch case in startSorting()
case 'yourAlgorithm': await yourSort(); break;
```

### Adjusting Speed Range

Modify the speed calculation in `script.js`:

```javascript
await sleep(101 - speed); // Change the formula as needed
```

## 📱 Browser Compatibility

| Browser | Supported Version |
|---------|------------------|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |
| Opera | ✅ 76+ |

## 🐛 Known Issues

- Very large array sizes (>100) may cause performance issues on slower devices
- Pause functionality may have slight delays due to animation timing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contribution

- Add more sorting algorithms (Radix Sort, Counting Sort, etc.)
- Implement sound effects for comparisons and swaps
- Add dark/light theme toggle
- Create algorithm comparison mode
- Add step-by-step explanation feature
- Implement array input functionality

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

**Your Name**
- GitHub: https://github.com/ya-yashawasthi-13
- Email: yashawasthi88@gmail.com
- Project Link: https://ya-yashawasthi-13.github.io/Sorting-Visualizer-Project/

## 🙏 Acknowledgments

- Inspired by various sorting visualizer projects
- Color scheme inspired by modern UI design trends
- Algorithm implementations based on classic computer science textbooks

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📊 Project Stats

- **Lines of Code**: ~1000+
- **Files**: 4
- **Languages**: HTML, CSS, JavaScript
- **Development Time**: [Your time]
- **Last Updated**: 2025

---

**Made with ❤️ and JavaScript**
