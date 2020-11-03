import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  alertError(titleParams: string, textParams: string) {
    Swal.fire({
      title: titleParams,
      text: textParams,
      icon: 'error'
    });
  }

  alertOk(titleParams: string, textParams: string) {
    Swal.fire({
      title: titleParams,
      text: textParams,
      icon: 'success'
    });
  }

  alertWarn(titleParams: string, textParams: string) {
    Swal.fire({
      title: titleParams,
      text: textParams,
      icon: 'warning'
    });
  }
}
