import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }
  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): string | null {
    const storedValue = sessionStorage.getItem(key);
    return storedValue;
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
