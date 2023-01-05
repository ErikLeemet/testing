// src/items/item.interface.ts

export interface BaseItem {
    project: string;
    budget: number;
    balance: number;
    startDate: string;
    endDate: string;
  }

  export interface Item extends BaseItem {
    id: number;
  }
