// // JavaScript code to close the menu after selecting an item
// document.querySelectorAll('.nav-links li a').forEach(item => {
//     item.addEventListener('click', () => {
//         document.getElementById('menu-toggler').checked = false;
//     });
// });

document.querySelectorAll('.nav-links li a').forEach(item => {
    item.addEventListener('click', (event) => {
        const parent = event.target.closest('.dropdown');
        if (!parent) {
            document.getElementById('menu-toggler').checked = false;
        }
    });
});

document.querySelectorAll('.nav-links li a').forEach(item => {
    item.addEventListener('click', (event) => {
        const parent = event.target.closest('.dropdown');
        if (!parent || !parent.closest('menu-item')) {
            document.getElementById('menu-toggler').checked = false;
        }
    });
});