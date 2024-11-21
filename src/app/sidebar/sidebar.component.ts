import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isDarkMode = false;
  isSidebarClosed = false;
  isProfileMenuOpen = false;
  isTreasurySubmenuOpen = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  toggleTreasurySubmenu() {
    this.isTreasurySubmenuOpen = !this.isTreasurySubmenuOpen;
  }

  expandSidebar() {
    this.isSidebarClosed = false;
  }

  collapseSidebar() {
    this.isSidebarClosed = true;
  }

  logout() {
    // Lógica para cerrar sesión
  }
}
