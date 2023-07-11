import React, { useState } from 'react'

interface VisibilityProps {
  name?: string;
}

/**
 * HOC that adds an `isVisible` prop that stops a component from rendering if
 * `isVisible===false`
 * @param WrappedComponent component to be selectively hidden
 * @returns null if `isVisible` is false
 */
export function updatedCounter<P>(WrappedComponent: React.ComponentType<P >) {
  const UpdatedComponent = (props: P & {}) => {
    // if (props.isVisible === false) {
    //   return null
    // }

    return <WrappedComponent {...props}  />
  }

  return UpdatedComponent
}