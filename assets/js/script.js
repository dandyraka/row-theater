const COL_END_LEFT = 9; 
const COL_START_MIDDLE_LEFT = 11; 
const COL_END_MIDDLE_LEFT = COL_START_MIDDLE_LEFT + 5; 
const COL_START_MIDDLE_RIGHT = 18; 
const COL_END_MIDDLE_RIGHT = COL_START_MIDDLE_RIGHT + 5; 
const COL_START_RIGHT = 25; 
const ROW_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

function getColStart(seatCount) {
    return COL_END_LEFT - seatCount + 1;
}

const seatData = [
    { id: 'A-1', col: getColStart(4) }, { id: 'A-2', col: getColStart(4) + 1 }, { id: 'A-3', col: getColStart(4) + 2 }, { id: 'A-4', col: getColStart(4) + 3 }, 
    { id: 'B-1', col: getColStart(5) }, { id: 'B-2', col: getColStart(5) + 1 }, { id: 'B-3', col: getColStart(5) + 2 }, { id: 'B-4', col: getColStart(5) + 3 }, { id: 'B-5', col: getColStart(5) + 4 }, 
    { id: 'C-1', col: getColStart(6) }, { id: 'C-2', col: getColStart(6) + 1 }, { id: 'C-3', col: getColStart(6) + 2 }, { id: 'C-4', col: getColStart(6) + 3 }, { id: 'C-5', col: getColStart(6) + 4 }, { id: 'C-6', col: getColStart(6) + 5 }, 
    { id: 'D-1', col: getColStart(7) }, { id: 'D-2', col: getColStart(7) + 1 }, { id: 'D-3', col: getColStart(7) + 2 }, { id: 'D-4', col: getColStart(7) + 3 }, { id: 'D-5', col: getColStart(7) + 4 }, { id: 'D-6', col: getColStart(7) + 5 }, { id: 'D-7', col: getColStart(7) + 6 }, 
    { id: 'E-1', col: getColStart(7) }, { id: 'E-2', col: getColStart(7) + 1 }, { id: 'E-3', col: getColStart(7) + 2 }, { id: 'E-4', col: getColStart(7) + 3 }, { id: 'E-5', col: getColStart(7) + 4 }, { id: 'E-6', col: getColStart(7) + 5 }, { id: 'E-7', col: getColStart(7) + 6 }, 
    { id: 'F-1', col: getColStart(7) }, { id: 'F-2', col: getColStart(7) + 1 }, { id: 'F-3', col: getColStart(7) + 2 }, { id: 'F-4', col: getColStart(7) + 3 }, { id: 'F-5', col: getColStart(7) + 4 }, { id: 'F-6', col: getColStart(7) + 5 }, { id: 'F-7', col: getColStart(7) + 6 }, 
    { id: 'G-1', col: getColStart(8) }, { id: 'G-2', col: getColStart(8) + 1 }, { id: 'G-3', col: getColStart(8) + 2 }, { id: 'G-4', col: getColStart(8) + 3 }, { id: 'G-5', col: getColStart(8) + 4 }, { id: 'G-6', col: getColStart(8) + 5 }, { id: 'G-7', col: getColStart(8) + 6 }, { id: 'G-8', col: getColStart(8) + 7 }, 
    { id: 'H-1', col: getColStart(8) }, { id: 'H-2', col: getColStart(8) + 1 }, { id: 'H-3', col: getColStart(8) + 2 }, { id: 'H-4', col: getColStart(8) + 3 }, { id: 'H-5', col: getColStart(8) + 4 }, { id: 'H-6', col: getColStart(8) + 5 }, { id: 'H-7', col: getColStart(8) + 6 }, { id: 'H-8', col: getColStart(8) + 7 }, 
    { id: 'I-1', col: getColStart(8) }, { id: 'I-2', col: getColStart(8) + 1 }, { id: 'I-3', col: getColStart(8) + 2 }, { id: 'I-4', col: getColStart(8) + 3 }, { id: 'I-5', col: getColStart(8) + 4 }, { id: 'I-6', col: getColStart(8) + 5 }, { id: 'I-7', col: getColStart(8) + 6 }, { id: 'I-8', col: getColStart(8) + 7 }, 
    { id: 'J-1', col: getColStart(8) }, { id: 'J-2', col: getColStart(8) + 1 }, { id: 'J-3', col: getColStart(8) + 2 }, { id: 'J-4', col: getColStart(8) + 3 }, { id: 'J-5', col: getColStart(8) + 4 }, { id: 'J-6', col: getColStart(8) + 5 }, { id: 'J-7', col: getColStart(8) + 6 }, { id: 'J-8', col: getColStart(8) + 7 },

    { id: 'A-5', col: COL_START_MIDDLE_LEFT }, { id: 'A-6', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'A-7', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'A-8', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'A-9', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'A-10', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'B-6', col: COL_START_MIDDLE_LEFT }, { id: 'B-7', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'B-8', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'B-9', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'B-10', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'B-11', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'C-7', col: COL_START_MIDDLE_LEFT }, { id: 'C-8', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'C-9', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'C-10', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'C-11', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'C-12', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'D-8', col: COL_START_MIDDLE_LEFT }, { id: 'D-9', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'D-10', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'D-11', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'D-12', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'D-13', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'E-8', col: COL_START_MIDDLE_LEFT }, { id: 'E-9', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'E-10', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'E-11', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'E-12', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'E-13', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'F-8', col: COL_START_MIDDLE_LEFT }, { id: 'F-9', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'F-10', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'F-11', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'F-12', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'F-13', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'G-9', col: COL_START_MIDDLE_LEFT }, { id: 'G-10', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'G-11', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'G-12', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'G-13', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'G-14', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'H-9', col: COL_START_MIDDLE_LEFT }, { id: 'H-10', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'H-11', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'H-12', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'H-13', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'H-14', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'I-9', col: COL_START_MIDDLE_LEFT }, { id: 'I-10', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'I-11', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'I-12', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'I-13', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'I-14', col: COL_START_MIDDLE_LEFT + 5 },
    { id: 'J-9', col: COL_START_MIDDLE_LEFT }, { id: 'J-10', col: COL_START_MIDDLE_LEFT + 1 }, { id: 'J-11', col: COL_START_MIDDLE_LEFT + 2 }, { id: 'J-12', col: COL_START_MIDDLE_LEFT + 3 }, { id: 'J-13', col: COL_START_MIDDLE_LEFT + 4 }, { id: 'J-14', col: COL_START_MIDDLE_LEFT + 5 },

    { id: 'A-11', col: COL_START_MIDDLE_RIGHT }, { id: 'A-12', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'A-13', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'A-14', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'A-15', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'A-16', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'B-12', col: COL_START_MIDDLE_RIGHT }, { id: 'B-13', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'B-14', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'B-15', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'B-16', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'B-17', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'C-13', col: COL_START_MIDDLE_RIGHT }, { id: 'C-14', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'C-15', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'C-16', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'C-17', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'C-18', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'D-14', col: COL_START_MIDDLE_RIGHT }, { id: 'D-15', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'D-16', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'D-17', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'D-18', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'D-19', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'E-14', col: COL_START_MIDDLE_RIGHT }, { id: 'E-15', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'E-16', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'E-17', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'E-18', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'E-19', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'F-14', col: COL_START_MIDDLE_RIGHT }, { id: 'F-15', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'F-16', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'F-17', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'F-18', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'F-19', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'G-15', col: COL_START_MIDDLE_RIGHT }, { id: 'G-16', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'G-17', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'G-18', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'G-19', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'G-20', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'H-15', col: COL_START_MIDDLE_RIGHT }, { id: 'H-16', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'H-17', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'H-18', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'H-19', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'H-20', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'I-15', col: COL_START_MIDDLE_RIGHT }, { id: 'I-16', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'I-17', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'I-18', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'I-19', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'I-20', col: COL_START_MIDDLE_RIGHT + 5 },
    { id: 'J-15', col: COL_START_MIDDLE_RIGHT }, { id: 'J-16', col: COL_START_MIDDLE_RIGHT + 1 }, { id: 'J-17', col: COL_START_MIDDLE_RIGHT + 2 }, { id: 'J-18', col: COL_START_MIDDLE_RIGHT + 3 }, { id: 'J-19', col: COL_START_MIDDLE_RIGHT + 4 }, { id: 'J-20', col: COL_START_MIDDLE_RIGHT + 5 },

    { id: 'A-17', col: COL_START_RIGHT }, { id: 'A-18', col: COL_START_RIGHT + 1 }, { id: 'A-19', col: COL_START_RIGHT + 2 }, { id: 'A-20', col: COL_START_RIGHT + 3 }, { id: 'A-21', col: COL_START_RIGHT + 4 },
    { id: 'B-18', col: COL_START_RIGHT }, { id: 'B-19', col: COL_START_RIGHT + 1 }, { id: 'B-20', col: COL_START_RIGHT + 2 }, { id: 'B-21', col: COL_START_RIGHT + 3 }, { id: 'B-22', col: COL_START_RIGHT + 4 }, { id: 'B-23', col: COL_START_RIGHT + 5 },
    { id: 'C-19', col: COL_START_RIGHT }, { id: 'C-20', col: COL_START_RIGHT + 1 }, { id: 'C-21', col: COL_START_RIGHT + 2 }, { id: 'C-22', col: COL_START_RIGHT + 3 }, { id: 'C-23', col: COL_START_RIGHT + 4 }, { id: 'C-24', col: COL_START_RIGHT + 5 }, { id: 'C-25', col: COL_START_RIGHT + 6 },
    { id: 'D-20', col: COL_START_RIGHT }, { id: 'D-21', col: COL_START_RIGHT + 1 }, { id: 'D-22', col: COL_START_RIGHT + 2 }, { id: 'D-23', col: COL_START_RIGHT + 3 }, { id: 'D-24', col: COL_START_RIGHT + 4 }, { id: 'D-25', col: COL_START_RIGHT + 5 }, { id: 'D-26', col: COL_START_RIGHT + 6 },
    { id: 'E-20', col: COL_START_RIGHT }, { id: 'E-21', col: COL_START_RIGHT + 1 }, { id: 'E-22', col: COL_START_RIGHT + 2 }, { id: 'E-23', col: COL_START_RIGHT + 3 }, { id: 'E-24', col: COL_START_RIGHT + 4 }, { id: 'E-25', col: COL_START_RIGHT + 5 }, { id: 'E-26', col: COL_START_RIGHT + 6 },
    { id: 'F-20', col: COL_START_RIGHT }, { id: 'F-21', col: COL_START_RIGHT + 1 }, { id: 'F-22', col: COL_START_RIGHT + 2 }, { id: 'F-23', col: COL_START_RIGHT + 3 }, { id: 'F-24', col: COL_START_RIGHT + 4 }, { id: 'F-25', col: COL_START_RIGHT + 5 }, { id: 'F-26', col: COL_START_RIGHT + 6 },
    { id: 'G-21', col: COL_START_RIGHT }, { id: 'G-22', col: COL_START_RIGHT + 1 }, { id: 'G-23', col: COL_START_RIGHT + 2 }, { id: 'G-24', col: COL_START_RIGHT + 3 }, { id: 'G-25', col: COL_START_RIGHT + 4 }, { id: 'G-26', col: COL_START_RIGHT + 5 }, { id: 'G-27', col: COL_START_RIGHT + 6 },
    { id: 'H-21', col: COL_START_RIGHT }, { id: 'H-22', col: COL_START_RIGHT + 1 }, { id: 'H-23', col: COL_START_RIGHT + 2 }, { id: 'H-24', col: COL_START_RIGHT + 3 }, { id: 'H-25', col: COL_START_RIGHT + 4 }, { id: 'H-26', col: COL_START_RIGHT + 5 }, { id: 'H-27', col: COL_START_RIGHT + 6 },
    { id: 'I-21', col: COL_START_RIGHT }, { id: 'I-22', col: COL_START_RIGHT + 1 }, { id: 'I-23', col: COL_START_RIGHT + 2 }, { id: 'I-24', col: COL_START_RIGHT + 3 }, { id: 'I-25', col: COL_START_RIGHT + 4 }, { id: 'I-26', col: COL_START_RIGHT + 5 },
    { id: 'J-21', col: COL_START_RIGHT }, { id: 'J-22', col: COL_START_RIGHT + 1 }, { id: 'J-23', col: COL_START_RIGHT + 2 }, { id: 'J-24', col: COL_START_RIGHT + 3 }, { id: 'J-25', col: COL_START_RIGHT + 4 }, { id: 'J-26', col: COL_START_RIGHT + 5 }
];

