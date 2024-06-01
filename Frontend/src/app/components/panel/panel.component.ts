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
    this.actualizar();
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

  eliminarPorId(id:string,cual:string) {
    const dataJSON = localStorage.getItem(cual);
    if (!dataJSON) {
        console.log('No hay datos en localStorage.');
        return;
    }
    const data = JSON.parse(dataJSON);
    const index = data.findIndex((item:any) => item.id === id);
    if (index === -1) {
        console.log(`No se encontró un objeto con el ID: ${id}`);
        return;
    }

    data.splice(index, 1);
    const updatedDataJSON = JSON.stringify(data);
    localStorage.setItem(cual, updatedDataJSON);

    console.log(`Objeto con ID: ${id} eliminado exitosamente.`);
    this.actualizar()
}

 agregarElemento(nuevoElemento:any,cual:string) {
  const dataJSON = localStorage.getItem(cual);
  let data = [];

  if (dataJSON) {
      data = JSON.parse(dataJSON);
  }

  data.push(nuevoElemento);

  const updatedDataJSON = JSON.stringify(data);
  localStorage.setItem(cual, updatedDataJSON);

  console.log('Nuevo elemento agregado exitosamente.');
}

gasto(){
  let title=(<HTMLInputElement>document.getElementById("gasto_titulo")).value||""
  let cant=(<HTMLInputElement>document.getElementById("gasto_cantidad")).value||""
  let fecha=(<HTMLInputElement>document.getElementById("gasto_fecha")).value||""
  const nuevoElemento = { id: this.getRandomInt(1, 1000000000000000),title:title, fecha: fecha, cantidad: cant };
  this.agregarElemento(nuevoElemento,'gasto');
  this.actualizar()
}

ingreso(){
  let title=(<HTMLInputElement>document.getElementById("ingreso_titulo")).value||""
  let cant=(<HTMLInputElement>document.getElementById("ingreso_cantidad")).value||""
  let fecha=(<HTMLInputElement>document.getElementById("ingreso_fecha")).value||""
  const nuevoElemento = { id: this.getRandomInt(1, 1000000000000000),title:title, fecha: fecha, cantidad: cant };
  this.agregarElemento(nuevoElemento,'ingreso');
  this.actualizar()

}

getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

gastos:any
ingresos:any
actualizar(){
  const dataJSON = localStorage.getItem('gasto');
  this.gastos = [];

  if (dataJSON) {
      this.gastos = JSON.parse(dataJSON);
  }

  const dataJSON2 = localStorage.getItem('ingreso');
  this.ingresos = [];

  if (dataJSON2) {
      this.ingresos = JSON.parse(dataJSON2);
  }

}


}
