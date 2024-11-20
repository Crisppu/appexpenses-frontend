import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
// PrimeNG Modules
import { MenuItem } from "primeng/api";
import { MenubarModule } from "primeng/menubar";
import { BadgeModule } from "primeng/badge";
import { AvatarModule } from "primeng/avatar";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;


  ngOnInit() {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home"
      },
      {
        label: "Features",
        icon: "pi pi-star"
      },
      {
        label: "Projects",
        icon: "pi pi-search",
        items: [
          {
            label: "Core",
            icon: "pi pi-bolt",
            shortcut: "⌘+S"
          },
          {
            label: "Blocks",
            icon: "pi pi-server",
            shortcut: "⌘+B"
          },
          {
            label: "UI Kit",
            icon: "pi pi-pencil",
            shortcut: "⌘+U"
          },
          {
            separator: true
          },
          {
            label: "Templates",
            icon: "pi pi-palette",
            items: [
              {
                label: "Apollo",
                icon: "pi pi-palette",
                badge: "2"
              },
              {
                label: "Ultima",
                icon: "pi pi-palette",
                badge: "3"
              }
            ]
          }
        ]
      },
      {
        label: "Contact",
        icon: "pi pi-envelope",
        badge: "3"
      }
    ];
  }
}