const layoutContainer = document.getElementById('seat-layout');
const labelsContainer = document.getElementById('row-labels-container');
const resetButton = document.getElementById('reset-button');
const screenshotButton = document.getElementById('screenshot-button'); 
const actionButtonsContainer = document.getElementById('action-buttons');
const screenshotArea = document.getElementById('screenshot-area');
const localStorageKey = 'jkt48_seats_obtained';

function loadSeatsStatus() {
    const status = localStorage.getItem(localStorageKey);
    return status ? JSON.parse(status) : {};
}

function saveSeatsStatus(status) {
    localStorage.setItem(localStorageKey, JSON.stringify(status));
}

function handleSeatClick(event) {
    const seatElement = event.currentTarget;
    const seatId = seatElement.dataset.seatId;
    let seatsStatus = loadSeatsStatus();

    if (seatElement.classList.contains('occupied')) {
        seatElement.classList.remove('occupied', 'bg-seat-obtained');
        seatElement.classList.add('bg-seat-default');
        delete seatsStatus[seatId];
    } else {
        seatElement.classList.add('occupied', 'bg-seat-obtained');
        seatElement.classList.remove('bg-seat-default');
        seatsStatus[seatId] = true;
    }

    saveSeatsStatus(seatsStatus);
}

function resetSeats() {
    if (confirm("Yakin ingin reset kursi? Data akan hilang.")) {
        localStorage.removeItem(localStorageKey);
        renderLayout();
    }
}

