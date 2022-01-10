import React from 'react';
import { useReducer } from 'react';
import { ToCart } from '../components/ToCart';
import { ShoppingCart } from '../components/ShoppingCart';

const someItems = [
    { id: 0, text: 'Potion', done: false }, 
    { id: 1, text: 'Ether', done: false }, 
    { id: 2, text: 'Bomb', done: false } 
]


const addUpdate = (items, action) => {
    switch (action.type) {
        case 'added' : {
            return [...items, {
                id: action.id,
                text: action.text,
                done: false
            }]
         }
         case 'updated': {
            return items.map((item) => {
                if (item.id === action.task.id) {
                    return action.task
                }
                return item
            })
        }
        case 'deleted': {
            return items.filter((item) => 
            item.id !== action.id)
        }
        default: {
          return someItems
        }
    }
}