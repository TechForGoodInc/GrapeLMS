import React from "react"

export default function Layout(props, { children }) {
  return (
    //https://bit.dev/bit/base-ui/layout/grid-component/~code?version=1.0.11
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}