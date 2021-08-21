import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { SidebarService } from '../sidebar/sidebar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(
    public sidebarService: SidebarService,
    public authService: AuthService) { }

  toggleSidebar() {
    this.sidebarService.setSidebarState(!this.sidebarService.getSidebarState());

    if ($("#wrapper").hasClass("nav-collapsed")) {
      // unpin sidebar when hovered
      $("#wrapper").removeClass("nav-collapsed");
      $("#sidebar-wrapper").unbind("hover");
    } else {
      $("#wrapper").addClass("nav-collapsed");
      $("#sidebar-wrapper").hover(
        function () {
          $("#wrapper").addClass("sidebar-hovered");
        },
        function () {
          $("#wrapper").removeClass("sidebar-hovered");
        }
      )

    }
  }

  getSideBarState() {
    return this.sidebarService.getSidebarState();
  }

  hideSidebar() {
    this.sidebarService.setSidebarState(true);
  }


  ngOnInit() {
    /* Search Bar */
    $(document).ready(function () {
      $(".search-btn-mobile").on("click", function () {
        $(".search-bar").addClass("full-search-bar");
      });
      $(".search-arrow-back").on("click", function () {
        $(".search-bar").removeClass("full-search-bar");
      });
    });
  }

  logout() {
    this.authService.logout();
  }
}
