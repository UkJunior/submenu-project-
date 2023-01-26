import React from 'react';
import { useState, useRef, useEffect } from 'react';


function Submenu() {
const [columns, setColumn] = useState('col-2');

useEffect(()=>{
git

})

return (
    <aside className={}>
    <section>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
    {links.map((link, index)=>{
        const { url, icon, label } = link;
        return (
            <a href={url} key={index}>
            {icon}
            {label}
            </a>
        )
    })}
    </div>
    </section>
    </aside>
  )
}

export default Submenu;