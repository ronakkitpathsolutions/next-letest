import React, { useState } from 'react'
import { classNames } from '../../utils/helper';
import Icon from '../utilities/icons/Icon';

const Navbar = ({Menus = [], ...props}) => {
    const [open, setOpen] = useState(true);
    return (
        <section {...props} className={classNames('bg-[#726bfa] h-screen p-5  pt-8 relative duration-300', open ? 'w-72' : 'w-[4.25rem]')}>
        <div className="flex gap-x-4 items-center">
            <span className={classNames('cursor-pointer duration-500')} onClick={() => setOpen(!open)}>
              <Icon type='menu' className="text-white text-[1.75rem]" />
            </span>
          <h1 className={classNames('text-white origin-left font-medium text-xl duration-200', open ? '' : 'scale-0')}>
            Form
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map(({title, gap, ...data}, index) => (
            <li {...data} key={index} 
              className={classNames('flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4', gap ?  "mt-9" : "mt-2" )}>
              <span className={classNames('origin-left duration-200', open ? '' : 'hidden')}>
                {title}
              </span>
            </li>
          ))}
        </ul>
      </section>
    )
}

export default Navbar