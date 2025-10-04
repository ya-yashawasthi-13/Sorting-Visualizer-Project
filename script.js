// ==================== GLOBAL VARIABLES ====================
let array = [];
let arraySize = 50;
let speed = 50;
let sorting = false;
let paused = false;
let comparisons = 0;
let swaps = 0;
let startTime = 0;
let sortedIndices = new Set();

// ==================== ALGORITHM INFORMATION ====================
const algorithmInfo = {
    bubble: {
        name: 'Bubble Sort',
        time: 'O(n²)',
        space: 'O(1)',
        description: 'Repeatedly swaps adjacent elements if in wrong order'
    },
    selection: {
        name: 'Selection Sort',
        time: 'O(n²)',
        space: 'O(1)',
        description: 'Selects minimum element and places it at beginning'
    },
    insertion: {
        name: 'Insertion Sort',
        time: 'O(n²)',
        space: 'O(1)',
        description: 'Builds sorted array one element at a time'
    },
    merge: {
        name: 'Merge Sort',
        time: 'O(n log n)',
        space: 'O(n)',
        description: 'Divides array and merges sorted halves'
    },
    quick: {
        name: 'Quick Sort',
        time: 'O(n log n)',
        space: 'O(log n)',
        description: 'Picks pivot and partitions array around it'
    },
    heap: {
        name: 'Heap Sort',
        time: 'O(n log n)',
        space: 'O(1)',
        description: 'Uses heap data structure to sort elements'
    }
};

// ==================== DOM ELEMENTS ====================
const arrayContainer = document.getElementById('arrayContainer');
const algorithmSelect = document.getElementById('algorithm');
const arraySizeSlider = document.getElementById('arraySize');
const arraySizeValue = document.getElementById('arraySizeValue');
const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speedValue');
const sortBtn = document.getElementById('sortBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const infoBtn = document.getElementById('infoBtn');
const infoPanel = document.getElementById('infoPanel');

// ==================== EVENT LISTENERS ====================
arraySizeSlider.addEventListener('input', (e) => {
    arraySize = parseInt(e.target.value);
    arraySizeValue.textContent = arraySize;
    if (!sorting) generateArray();
});

speedSlider.addEventListener('input', (e) => {
    speed = parseInt(e.target.value);
    speedValue.textContent = speed;
});

algorithmSelect.addEventListener('change', updateAlgorithmInfo);
sortBtn.addEventListener('click', startSorting);
pauseBtn.addEventListener('click', togglePause);
resetBtn.addEventListener('click', resetArray);
shuffleBtn.addEventListener('click', () => {
    if (!sorting) generateArray();
});
infoBtn.addEventListener('click', () => {
    infoPanel.classList.toggle('active');
});

// ==================== INITIALIZATION ====================
generateArray();
updateAlgorithmInfo();

// ==================== UTILITY FUNCTIONS ====================

// Generate random array
function generateArray() {
    array = [];
    sortedIndices.clear();
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 380) + 20);
    }
    renderArray();
    resetStats();
}

// Render array as bars
function renderArray(comparing = [], swapping = []) {
    arrayContainer.innerHTML = '';
    array.forEach((value, idx) => {
        const bar = document.createElement('div');
        bar.className = 'array-bar';
        bar.style.height = `${(value / 400) * 100}%`;
        
        if (sortedIndices.has(idx)) {
            bar.classList.add('sorted');
        } else if (swapping.includes(idx)) {
            bar.classList.add('swapping');
        } else if (comparing.includes(idx)) {
            bar.classList.add('comparing');
        }
        
        arrayContainer.appendChild(bar);
    });
}

// Update algorithm information display
function updateAlgorithmInfo() {
    const algo = algorithmSelect.value;
    const info = algorithmInfo[algo];
    document.getElementById('algoName').textContent = info.name;
    document.getElementById('timeComplexity').textContent = info.time;
    document.getElementById('spaceComplexity').textContent = info.space;
    document.getElementById('algoDescription').textContent = info.description;
}

// Reset statistics
function resetStats() {
    comparisons = 0;
    swaps = 0;
    startTime = 0;
    updateStats();
}

// Update statistics display
function updateStats() {
    document.getElementById('comparisons').textContent = comparisons;
    document.getElementById('swaps').textContent = swaps;
    if (startTime > 0) {
        document.getElementById('time').textContent = Date.now() - startTime;
    } else {
        document.getElementById('time').textContent = 0;
    }
}

// Sleep function for animation delay
function sleep(ms) {
    return new Promise(resolve => {
        const checkPause = () => {
            if (!paused) {
                resolve();
            } else {
                setTimeout(checkPause, 100);
            }
        };
        setTimeout(checkPause, ms);
    });
}

// ==================== CONTROL FUNCTIONS ====================

// Start sorting process
async function startSorting() {
    if (sorting) return;
    
    sorting = true;
    paused = false;
    sortedIndices.clear();
    startTime = Date.now();
    resetStats();
    
    // Update UI
    sortBtn.style.display = 'none';
    pauseBtn.style.display = 'flex';
    algorithmSelect.disabled = true;
    arraySizeSlider.disabled = true;
    shuffleBtn.disabled = true;
    document.getElementById('status').textContent = 'Sorting';
    
    // Execute selected algorithm
    const algo = algorithmSelect.value;
    switch(algo) {
        case 'bubble': await bubbleSort(); break;
        case 'selection': await selectionSort(); break;
        case 'insertion': await insertionSort(); break;
        case 'merge': await mergeSort(0, array.length - 1); break;
        case 'quick': await quickSort(0, array.length - 1); break;
        case 'heap': await heapSort(); break;
    }
    
    // Mark all as sorted
    for (let i = 0; i < array.length; i++) {
        sortedIndices.add(i);
    }
    renderArray();
    
    // Reset UI
    sorting = false;
    paused = false;
    sortBtn.style.display = 'flex';
    pauseBtn.style.display = 'none';
    algorithmSelect.disabled = false;
    arraySizeSlider.disabled = false;
    shuffleBtn.disabled = false;
    document.getElementById('status').textContent = 'Complete';
}

