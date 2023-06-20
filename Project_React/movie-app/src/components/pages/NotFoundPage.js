import { useEffect } from "react";

function NotFoundPage () {
  useEffect( () => {
    document.title = '404 NotFound';
  }, []);

  return (
    <div>404 Page</div>
  )
}

export default NotFoundPage;