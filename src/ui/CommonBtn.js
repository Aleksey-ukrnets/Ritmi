import React from 'react'
import cn from 'classnames'

export default function CommonBtn({className, text, handler}) {
  return (
    <div className={cn('btn', className)} onClick={handler} >
        {text}
    </div>
  )
}
