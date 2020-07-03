import React from 'react'

export const Toast = ({requeststate,mensaje}) => {
    return requeststate ?(
        <div className="alert alert-danger" role="alert">
  { mensaje }
</div>
    ):null
}
