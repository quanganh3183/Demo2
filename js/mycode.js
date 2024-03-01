function openNav() {
    var menu = document.getElementsByClassName('menu');
        var openMenu = document.getElementById('mySidenav');
        var headerHeight = menu.clientHeight;

        // Open/Close Menu Mobile
        openMenu.onclick = function() {
            var isClosed = menu.clientHeight === headerHeight
            if (isClosed) {
                menu.style.height = 'auto'
            } else {
                menu.style.height = null;
            }
        }
}