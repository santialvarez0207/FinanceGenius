import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    
    this.addLinkElement();
    this.getDate();
    /*this.loadScript('assets/xato/plugins/apex/apexcharts.min.js');
    this.loadScript('assets/xato/plugins/flatpickr/flatpickr.js');
    this.loadScript('assets/js/dashboard.js');*/
  }

  getDate(){
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    const dateInput = document.getElementById('date') as HTMLInputElement;

    dateInput.value = formattedDate;
  }
  
  modalClose(modalId:String): void{
    let modals = document.querySelectorAll(`#${modalId}`) as NodeListOf<HTMLDivElement>;
    modals.forEach(modalId => {
      modalId!.classList.remove('visto');
    });
  }

  modalOpen(modalId:String): void{
    let modals = document.querySelectorAll(`#${modalId}`) as NodeListOf<HTMLDivElement>;
    modals.forEach(modalId => {
      modalId!.classList.add('visto');
    });
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
    this.renderer.setAttribute(link, 'href', 'assets/xato/assets/css/apps/contacts.css');
    this.renderer.appendChild(this.document.head, link);

  }
}