function createSeatElement(seatData, seatsStatus) {
    const isOccupied = seatsStatus[seatData.id];
    const [rowChar] = seatData.id.split('-');
    
    const seat = document.createElement('div');
    
    seat.className = `seat w-8 h-8 border border-gray-600 flex items-center justify-center text-[10px] cursor-pointer rounded-sm transition duration-100 ease-in-out hover:border-white ${isOccupied ? 'occupied bg-seat-obtained' : 'bg-seat-default'}`;
    if (isOccupied) {
        seat.classList.add('occupied');
    }

    seat.textContent = seatData.id; 
    seat.dataset.seatId = seatData.id;
    seat.dataset.row = rowChar; 
    seat.style.gridColumn = seatData.col; 

    seat.addEventListener('click', handleSeatClick);

    return seat;
}

function renderRowLabels() {
    labelsContainer.innerHTML = '';
    ROW_CHARS.forEach(row => {
        const label = document.createElement('div');
        label.className = 'row-label';
        label.textContent = row;
        labelsContainer.appendChild(label);
    });
}

function renderLayout() {
    const seatsStatus = loadSeatsStatus();
    layoutContainer.innerHTML = ''; 

    seatData.forEach(data => {
        const seatElement = createSeatElement(data, seatsStatus);
        layoutContainer.appendChild(seatElement);
    });
    
    renderRowLabels();
}

function takeScreenshot() {
    actionButtonsContainer.style.display = 'none';

    html2canvas(screenshotArea, {
        useCORS: true,
        allowTaint: false,
        scale: 2,
        windowWidth: 1500,
        windowHeight: 800,
    })
    .then(canvas => {
        actionButtonsContainer.style.display = 'flex';

        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'jkt48-seat-history.png';
        link.href = image;
        link.click();

        alert("Screenshot berhasil diunduh!");
    })
    .catch(error => {
        actionButtonsContainer.style.display = 'flex';
        console.error('Terjadi kesalahan saat membuat screenshot:', error);
        alert("Gagal screenshot.");
    });
}

document.addEventListener('DOMContentLoaded', renderLayout);
resetButton.addEventListener('click', resetSeats);
screenshotButton.addEventListener('click', takeScreenshot);