// Toggle pause state
function togglePause() {
    paused = !paused;
    pauseBtn.innerHTML = paused ? '▶ Resume' : '⏸ Pause';
    document.getElementById('status').textContent = paused ? 'Paused' : 'Sorting';
}

// Reset array and UI
function resetArray() {
    if (sorting) {
        sorting = false;
        paused = false;
    }
    sortBtn.style.display = 'flex';
    pauseBtn.style.display = 'none';
    algorithmSelect.disabled = false;
    arraySizeSlider.disabled = false;
    shuffleBtn.disabled = false;
    document.getElementById('status').textContent = 'Ready';
    generateArray();
}

// ==================== SORTING ALGORITHMS ====================

// Bubble Sort Algorithm
async function bubbleSort() {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (!sorting) return;
            comparisons++;
            updateStats();
            renderArray([j, j + 1]);
            await sleep(101 - speed);
            
            if (array[j] > array[j + 1]) {
                swaps++;
                updateStats();
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                renderArray([j, j + 1], [j, j + 1]);
                await sleep(101 - speed);
            }
        }
        sortedIndices.add(n - i - 1);
    }
    sortedIndices.add(0);
}

// Selection Sort Algorithm
async function selectionSort() {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        if (!sorting) return;
        let minIdx = i;
        
        for (let j = i + 1; j < n; j++) {
            if (!sorting) return;
            comparisons++;
            updateStats();
            renderArray([minIdx, j]);
            await sleep(101 - speed);
            
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        
        if (minIdx !== i) {
            swaps++;
            updateStats();
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
            renderArray([i, minIdx], [i, minIdx]);
            await sleep(101 - speed);
        }
        sortedIndices.add(i);
    }
    sortedIndices.add(n - 1);
}

// Insertion Sort Algorithm
async function insertionSort() {
    const n = array.length;
    sortedIndices.add(0);
    
    for (let i = 1; i < n; i++) {
        if (!sorting) return;
        let key = array[i];
        let j = i - 1;
        
        renderArray([i]);
        await sleep(101 - speed);
        
        while (j >= 0 && array[j] > key) {
            if (!sorting) return;
            comparisons++;
            updateStats();
            renderArray([j, j + 1], [j, j + 1]);
            array[j + 1] = array[j];
            swaps++;
            updateStats();
            await sleep(101 - speed);
            j--;
        }
        array[j + 1] = key;
        sortedIndices.add(i);
        renderArray();
    }
}

// Merge Sort Algorithm
async function mergeSort(left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSort(left, mid);
        await mergeSort(mid + 1, right);
        await merge(left, mid, right);
    }
}

// Merge helper function for Merge Sort
async function merge(left, mid, right) {
    const leftArr = array.slice(left, mid + 1);
    const rightArr = array.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
        if (!sorting) return;
        comparisons++;
        updateStats();
        renderArray([k, mid + 1 + j]);
        await sleep(101 - speed);
        
        if (leftArr[i] <= rightArr[j]) {
            array[k] = leftArr[i];
            i++;
        } else {
            array[k] = rightArr[j];
            j++;
        }
        swaps++;
        updateStats();
        renderArray();
        k++;
    }
    
    while (i < leftArr.length) {
        array[k] = leftArr[i];
        renderArray();
        i++;
        k++;
    }
    
    while (j < rightArr.length) {
        array[k] = rightArr[j];
        renderArray();
        j++;
        k++;
    }
}

// Quick Sort Algorithm
async function quickSort(low, high) {
    if (low < high) {
        const pi = await partition(low, high);
        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }
}

// Partition helper function for Quick Sort
async function partition(low, high) {
    const pivot = array[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (!sorting) return i + 1;
        comparisons++;
        updateStats();
        renderArray([j, high]);
        await sleep(101 - speed);
        
        if (array[j] < pivot) {
            i++;
            swaps++;
            updateStats();
            [array[i], array[j]] = [array[j], array[i]];
            renderArray([i, j], [i, j]);
            await sleep(101 - speed);
        }
    }
    
    swaps++;
    updateStats();
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    renderArray([i + 1, high], [i + 1, high]);
    await sleep(101 - speed);
    
    return i + 1;
}

// Heap Sort Algorithm
async function heapSort() {
    const n = array.length;
    
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(n, i);
    }
    
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        if (!sorting) return;
        swaps++;
        updateStats();
        [array[0], array[i]] = [array[i], array[0]];
        renderArray([0, i], [0, i]);
        await sleep(101 - speed);
        sortedIndices.add(i);
        await heapify(i, 0);
    }
    sortedIndices.add(0);
}

// Heapify helper function for Heap Sort
async function heapify(n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n) {
        comparisons++;
        updateStats();
        renderArray([left, largest]);
        await sleep(101 - speed);
        if (array[left] > array[largest]) {
            largest = left;
        }
    }
    
    if (right < n) {
        comparisons++;
        updateStats();
        renderArray([right, largest]);
        await sleep(101 - speed);
        if (array[right] > array[largest]) {
            largest = right;
        }
    }
    
    if (largest !== i) {
        swaps++;
        updateStats();
        [array[i], array[largest]] = [array[largest], array[i]];
        renderArray([i, largest], [i, largest]);
        await sleep(101 - speed);
        await heapify(n, largest);
    }
}