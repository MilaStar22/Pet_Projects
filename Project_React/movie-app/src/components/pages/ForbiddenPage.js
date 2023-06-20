import { useEffect } from "react";

function ForbiddenPage () {
  useEffect( () => {
    document.title = '403 Error';
  }, []);

  return (
    <div>403 Page</div>
  )
}

export default ForbiddenPage;