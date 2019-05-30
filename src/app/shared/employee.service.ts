import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  constructor( private firestore: AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
}
