import React from 'react'
import { useState } from 'react'

export const Item = ({ item, onChange, onDelete}) => {
    const [updating, setUpdating] = useState(false)

    let itemContent;
     if(updating) {
         itemContent = (
            <>
                <input   
                    type="text"
                    value={item.text}
                    onChange={(e) => {
                    onchange({ ...item, text: e.target.value })
                }}/>

                <button 
                    aria-label="save"
                    type="button"
                    name="save"
                    onClick={() => setUpdating(false)}
                >
                    SAVE
                </button>
            </>
         )
        
     } else {
         itemContent = (
             <>
             <p>{item.text}</p>

             <button 
             aria-label="updating"
             type="button"
             onClick={() => setUpdating(true)}
             >
                UPDATE
            </button>
             </>
         )
     }
     return (
        <div>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={(e) => {
              onChange({ ...item, checked: e.target.checked });
            }}
          />
          {itemContent}
          <button
            aria-label="delete"
            type="button"
            name="delete"
            onClick={() => onDelete(item.id)}
          >
            DELETE
          </button>
        </div>
      );
}

