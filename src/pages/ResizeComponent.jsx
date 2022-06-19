import React from 'react';

// hooks
import { useResizeWindow } from '../hooks/useResizeWindow';

function ResizeComponent() {
  const { onSmallScreen } = useResizeWindow();

  return (
    <div>
      ResizeComponent is: {onSmallScreen ? "small" : "large"}
    </div>
  )
}

export default ResizeComponent