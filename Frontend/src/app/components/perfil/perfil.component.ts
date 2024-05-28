
import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.addLinkElement();
    /*this.loadScript('assets/xato/plugins/apex/apexcharts.min.js');
    this.loadScript('assets/xato/plugins/flatpickr/flatpickr.js');
    this.loadScript('assets/js/dashboard.js');*/
  }




  loadScript(src: string): void {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }

  addLinkElement() {
    const link: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'rel', 'stylesheet');
    this.renderer.setAttribute(link, 'href', 'assets/xato/assets/css/pages/profile.css');
    this.renderer.appendChild(this.document.head, link);

    const link2: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link2, 'rel', 'stylesheet');
    this.renderer.setAttribute(link2, 'href', 'assets/xato/plugins/apex/apexcharts.css');
    this.renderer.appendChild(this.document.head, link2);

    const link3: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link3, 'rel', 'stylesheet');
    this.renderer.setAttribute(link3, 'href', 'assets/xato/assets/css/dashboard/dashboard_1.css');
    this.renderer.appendChild(this.document.head, link3);

    const link4: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link4, 'rel', 'stylesheet');
    this.renderer.setAttribute(link4, 'href', 'assets/xato/plugins/flatpickr/flatpickr.css');
    this.renderer.appendChild(this.document.head, link4);

    const link5: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link5, 'rel', 'stylesheet');
    this.renderer.setAttribute(link5, 'href', 'assets/xato/plugins/flatpickr/custom-flatpickr.css');
    this.renderer.appendChild(this.document.head, link5);

    const link6: HTMLLinkElement = this.renderer.createElement('link');
    this.renderer.setAttribute(link6, 'rel', 'stylesheet');
    this.renderer.setAttribute(link6, 'href', 'assets/xato/assets/css/elements/tooltip.css');
    this.renderer.appendChild(this.document.head, link6);
  }
}
