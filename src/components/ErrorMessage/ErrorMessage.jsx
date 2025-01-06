import React from 'react'


const ErrorMessage = ({children}) => {
  return (
    <div style={{
        width:'100%',
        padding:10,
        marginBottom:10,
        border:'1px solid red',
        borderRadius:5,
        textAlign:'center',
        color:'white',
        textTransform:'capitalize',
        backgroundColor:'orangered'
    }}>
        {children}
      
    </div>
  )
}

export default ErrorMessage
